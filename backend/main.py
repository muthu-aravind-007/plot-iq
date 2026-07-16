from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mireye import analyze_property
from pydantic import BaseModel

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

    lat = data.lat
    lng = data.lng

    return {
        "success": True,
        "property_score": 91,
        "summary": "Excellent residential property with low flood risk.",
        "terrain": "Flat",
        "flood_risk": "Low",
        "utilities": "Available",
    }