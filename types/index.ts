export type TraitKey =
  | "luxury"
  | "underwater"
  | "lagoon"
  | "food"
  | "activity"
  | "budget";

export type ScoreMap = Record<TraitKey, number>;

export interface Question {
  id: number;
  question: string;
  questionEn?: string;
  options: Option[];
}

export interface Option {
  text: string;
  textEn?: string;
  scores: ScoreMap;
}

export interface PersonalityType {
  id: string;
  name: string;
  nameEn?: string;
  emoji: string;
  description: string;
  descriptionEn?: string;
  characteristics: string[];
  characteristicsEn?: string[];
  resortRecommendation: string;
  resortRecommendationEn?: string;
  scores: ScoreMap;
}

export interface TraitScore {
  key: TraitKey;
  value: number;
}

export interface RankedPersonalityType {
  type: PersonalityType;
  similarity: number;
}

export interface SelectedAnswer {
  questionId: number;
  question: string;
  selectedOption: string;
  scores: ScoreMap;
}

export interface TestResult {
  personalityTypes: PersonalityType[];
  scores: ScoreMap;
  topTraits: TraitScore[];
  rankedTypes: RankedPersonalityType[];
  selectedAnswers?: SelectedAnswer[];
}
