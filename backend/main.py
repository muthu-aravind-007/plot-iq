from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel

from services.mireye import fetch_property_data
from services.analysis import analyze_property
from services.scoring import calculate_property_score
from services.report import (
    generate_summary,
    generate_recommendations,
)
from services.pdf import generate_pdf

app = FastAPI(title="PlotIQ API")


class AnalyzeRequest(BaseModel):
    lat: float
    lng: float


# Stores the latest analyzed report
latest_report = None


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://plot-iq-azure.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "PlotIQ Backend Running..."
    }


@app.post("/analyze")
def analyze(data: AnalyzeRequest):

    global latest_report

    # -------------------------------
    # Step 1 - Fetch Mireye data
    # -------------------------------
    mireye = fetch_property_data(
        data.lat,
        data.lng,
    )

    # -------------------------------
    # Step 2 - Extract useful values
    # -------------------------------
    analysis = analyze_property(mireye)

    # -------------------------------
    # Step 3 - Calculate score
    # -------------------------------
    score = calculate_property_score(analysis)

    # -------------------------------
    # Step 4 - Generate AI Report
    # -------------------------------
    summary = generate_summary(
        analysis,
        score["grade"],
        score["flood_risk"],
    )

    recommendations = generate_recommendations(
        analysis,
        score["grade"],
    )

    # -------------------------------
    # Final API response
    # -------------------------------
    response = {
        "success": True,

        "property_score": score["property_score"],

        "grade": score["grade"],

        "terrain": score["terrain"],

        "flood_risk": score["flood_risk"],

        "utilities": score["utilities"],

        "summary": summary,

        "recommendations": recommendations,

        "breakdown": score["breakdown"],

        "property": analysis,

        "sources": mireye["fields"],
    }

    # Save latest report for PDF generation
    latest_report = response

    return response


@app.get("/report/pdf")
def download_pdf():

    global latest_report

    if latest_report is None:
        return {
            "message": "Analyze a property first."
        }

    filename = generate_pdf(latest_report)

    return FileResponse(
        path=filename,
        filename="PlotIQ_Report.pdf",
        media_type="application/pdf",
    )