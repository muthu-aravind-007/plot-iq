def calculate_property_score(data: dict):

    score = 100

    breakdown = []

    # Floodplain
    if data["floodplain"]:
        score -= 30
        breakdown.append(("Floodplain", -30))
    else:
        breakdown.append(("Floodplain", 0))

    # Wetlands
    if data["wetland"]:
        score -= 20
        breakdown.append(("Wetland", -20))
    else:
        breakdown.append(("Wetland", 0))

    # Elevation

    elevation = data["elevation"]

    if elevation < 5:
        score -= 20
        breakdown.append(("Low Elevation", -20))

    elif elevation < 15:
        score -= 10
        breakdown.append(("Medium Elevation", -10))

    else:
        breakdown.append(("Elevation", 0))

    # Coast

    coast = data["coast_distance"]

    if coast < 500:
        score -= 15
        breakdown.append(("Near Coast", -15))

    elif coast < 1000:
        score -= 5
        breakdown.append(("Coast Distance", -5))

    else:
        breakdown.append(("Coast Distance", 0))

    score = max(score, 0)

    # ------------------------

    if score >= 90:
        grade = "Excellent"

    elif score >= 75:
        grade = "Good"

    elif score >= 60:
        grade = "Average"

    else:
        grade = "Poor"

    flood = (
        "High"
        if data["floodplain"]
        else "Medium"
        if elevation < 10
        else "Low"
    )

    terrain = "Flat"

    utilities = "Likely Available"

    return {
        "score": score,

        "grade": grade,

        "terrain": terrain,

        "flood_risk": flood,

        "utilities": utilities,

        "breakdown": breakdown,
    }