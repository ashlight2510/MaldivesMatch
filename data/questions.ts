import { Question } from "@/types";

export const questions: Question[] = [
  {
    id: 1,
    question: "💰 몰디브 여행 예산은? (항공권 제외)",
    options: [
      {
        text: "1인 $2,000 이하 - 합리적인 가격으로!",
        scores: {
          luxury: 3,
          underwater: 6,
          lagoon: 6,
          food: 4,
          activity: 6,
          budget: 10,
        },
      },
      {
        text: "1인 $2,000~$4,000 - 적당한 중간 가격",
        scores: {
          luxury: 5,
          underwater: 6,
          lagoon: 6,
          food: 6,
          activity: 6,
          budget: 7,
        },
      },
      {
        text: "1인 $4,000~$6,000 - 프리미엄 리조트",
        scores: {
          luxury: 8,
          underwater: 7,
          lagoon: 8,
          food: 8,
          activity: 7,
          budget: 4,
        },
      },
      {
        text: "1인 $6,000 이상 - 최고급 럭셔리!",
        scores: {
          luxury: 10,
          underwater: 7,
          lagoon: 9,
          food: 10,
          activity: 7,
          budget: 2,
        },
      },
    ],
  },
  {
    id: 2,
    question: "🌊 수중환경 vs 라군(바다 색깔) 뭐가 더 중요해?",
    options: [
      {
        text: "수중 8 : 라군 2 - 물고기, 산호초가 최고!",
        scores: {
          luxury: 5,
          underwater: 10,
          lagoon: 2,
          food: 5,
          activity: 8,
          budget: 6,
        },
      },
      {
        text: "수중 7 : 라군 3 - 스노클링 즐기고 싶어",
        scores: {
          luxury: 6,
          underwater: 8,
          lagoon: 4,
          food: 6,
          activity: 7,
          budget: 6,
        },
      },
      {
        text: "수중 4 : 라군 6 - 예쁜 바다 색이 중요해",
        scores: {
          luxury: 7,
          underwater: 4,
          lagoon: 8,
          food: 6,
          activity: 5,
          budget: 5,
        },
      },
      {
        text: "수중 2 : 라군 8 - 사진 찍기 좋은 곳!",
        scores: {
          luxury: 8,
          underwater: 2,
          lagoon: 10,
          food: 6,
          activity: 4,
          budget: 5,
        },
      },
    ],
  },
  {
    id: 3,
    question: "🏠 워터빌라 vs 비치빌라 선호도는?",
    options: [
      {
        text: "워터빌라 필수! 바다 위가 로망",
        scores: {
          luxury: 9,
          underwater: 6,
          lagoon: 9,
          food: 7,
          activity: 5,
          budget: 3,
        },
      },
      {
        text: "워터빌라 선호하지만 비치도 OK",
        scores: {
          luxury: 7,
          underwater: 6,
          lagoon: 7,
          food: 6,
          activity: 6,
          budget: 5,
        },
      },
      {
        text: "비치빌라 선호 - 해변이 좋아",
        scores: {
          luxury: 6,
          underwater: 7,
          lagoon: 6,
          food: 6,
          activity: 7,
          budget: 7,
        },
      },
      {
        text: "상관없어요 - 시설만 좋으면",
        scores: {
          luxury: 6,
          underwater: 6,
          lagoon: 6,
          food: 6,
          activity: 6,
          budget: 6,
        },
      },
    ],
  },
  {
    id: 4,
    question: "🍽️ 음식 플랜은 어떻게 할까?",
    options: [
      {
        text: "BB(조식만) - 자유롭게 먹고 싶어요",
        scores: {
          luxury: 4,
          underwater: 6,
          lagoon: 6,
          food: 4,
          activity: 7,
          budget: 8,
        },
      },
      {
        text: "HB(조식+석식) - 적당히 편하게",
        scores: {
          luxury: 6,
          underwater: 6,
          lagoon: 6,
          food: 6,
          activity: 6,
          budget: 6,
        },
      },
      {
        text: "FB(3식) - 걱정 없이 먹고 싶어요",
        scores: {
          luxury: 7,
          underwater: 6,
          lagoon: 6,
          food: 8,
          activity: 6,
          budget: 4,
        },
      },
      {
        text: "올인클루시브 - 술, 음식 무제한!",
        scores: {
          luxury: 9,
          underwater: 5,
          lagoon: 6,
          food: 10,
          activity: 6,
          budget: 2,
        },
      },
    ],
  },
  {
    id: 5,
    question: "✈️ 리조트 이동은 어떤 게 좋아?",
    options: [
      {
        text: "스피드보트 - 빠르고 저렴하게!",
        scores: {
          luxury: 4,
          underwater: 6,
          lagoon: 6,
          food: 5,
          activity: 7,
          budget: 9,
        },
      },
      {
        text: "국내선 - 시간 걸려도 괜찮아요",
        scores: {
          luxury: 6,
          underwater: 6,
          lagoon: 6,
          food: 6,
          activity: 6,
          budget: 7,
        },
      },
      {
        text: "수상비행기 - 경치 구경하면서!",
        scores: {
          luxury: 9,
          underwater: 6,
          lagoon: 8,
          food: 7,
          activity: 9,
          budget: 3,
        },
      },
      {
        text: "뭐든 상관없어요",
        scores: {
          luxury: 6,
          underwater: 6,
          lagoon: 6,
          food: 6,
          activity: 6,
          budget: 7,
        },
      },
    ],
  },
  {
    id: 6,
    question: "🏨 리조트 규모는 어떤 걸 선호해?",
    options: [
      {
        text: "소형 부티크 (50실 이하) - 프라이빗하게",
        scores: {
          luxury: 9,
          underwater: 6,
          lagoon: 8,
          food: 7,
          activity: 5,
          budget: 4,
        },
      },
      {
        text: "중형 (50-100실) - 적당한 규모",
        scores: {
          luxury: 7,
          underwater: 6,
          lagoon: 7,
          food: 7,
          activity: 6,
          budget: 6,
        },
      },
      {
        text: "대형 (100실 이상) - 시설 다양하게",
        scores: {
          luxury: 6,
          underwater: 6,
          lagoon: 6,
          food: 8,
          activity: 8,
          budget: 7,
        },
      },
      {
        text: "상관없어요",
        scores: {
          luxury: 6,
          underwater: 6,
          lagoon: 6,
          food: 6,
          activity: 6,
          budget: 6,
        },
      },
    ],
  },
  {
    id: 7,
    question: "🏠 선호하는 인테리어 스타일은?",
    options: [
      {
        text: "전통 몰디브식 - 야자수 지붕, 나무",
        scores: {
          luxury: 6,
          underwater: 7,
          lagoon: 7,
          food: 6,
          activity: 6,
          budget: 7,
        },
      },
      {
        text: "모던 럭셔리 - 세련되고 깔끔한",
        scores: {
          luxury: 9,
          underwater: 5,
          lagoon: 8,
          food: 8,
          activity: 5,
          budget: 3,
        },
      },
      {
        text: "반반 믹스 - 조화로운 스타일",
        scores: {
          luxury: 7,
          underwater: 6,
          lagoon: 7,
          food: 7,
          activity: 6,
          budget: 5,
        },
      },
      {
        text: "별로 신경 안 써요",
        scores: {
          luxury: 5,
          underwater: 7,
          lagoon: 5,
          food: 6,
          activity: 7,
          budget: 8,
        },
      },
    ],
  },
  {
    id: 8,
    question: "🍺 술은 얼마나 마실 예정이야?",
    options: [
      {
        text: "안 마셔요 / 거의 안 마셔요",
        scores: {
          luxury: 6,
          underwater: 7,
          lagoon: 7,
          food: 6,
          activity: 7,
          budget: 7,
        },
      },
      {
        text: "가끔 한두 잔 정도",
        scores: {
          luxury: 6,
          underwater: 6,
          lagoon: 6,
          food: 7,
          activity: 6,
          budget: 6,
        },
      },
      {
        text: "매일 적당히 마실 거예요",
        scores: {
          luxury: 7,
          underwater: 5,
          lagoon: 6,
          food: 9,
          activity: 6,
          budget: 4,
        },
      },
      {
        text: "많이 마실 예정! (올인 필수)",
        scores: {
          luxury: 8,
          underwater: 4,
          lagoon: 5,
          food: 10,
          activity: 5,
          budget: 2,
        },
      },
    ],
  },
  {
    id: 9,
    question: "🏊 개인 풀빌라는 필수야?",
    options: [
      {
        text: "필수! 꼭 있어야 해요",
        scores: {
          luxury: 10,
          underwater: 5,
          lagoon: 7,
          food: 7,
          activity: 5,
          budget: 2,
        },
      },
      {
        text: "있으면 좋지만 필수는 아니에요",
        scores: {
          luxury: 7,
          underwater: 6,
          lagoon: 6,
          food: 6,
          activity: 6,
          budget: 5,
        },
      },
      {
        text: "없어도 괜찮아요",
        scores: {
          luxury: 5,
          underwater: 7,
          lagoon: 6,
          food: 6,
          activity: 7,
          budget: 8,
        },
      },
      {
        text: "바다만 좋으면 돼요",
        scores: {
          luxury: 4,
          underwater: 8,
          lagoon: 7,
          food: 5,
          activity: 8,
          budget: 9,
        },
      },
    ],
  },
  {
    id: 10,
    question: "📅 며칠 정도 머물 계획이야?",
    options: [
      {
        text: "3박 이하 - 짧고 강렬하게",
        scores: {
          luxury: 7,
          underwater: 6,
          lagoon: 7,
          food: 7,
          activity: 8,
          budget: 7,
        },
      },
      {
        text: "4~5박 - 적당한 일정",
        scores: {
          luxury: 6,
          underwater: 6,
          lagoon: 6,
          food: 6,
          activity: 6,
          budget: 6,
        },
      },
      {
        text: "6~7박 - 여유롭게",
        scores: {
          luxury: 7,
          underwater: 7,
          lagoon: 7,
          food: 7,
          activity: 6,
          budget: 5,
        },
      },
      {
        text: "8박 이상 - 완전 힐링",
        scores: {
          luxury: 8,
          underwater: 8,
          lagoon: 8,
          food: 8,
          activity: 5,
          budget: 3,
        },
      },
    ],
  },
  {
    id: 11,
    question: "👥 누구와 함께 가나요?",
    options: [
      {
        text: "신혼여행 / 허니문",
        scores: {
          luxury: 9,
          underwater: 5,
          lagoon: 9,
          food: 8,
          activity: 5,
          budget: 3,
        },
      },
      {
        text: "연인 / 커플",
        scores: {
          luxury: 7,
          underwater: 6,
          lagoon: 8,
          food: 7,
          activity: 6,
          budget: 5,
        },
      },
      {
        text: "가족 (아이 포함)",
        scores: {
          luxury: 7,
          underwater: 7,
          lagoon: 7,
          food: 7,
          activity: 7,
          budget: 6,
        },
      },
      {
        text: "친구들 / 혼자",
        scores: {
          luxury: 5,
          underwater: 8,
          lagoon: 6,
          food: 6,
          activity: 8,
          budget: 7,
        },
      },
    ],
  },
  {
    id: 12,
    question: "📸 사진/인스타 중요도는?",
    options: [
      {
        text: "매우 중요! 인스타 감성 필수",
        scores: {
          luxury: 8,
          underwater: 3,
          lagoon: 10,
          food: 6,
          activity: 5,
          budget: 4,
        },
      },
      {
        text: "중요해요 - 예쁜 곳 찾아요",
        scores: {
          luxury: 7,
          underwater: 5,
          lagoon: 8,
          food: 7,
          activity: 6,
          budget: 5,
        },
      },
      {
        text: "가끔 찍어요",
        scores: {
          luxury: 6,
          underwater: 6,
          lagoon: 6,
          food: 6,
          activity: 6,
          budget: 6,
        },
      },
      {
        text: "별로 안 찍어요",
        scores: {
          luxury: 5,
          underwater: 8,
          lagoon: 5,
          food: 6,
          activity: 8,
          budget: 7,
        },
      },
    ],
  },
  {
    id: 13,
    question: "🎯 가장 중요한 우선순위는?",
    options: [
      {
        text: "수중환경 - 물고기, 산호초",
        scores: {
          luxury: 5,
          underwater: 10,
          lagoon: 4,
          food: 5,
          activity: 8,
          budget: 6,
        },
      },
      {
        text: "라군 - 예쁜 바다 색깔",
        scores: {
          luxury: 7,
          underwater: 3,
          lagoon: 10,
          food: 6,
          activity: 5,
          budget: 5,
        },
      },
      {
        text: "음식 - 맛있는 식사와 술",
        scores: {
          luxury: 8,
          underwater: 4,
          lagoon: 5,
          food: 10,
          activity: 5,
          budget: 3,
        },
      },
      {
        text: "예산 - 가성비가 최고",
        scores: {
          luxury: 3,
          underwater: 6,
          lagoon: 6,
          food: 5,
          activity: 6,
          budget: 10,
        },
      },
    ],
  },
  {
    id: 14,
    question: "🌅 몰디브에서 가장 하고 싶은 것은?",
    options: [
      {
        text: "완전한 휴식과 힐링",
        scores: {
          luxury: 9,
          underwater: 4,
          lagoon: 8,
          food: 7,
          activity: 3,
          budget: 4,
        },
      },
      {
        text: "스노클링, 다이빙 삼매경",
        scores: {
          luxury: 5,
          underwater: 10,
          lagoon: 5,
          food: 5,
          activity: 10,
          budget: 6,
        },
      },
      {
        text: "인스타 감성 사진 찍기",
        scores: {
          luxury: 8,
          underwater: 3,
          lagoon: 10,
          food: 6,
          activity: 6,
          budget: 4,
        },
      },
      {
        text: "맛있는 음식과 술 즐기기",
        scores: {
          luxury: 8,
          underwater: 4,
          lagoon: 5,
          food: 10,
          activity: 4,
          budget: 3,
        },
      },
    ],
  },
  {
    id: 15,
    question: "🎉 나이트라이프/파티 관심도는?",
    options: [
      {
        text: "매우 중요! 바/클럽 즐기고 싶어",
        scores: {
          luxury: 7,
          underwater: 4,
          lagoon: 6,
          food: 9,
          activity: 7,
          budget: 4,
        },
      },
      {
        text: "가끔 바에서 한잔 정도",
        scores: {
          luxury: 7,
          underwater: 5,
          lagoon: 6,
          food: 7,
          activity: 6,
          budget: 5,
        },
      },
      {
        text: "조용한 분위기 선호",
        scores: {
          luxury: 7,
          underwater: 7,
          lagoon: 7,
          food: 6,
          activity: 5,
          budget: 6,
        },
      },
      {
        text: "별로 관심 없어요",
        scores: {
          luxury: 6,
          underwater: 8,
          lagoon: 6,
          food: 5,
          activity: 7,
          budget: 7,
        },
      },
    ],
  },
  {
    id: 16,
    question: "🤿 리조트 내 활동 vs 외부 투어?",
    options: [
      {
        text: "리조트 내에서만 - 편하게",
        scores: {
          luxury: 9,
          underwater: 5,
          lagoon: 8,
          food: 8,
          activity: 4,
          budget: 4,
        },
      },
      {
        text: "리조트 70% + 외부 투어 30%",
        scores: {
          luxury: 7,
          underwater: 6,
          lagoon: 7,
          food: 7,
          activity: 6,
          budget: 5,
        },
      },
      {
        text: "반반 - 다양하게 경험",
        scores: {
          luxury: 6,
          underwater: 7,
          lagoon: 6,
          food: 6,
          activity: 8,
          budget: 6,
        },
      },
      {
        text: "외부 투어 많이 - 적극적으로",
        scores: {
          luxury: 5,
          underwater: 8,
          lagoon: 5,
          food: 5,
          activity: 9,
          budget: 7,
        },
      },
    ],
  },
  {
    id: 17,
    question: "🌟 특별한 경험 중 뭐가 제일 끌려?",
    options: [
      {
        text: "언더워터 레스토랑 식사",
        scores: {
          luxury: 10,
          underwater: 6,
          lagoon: 7,
          food: 10,
          activity: 5,
          budget: 2,
        },
      },
      {
        text: "샌드뱅크 프라이빗 피크닉",
        scores: {
          luxury: 9,
          underwater: 5,
          lagoon: 9,
          food: 7,
          activity: 6,
          budget: 3,
        },
      },
      {
        text: "만타레이/고래상어와 스노클링",
        scores: {
          luxury: 6,
          underwater: 10,
          lagoon: 5,
          food: 5,
          activity: 10,
          budget: 5,
        },
      },
      {
        text: "선셋 크루즈 / 돌핀 워칭",
        scores: {
          luxury: 7,
          underwater: 6,
          lagoon: 8,
          food: 6,
          activity: 7,
          budget: 6,
        },
      },
    ],
  },
  {
    id: 18,
    question: "🔒 프라이버시 vs 사교성은?",
    options: [
      {
        text: "완전한 프라이버시 - 둘만의 시간",
        scores: {
          luxury: 9,
          underwater: 5,
          lagoon: 8,
          food: 7,
          activity: 4,
          budget: 3,
        },
      },
      {
        text: "프라이버시 중시하지만 교류도 OK",
        scores: {
          luxury: 7,
          underwater: 6,
          lagoon: 7,
          food: 7,
          activity: 6,
          budget: 5,
        },
      },
      {
        text: "다른 여행자들과 교류 즐김",
        scores: {
          luxury: 5,
          underwater: 7,
          lagoon: 6,
          food: 7,
          activity: 8,
          budget: 7,
        },
      },
      {
        text: "상관없어요",
        scores: {
          luxury: 6,
          underwater: 6,
          lagoon: 6,
          food: 6,
          activity: 6,
          budget: 6,
        },
      },
    ],
  },
];
