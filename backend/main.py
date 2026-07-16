from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

class AnalyzeRequest(BaseModel):
    latitude: float
    longitude: float

app = FastAPI(title="PlotIQ API")

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
        "message": "PlotIQ Backend Running...."
    }


@app.post("/analyze")
def analyze(data: AnalyzeRequest):
    print(data.latitude)
    print(data.longitude)
    return {
        "success": True,
        "property_score": 91,
        "summary": "Excellent residential property with low flood risk.",
        "terrain": "Flat",
        "flood_risk": "Low",
        "utilities": "Available"
    }