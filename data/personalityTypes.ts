import { PersonalityType } from "@/types";

export const personalityTypes: PersonalityType[] = [
  {
    id: "luxury-healing",
    name: "럭셔리 힐링형",
    emoji: "👑",
    description:
      "최고급 시설에서 완벽한 휴식을 즐기는 당신! 개인 풀빌라에서 샴페인 한 잔과 함께 석양을 감상하는 것이 로망입니다.",
    characteristics: [
      "🏰 최고급 리조트 선호",
      "🛁 개인 풀빌라 필수",
      "🍾 프리미엄 다이닝 중시",
      "💆 스파와 힐링 프로그램",
      "📸 인테리어와 분위기 중요",
    ],
    resortRecommendation:
      "소네바, 식스센스, 벨라사루, 조아리 등 럭셔리 리조트 추천",
    scores: {
      luxury: 95,
      underwater: 30,
      lagoon: 75,
      food: 85,
      activity: 25,
      budget: 10,
    },
  },
  {
    id: "underwater-explorer",
    name: "수중 탐험가형",
    emoji: "🐠",
    description:
      "물 밖보다 물 속이 더 좋은 당신! 화려한 산호초와 다양한 해양생물을 만나는 것이 최고의 즐거움입니다.",
    characteristics: [
      "🤿 하우스 리프 필수",
      "🐢 다이빙/스노클링 매일",
      "🦈 수중 생태계 중시",
      "🏊 액티비티 활동적",
      "💰 가성비도 고려",
    ],
    resortRecommendation:
      "릴리비치, 피히스트시아, 에라이두, 말라히니코두 등 하우스 리프 좋은 리조트 추천",
    scores: {
      luxury: 40,
      underwater: 95,
      lagoon: 30,
      food: 50,
      activity: 85,
      budget: 65,
    },
  },
  {
    id: "lagoon-romantic",
    name: "라군 낭만형",
    emoji: "💙",
    description:
      "에메랄드빛 라군과 하얀 백사장이 최고! 인스타 감성 가득한 사진과 로맨틱한 분위기를 사랑합니다.",
    characteristics: [
      "🏖️ 완벽한 라군 색깔",
      "📷 포토제닉한 환경",
      "🌅 석양과 해변 산책",
      "🏨 모던한 인테리어",
      "💑 로맨틱한 분위기",
    ],
    resortRecommendation:
      "밀라이두, 피넥쉬, 칸두마, 벨라사루 등 라군 예쁜 리조트 추천",
    scores: {
      luxury: 75,
      underwater: 20,
      lagoon: 95,
      food: 65,
      activity: 35,
      budget: 35,
    },
  },
  {
    id: "value-seeker",
    name: "가성비 실속형",
    emoji: "💰",
    description:
      "현명한 선택으로 알찬 여행을 만드는 당신! 합리적인 가격으로도 몰디브의 아름다움을 충분히 즐길 수 있습니다.",
    characteristics: [
      "💵 합리적인 예산 관리",
      "🎯 핵심만 알차게",
      "🚤 스피드보트 이동 OK",
      "🏊 수중환경도 나쁘지 않게",
      "🍽️ BB나 HB로 조절",
    ],
    resortRecommendation:
      "아다란클럽란날리, 오브루벨리폴리, 메루, 칸두마 등 가성비 좋은 리조트 추천",
    scores: {
      luxury: 30,
      underwater: 65,
      lagoon: 65,
      food: 45,
      activity: 60,
      budget: 95,
    },
  },
  {
    id: "foodie-allin",
    name: "미식 올인형",
    emoji: "🍽️",
    description:
      "맛있는 음식과 술이 여행의 핵심! 올인클루시브로 무제한 다이닝과 바를 즐기는 것이 최고의 행복입니다.",
    characteristics: [
      "🍷 올인클루시브 필수",
      "🍹 무제한 음료와 칵테일",
      "🍴 다양한 레스토랑",
      "🥂 프리미엄 술 선호",
      "👨‍🍳 미식 경험 중시",
    ],
    resortRecommendation:
      "쿠라마띠, 릴리비치, 오브루셀렉트생히리, 센타라그랜드 등 올인 리조트 추천",
    scores: {
      luxury: 75,
      underwater: 40,
      lagoon: 55,
      food: 95,
      activity: 40,
      budget: 25,
    },
  },
  {
    id: "activity-adventurer",
    name: "액티비티 모험형",
    emoji: "🏄",
    description:
      "가만히 있기 힘든 활동적인 당신! 다양한 수상 스포츠와 액티비티로 매 순간을 즐깁니다.",
    characteristics: [
      "🏄 수상 스포츠 다양",
      "🤿 다이빙, 스노클링",
      "🎣 낚시, 돌핀 투어",
      "🚁 수상비행기 체험",
      "⚡ 활동적인 일정",
    ],
    resortRecommendation:
      "오젠리저브볼리, 아난타라디구, 씨야우펜후시, 메루 등 액티비티 다양한 리조트 추천",
    scores: {
      luxury: 55,
      underwater: 75,
      lagoon: 55,
      food: 55,
      activity: 95,
      budget: 55,
    },
  },
];
