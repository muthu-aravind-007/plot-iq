export interface Recommendation {
  pros: string[];
  cons: string[];
  recommendation: string;
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

  breakdown: [string, number][];

  sources: Record<string, any>;
}