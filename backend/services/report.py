def generate_summary(property_data, grade, flood):

    return (
        f"This property has an investment grade of {grade}. "
        f"It sits {property_data['elevation']:.1f} meters above sea level "
        f"and is approximately {property_data['coast_distance']:.0f} meters "
        f"from the coastline. "
        f"The flood risk is {flood.lower()}."
    )


def generate_recommendations(property_data, grade):

    pros = []

    cons = []

    if not property_data["floodplain"]:
        pros.append("Outside FEMA floodplain.")
    else:
        cons.append("Located inside FEMA floodplain.")

    if not property_data["wetland"]:
        pros.append("No wetland restrictions.")
    else:
        cons.append("Wetland permits may be required.")

    if property_data["coast_distance"] > 1000:
        pros.append("Far from coastline.")
    else:
        cons.append("Close to coastline.")

    if property_data["elevation"] < 15:
        cons.append("Low elevation increases flood exposure.")

    if grade in ["Excellent", "Very Good"]:
        final = "Suitable for residential and commercial investment."
    elif grade == "Good":
        final = "Suitable with minor environmental review."
    else:
        final = "Further due diligence is recommended."

    return {
        "pros": pros,
        "cons": cons,
        "recommendation": final,
    }