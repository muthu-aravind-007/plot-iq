def calculate_property_score(data: dict):

    score = 100

    elevation = data["elevation"]
    coast = data["coast_distance"]

    # ---------------- Floodplain ----------------

    flood_penalty = 30 if data["floodplain"] else 0
    score -= flood_penalty

    # ---------------- Wetlands ----------------

    wetland_penalty = 20 if data["wetland"] else 0
    score -= wetland_penalty

    # ---------------- Elevation ----------------

    if elevation < 5:
        elevation_penalty = 20
    elif elevation < 15:
        elevation_penalty = 10
    else:
        elevation_penalty = 0

    score -= elevation_penalty

    # ---------------- Coast ----------------

    if coast < 500:
        coast_penalty = 15
    elif coast < 1000:
        coast_penalty = 5
    else:
        coast_penalty = 0

    score -= coast_penalty

    score = max(score, 0)

    # ---------------- Grade ----------------

    if score >= 90:
        grade = "Excellent"
    elif score >= 80:
        grade = "Very Good"
    elif score >= 70:
        grade = "Good"
    elif score >= 60:
        grade = "Fair"
    else:
        grade = "Poor"

    # ---------------- Flood Risk ----------------

    if data["floodplain"]:
        flood = "High"
    elif elevation < 10:
        flood = "Medium"
    else:
        flood = "Low"

    terrain = "Flat"
    utilities = "Likely Available"

    breakdown = {
        "floodplain": flood_penalty,
        "wetlands": wetland_penalty,
        "elevation": elevation_penalty,
        "coast": coast_penalty,
    }

    return {
        "property_score": score,
        "grade": grade,
        "terrain": terrain,
        "flood_risk": flood,
        "utilities": utilities,
        "breakdown": breakdown,
    }