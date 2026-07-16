def generate_summary(analysis: dict, score: dict):

    return (
        f"This property has an investment grade of "
        f"{score['grade']}. "
        f"It sits {analysis['elevation']:.1f} meters above sea level "
        f"and is approximately {analysis['coast_distance']:.0f} meters "
        f"from the coastline. "
        f"The flood risk is {score['flood_risk'].lower()}."
    )


def generate_recommendations(analysis: dict):

    pros = []
    cons = []

    if analysis["elevation"] >= 15:
        pros.append("High elevation reduces flood exposure.")
    else:
        cons.append("Low elevation increases flood exposure.")

    if not analysis["floodplain"]:
        pros.append("Outside FEMA floodplain.")
    else:
        cons.append("Located inside FEMA floodplain.")

    if not analysis["wetland"]:
        pros.append("No wetland restrictions.")
    else:
        cons.append("Wetland permits may be required.")

    if analysis["coast_distance"] > 1000:
        pros.append("Far from coastline.")
    else:
        cons.append("Close to coastline.")

    recommendation = (
        "Suitable for residential and commercial investment."
        if len(cons) <= 1
        else "Additional due diligence recommended."
    )

    return {
        "pros": pros,
        "cons": cons,
        "recommendation": recommendation,
    }