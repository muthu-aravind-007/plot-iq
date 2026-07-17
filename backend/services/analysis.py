def analyze_property(mireye_data):
    fields = mireye_data["fields"]

    return {
        "lat": mireye_data["lat"],
        "lng": mireye_data["lng"],

        "elevation": fields["elevation"]["value"],

        "coast_distance": fields["coast_distance_m"]["value"],

        "floodplain": fields["within_floodplain_polygon"]["value"],

        "wetland": fields["intersects_wetland"]["value"],

        "fields": fields,
    }