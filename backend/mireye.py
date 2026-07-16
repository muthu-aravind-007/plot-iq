import os
import requests
from dotenv import load_dotenv

load_dotenv()

API_TOKEN = os.getenv("MIREYE_API_TOKEN")

BASE_URL = "https://api.mireye.com/v1/fetch"


def fetch_property_data(lat: float, lng: float):

    headers = {
        "Authorization": f"Bearer {API_TOKEN}",
        "Content-Type": "application/json",
    }

    payload = {
        "lat": lat,
        "lng": lng,
        "preset": "flood_risk"
    }

    response = requests.post(
        BASE_URL,
        headers=headers,
        json=payload,
        timeout=120
    )

    response.raise_for_status()

    return response.json()