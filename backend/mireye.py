import os
import requests
from dotenv import load_dotenv

load_dotenv()

BASE_URL = os.getenv("MIREYE_BASE_URL")
TOKEN = os.getenv("MIREYE_API_TOKEN")


def analyze_property(lat: float, lng: float):

    url = f"{BASE_URL}/v1/fetch"

    headers = {
        "Authorization": f"Bearer {TOKEN}",
        "Content-Type": "application/json"
    }

    payload = {
        "lat": lat,
        "lng": lng,
        "preset": "site_selection"
    }

    response = requests.post(
        url,
        headers=headers,
        json=payload,
        timeout=120
    )

    response.raise_for_status()

    return response.json()