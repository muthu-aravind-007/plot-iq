def calculate_property_score(mireye_data: dict):

    fields = mireye_data.get("fields", {})

    score = 100

    elevation = fields.get("elevation", {}).get("value", 0)
    coast = fields.get("coast_distance_m", {}).get("value", 999999)

    floodplain = fields.get(
        "within_floodplain_polygon",
        {}
    ).get("value", False)

    wetland = fields.get(
        "intersects_wetland",
        {}
    ).get("value", False)

    wetland_count = fields.get(
        "wetlands_within_500m_count",
        {}
    ).get("value", 0)

    # ---------------- Floodplain ----------------

    if floodplain:
        score -= 30

    # ---------------- Wetlands ----------------

    if wetland:
        score -= 20

    if wetland_count > 5:
        score -= 10

    # ---------------- Elevation ----------------

    if elevation < 5:
        score -= 20
    elif elevation < 15:
        score -= 10

    # ---------------- Coast ----------------

    if coast < 500:
        score -= 15
    elif coast < 1000:
        score -= 5

    score = max(min(score, 100), 0)

    # ==================================================
    # Flood Risk
    # ==================================================

    if floodplain:
        flood = "High"

    elif elevation < 10:
        flood = "Medium"

    else:
        flood = "Low"

    # ==================================================
    # Terrain
    # ==================================================

    if elevation > 300:
        terrain = "Mountainous"

    elif elevation > 80:
        terrain = "Hilly"

    else:
        terrain = "Flat"

    # ==================================================
    # Utilities
    # ==================================================

    if coast < 1000:
        utilities = "Available"

    else:
        utilities = "Likely Available"

    # ==================================================
    # Investment Grade
    # ==================================================

    if score >= 90:
        grade = "Excellent"

    elif score >= 75:
        grade = "Good"

    elif score >= 60:
        grade = "Moderate"

    else:
        grade = "High Risk"

    # ==================================================
    # Summary
    # ==================================================

    summary = (
        f"This property has an investment grade of {grade}. "
        f"It sits {elevation:.1f} meters above sea level and "
        f"is approximately {coast:.0f} meters from the coastline. "
        f"The flood risk is {flood.lower()} "
        f"with {'nearby wetlands' if wetland else 'no direct wetland intersection'}."
    )

    return {
        "success": True,
        "property_score": score,
        "summary": summary,
        "terrain": terrain,
        "flood_risk": flood,
        "utilities": utilities,
    }