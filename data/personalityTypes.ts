import { PersonalityType } from "@/types";

export const personalityTypes: PersonalityType[] = [
  {
    id: "luxury-healing",
    name: "럭셔리 힐링형",
    emoji: "👑",
    description:
      "최고급 시설에서 완벽한 휴식을 즐기는 당신! 개인 풀빌라에서 샴페인 한 잔과 함께 석양을 감상하는 것이 로망입니다. 가격보다는 경험과 서비스의 질을 우선시하며, 프라이빗하고 럭셔리한 환경을 추구합니다.",
    characteristics: [
      "🏰 최고급 5성급 리조트만 선택",
      "🛁 개인 풀빌라 & 워터빌라 필수",
      "🍾 미슐랭급 다이닝과 와인",
      "💆 프라이빗 스파와 버틀러 서비스",
      "📸 완벽한 인테리어와 인스타 감성",
      "🌅 샌드뱅크, 언더워터 다이닝 등 특별 경험",
    ],
    resortRecommendation:
      "💎 추천 리조트: 소네바자니, 소네바푸시, 식스센스라무, 벨라사루, 조아리, 콘래드, 세인트레지스, 원앤온리리띠라, 밀라이두, 파크하얏트",
    scores: {
      luxury: 95,
      underwater: 30,
      lagoon: 80,
      food: 90,
      activity: 25,
      budget: 10,
    },
  },
  {
    id: "underwater-explorer",
    name: "수중 탐험가형",
    emoji: "🐠",
    description:
      "물 밖보다 물 속이 더 좋은 당신! 화려한 산호초와 다양한 해양생물을 만나는 것이 최고의 즐거움입니다. 하우스 리프가 좋은 리조트를 찾고, 매일 스노클링과 다이빙을 즐기며, 만타레이나 고래상어를 만나는 것을 꿈꿉니다.",
    characteristics: [
      "🤿 하우스 리프 필수 (비치 앞 산호초)",
      "🐢 매일 스노클링/다이빙 삼매경",
      "🦈 만타레이, 고래상어, 거북이 만나기",
      "🏊 PADI 다이빙 센터 중요",
      "💰 하우스 리프 좋으면 가성비도 고려",
      "📷 수중 카메라는 필수템",
    ],
    resortRecommendation:
      "🐠 추천 리조트: 릴리비치, 피히스트시아, 에라이두, 말라히니코두, 반얀트리방갈리, 아난타라키하바, 아다란프레스티지와두, 에메랄드",
    scores: {
      luxury: 40,
      underwater: 95,
      lagoon: 30,
      food: 50,
      activity: 90,
      budget: 60,
    },
  },
  {
    id: "lagoon-romantic",
    name: "라군 낭만형",
    emoji: "💙",
    description:
      "에메랄드빛 라군과 하얀 백사장이 최고! 인스타 감성 가득한 사진과 로맨틱한 분위기를 사랑합니다. 바다 색깔이 예쁜 곳, 워터빌라에서 바라보는 석양, 샌드뱅크 피크닉 등 감성적인 순간들을 추구합니다.",
    characteristics: [
      "🏖️ 완벽한 라군 색깔 (티파니 블루)",
      "📷 포토제닉한 환경 - 인스타 필수",
      "🌅 워터빌라에서 석양 감상",
      "💑 로맨틱한 허니문 분위기",
      "🏨 모던하고 세련된 인테리어",
      "🥂 샌드뱅크 프라이빗 디너",
    ],
    resortRecommendation:
      "💙 추천 리조트: 밀라이두, 피넥쉬, 칸두마, 벨라사루, 오브루셀렉트생히리, 노쿠, 조아리, 후라발리, 반얀트리방갈리",
    scores: {
      luxury: 75,
      underwater: 25,
      lagoon: 95,
      food: 70,
      activity: 35,
      budget: 35,
    },
  },
  {
    id: "value-seeker",
    name: "가성비 실속형",
    emoji: "💰",
    description:
      "현명한 선택으로 알찬 여행을 만드는 당신! 합리적인 가격으로도 몰디브의 아름다움을 충분히 즐길 수 있습니다. 수중환경도 좋고, 음식도 괜찮고, 가격도 합리적인 밸런스 있는 리조트를 찾습니다.",
    characteristics: [
      "💵 1인 $2,000 이하로 알차게",
      "🎯 핵심만 챙기되 타협 없이",
      "🚤 스피드보트 이동도 OK",
      "🏊 수중환경 좋은 로컬 리조트",
      "🍽️ BB나 HB로 식비 조절",
      "🌊 하우스 리프 있으면 금상첨화",
    ],
    resortRecommendation:
      "💰 추천 리조트: 아다란클럽란날리, 오브루벨리폴리, 메루, 칸두마, 에라이두, 말라히니코두, 비얏이, 센타라라스푸시",
    scores: {
      luxury: 30,
      underwater: 70,
      lagoon: 65,
      food: 50,
      activity: 65,
      budget: 95,
    },
  },
  {
    id: "foodie-allin",
    name: "미식 올인형",
    emoji: "🍽️",
    description:
      "맛있는 음식과 술이 여행의 핵심! 올인클루시브로 무제한 다이닝과 바를 즐기는 것이 최고의 행복입니다. 다양한 레스토랑, 프리미엄 주류, 언더워터 레스토랑 등 미식 경험을 중시합니다.",
    characteristics: [
      "🍷 올인클루시브 필수",
      "🍹 프리미엄 무제한 칵테일",
      "🍴 5개 이상 다양한 레스토랑",
      "🥂 와인 셀러와 바 문화",
      "👨‍🍳 유명 셰프의 특별 메뉴",
      "🌊 언더워터/오버워터 다이닝",
    ],
    resortRecommendation:
      "🍽️ 추천 리조트: 쿠라마띠, 릴리비치, 오브루셀렉트생히리, 센타라그랜드, 아마리하보다, 노쿠, 벨라사루, 아난타라디구",
    scores: {
      luxury: 75,
      underwater: 40,
      lagoon: 55,
      food: 95,
      activity: 40,
      budget: 30,
    },
  },
  {
    id: "activity-adventurer",
    name: "액티비티 모험형",
    emoji: "🏄",
    description:
      "가만히 있기 힘든 활동적인 당신! 다양한 수상 스포츠와 액티비티로 매 순간을 즐깁니다. 스노클링, 다이빙, 서핑, 제트스키, 돌핀 크루즈 등 다양한 경험을 추구합니다.",
    characteristics: [
      "🏄 수상 스포츠 풀옵션",
      "🤿 다이빙 센터와 매일 다이빙",
      "🎣 낚시, 돌핀 크루즈, 섬 투어",
      "🚁 수상비행기 투어 체험",
      "⚡ 빡빡한 일정도 OK",
      "🌊 외부 투어 적극 참여",
    ],
    resortRecommendation:
      "🏄 추천 리조트: 오젠리저브볼리, 아난타라디구, 아난타라벨리, 씨야우펜후시, 메루, 센타라라스푸시, 쿠라마띠, 릴리비치",
    scores: {
      luxury: 50,
      underwater: 80,
      lagoon: 55,
      food: 55,
      activity: 95,
      budget: 55,
    },
  },
  {
    id: "honeymoon-romantic",
    name: "허니문 로맨틱형",
    emoji: "💕",
    description:
      "평생 한 번뿐인 신혼여행! 로맨틱한 순간들로 가득 채우고 싶은 당신. 워터빌라, 샌드뱅크 디너, 커플 스파, 선셋 크루즈 등 특별한 경험을 원합니다. 프라이버시와 낭만이 최우선입니다.",
    characteristics: [
      "💑 완벽한 프라이버시",
      "🌅 워터빌라에서 석양 감상",
      "🥂 샌드뱅크 프라이빗 디너",
      "💆 커플 스파 & 로맨틱 패키지",
      "📸 평생 기억할 사진",
      "🛁 야외 욕조에서 샴페인",
    ],
    resortRecommendation:
      "💕 추천 리조트: 소네바, 콘래드, 세인트레지스, 벨라사루, 밀라이두, 조아리, 반얀트리방갈리, 노쿠, 파크하얏트",
    scores: {
      luxury: 90,
      underwater: 35,
      lagoon: 90,
      food: 80,
      activity: 30,
      budget: 20,
    },
  },
  {
    id: "family-friendly",
    name: "가족 여행형",
    emoji: "👨‍👩‍👧‍👦",
    description:
      "가족과 함께하는 소중한 시간! 아이들이 안전하게 놀 수 있는 얕은 라군, 키즈 클럽, 가족 친화적인 시설을 중시합니다. 모두가 즐길 수 있는 균형 잡힌 리조트를 찾습니다.",
    characteristics: [
      "👶 키즈 클럽과 베이비시터",
      "🏊 얕은 라군 (아이들 안전)",
      "🍽️ 가족 친화 레스토랑",
      "🏨 패밀리룸이나 연결 객실",
      "🎮 아이들 액티비티 프로그램",
      "💰 가성비도 고려",
    ],
    resortRecommendation:
      "👨‍👩‍👧‍👦 추천 리조트: 쿠라마띠, 아마리하보다, 센타라그랜드, 하드락, 오브루셀렉트생히리, 칸두마, 아다란프레스티지",
    scores: {
      luxury: 60,
      underwater: 55,
      lagoon: 80,
      food: 70,
      activity: 70,
      budget: 60,
    },
  },
];
