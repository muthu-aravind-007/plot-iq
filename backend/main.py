from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from services.mireye import fetch_property_data
from services.analysis import analyze_property
from services.scoring import calculate_property_score
from services.report import (
    generate_summary,
    generate_recommendations,
)

app = FastAPI(title="PlotIQ API")


class AnalyzeRequest(BaseModel):
    lat: float
    lng: float


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
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

    # Step 1
    mireye = fetch_property_data(
        data.lat,
        data.lng
    )

    # Step 2
    analysis = analyze_property(mireye)

    # Step 3
    score = calculate_property_score(analysis)

    # Step 4
    summary = generate_summary(
        analysis,
        score
    )

    # Step 5
    recommendations = generate_recommendations(
        analysis
    )

    return {
        "success": True,

        "property_score": score["score"],

        "grade": score["grade"],

        "terrain": score["terrain"],

        "flood_risk": score["flood_risk"],

        "utilities": score["utilities"],

        "summary": summary,

        "recommendations": recommendations,

        "breakdown": score["breakdown"],

        "sources": mireye["fields"],
    }