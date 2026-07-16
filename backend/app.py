from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="PlotIQ API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "PlotIQ Backend Running 🚀"
    }


@app.post("/analyze")
def analyze():
    return {
        "score": 91,
        "summary": "Mock response from PlotIQ"
    }