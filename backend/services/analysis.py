# backend/services/analysis.py

def analyze_property(mireye_data: dict):
    fields = mireye_data["fields"]

    return {
        "elevation": fields["elevation"]["value"],
        "coast_distance": fields["coast_distance_m"]["value"],

        "floodplain": fields["within_floodplain_polygon"]["value"],

        "wetland": fields["intersects_wetland"]["value"],

        "wetlands_100m":
            fields["wetlands_within_100m_count"]["value"],

        "wetlands_500m":
            fields["wetlands_within_500m_count"]["value"],

        "nearest_waterbody":
            fields["nearest_waterbody_name"]["value"],

        "surface_water":
            fields["surface_water_permanence_pct"]["value"],
    }