from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mireye import fetch_property_data
from scoring import calculate_property_score
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

    mireye = fetch_property_data(
        data.lat,
        data.lng
    )

    result = calculate_property_score(mireye)

    return result