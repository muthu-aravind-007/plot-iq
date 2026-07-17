export interface Recommendation {
  pros: string[];
  cons: string[];
  final: string;
}

export interface PropertyData {
  lat: number;
  lng: number;
  elevation: number;
  coast_distance: number;
  floodplain: boolean;
  wetland: boolean;
}

export interface Breakdown {
  floodplain: number;
  wetlands: number;
  elevation: number;
  coast: number;
}

export interface PropertyResponse {
  success: boolean;

  property_score: number;

  grade: string;

  terrain: string;

  flood_risk: string;

  utilities: string;

  summary: string;

  recommendations: Recommendation;

  breakdown: Breakdown;

  property: PropertyData;

  sources: Record<string, any>;
}