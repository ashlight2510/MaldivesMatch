export interface Question {
  id: number;
  question: string;
  options: Option[];
}

export interface Option {
  text: string;
  scores: {
    luxury: number;
    underwater: number;
    lagoon: number;
    food: number;
    activity: number;
    budget: number;
  };
}

export interface PersonalityType {
  id: string;
  name: string;
  emoji: string;
  description: string;
  characteristics: string[];
  resortRecommendation: string;
  scores: {
    luxury: number;
    underwater: number;
    lagoon: number;
    food: number;
    activity: number;
    budget: number;
  };
}

export interface TestResult {
  personalityTypes: PersonalityType[];
  scores: {
    luxury: number;
    underwater: number;
    lagoon: number;
    food: number;
    activity: number;
    budget: number;
  };
}
