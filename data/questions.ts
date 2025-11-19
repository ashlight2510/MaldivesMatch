import { Question } from "@/types";

export const questions: Question[] = [
  {
    id: 1,
    question: "💰 예산 전략은 어떻게 잡고 있어?",
    options: [
      {
        text: "1인 $2,000 이하 - 필수 경험만 챙길래",
        scores: {
          luxury: 3,
          underwater: 6,
          lagoon: 5,
          food: 4,
          activity: 6,
          budget: 10,
        },
      },
      {
        text: "1인 $2,000~$3,500 - 가격 대비 만족을 노려",
        scores: {
          luxury: 5,
          underwater: 6,
          lagoon: 6,
          food: 6,
          activity: 6,
          budget: 8,
        },
      },
      {
        text: "1인 $3,500~$5,000 - 필요한 건 투자할래",
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
        text: "1인 $5,000 이상 - 최상위 옵션만 보고 있어",
        scores: {
          luxury: 10,
          underwater: 7,
          lagoon: 8,
          food: 9,
          activity: 6,
          budget: 2,
        },
      },
    ],
  },
  {
    id: 2,
    question: "🎬 이번 여행에서 가장 먼저 떠오르는 장면은?",
    options: [
      {
        text: "개인 버틀러와 스파에서 완전한 휴식",
        scores: {
          luxury: 10,
          underwater: 4,
          lagoon: 7,
          food: 7,
          activity: 3,
          budget: 3,
        },
      },
      {
        text: "만타레이와 하우스리프를 탐험하는 순간",
        scores: {
          luxury: 5,
          underwater: 10,
          lagoon: 5,
          food: 5,
          activity: 9,
          budget: 5,
        },
      },
      {
        text: "티파니색 라군에서 찍는 감성 사진",
        scores: {
          luxury: 7,
          underwater: 3,
          lagoon: 10,
          food: 5,
          activity: 4,
          budget: 5,
        },
      },
      {
        text: "셰프 테이스팅과 와인 페어링 디너",
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
    id: 3,
    question: "🌊 수중 컨디션 vs 라군(바다 색), 어디에 더 끌려?",
    options: [
      {
        text: "수중 9 : 라군 1 - 하우스리프가 최우선",
        scores: {
          luxury: 4,
          underwater: 10,
          lagoon: 2,
          food: 5,
          activity: 8,
          budget: 6,
        },
      },
      {
        text: "수중 7 : 라군 3 - 다이빙/스노클 중심",
        scores: {
          luxury: 5,
          underwater: 8,
          lagoon: 4,
          food: 5,
          activity: 7,
          budget: 6,
        },
      },
      {
        text: "수중 4 : 라군 6 - 둘 다 균형 있게",
        scores: {
          luxury: 6,
          underwater: 5,
          lagoon: 7,
          food: 6,
          activity: 5,
          budget: 5,
        },
      },
      {
        text: "수중 2 : 라군 8 - 뷰/사진이 핵심",
        scores: {
          luxury: 8,
          underwater: 3,
          lagoon: 10,
          food: 6,
          activity: 4,
          budget: 5,
        },
      },
    ],
  },
  {
    id: 4,
    question: "🏡 어떤 숙소 타입이 가장 설렌다?",
    options: [
      {
        text: "완전 프라이빗한 풀빌라와 실내 편의시설",
        scores: {
          luxury: 10,
          underwater: 4,
          lagoon: 7,
          food: 7,
          activity: 4,
          budget: 3,
        },
      },
      {
        text: "워터빌라 + 인피니티 데크, 라군뷰 필수",
        scores: {
          luxury: 8,
          underwater: 5,
          lagoon: 10,
          food: 6,
          activity: 5,
          budget: 4,
        },
      },
      {
        text: "비치빌라에 나가면 바로 하우스리프",
        scores: {
          luxury: 6,
          underwater: 9,
          lagoon: 6,
          food: 5,
          activity: 7,
          budget: 6,
        },
      },
      {
        text: "기본 객실이라도 위치/동선이 효율적이면 OK",
        scores: {
          luxury: 4,
          underwater: 6,
          lagoon: 6,
          food: 5,
          activity: 6,
          budget: 9,
        },
      },
    ],
  },
  {
    id: 5,
    question: "🍽️ 식사와 음료는 어떤 방식이 좋아?",
    options: [
      {
        text: "조식만 포함, 나머지는 자유롭게 찾아다닐래",
        scores: {
          luxury: 4,
          underwater: 6,
          lagoon: 6,
          food: 4,
          activity: 7,
          budget: 9,
        },
      },
      {
        text: "HB(조+석)으로 편하게, 필요하면 업그레이드",
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
        text: "풀보드/세트 메뉴로 끼니 걱정 없이",
        scores: {
          luxury: 7,
          underwater: 5,
          lagoon: 6,
          food: 8,
          activity: 6,
          budget: 5,
        },
      },
      {
        text: "프리미엄 올인클루시브 + 와인 페어링",
        scores: {
          luxury: 9,
          underwater: 4,
          lagoon: 6,
          food: 10,
          activity: 6,
          budget: 3,
        },
      },
    ],
  },
  {
    id: 6,
    question: "⚡ 하루 루틴은 어느 정도가 좋아?",
    options: [
      {
        text: "느긋하게 쉬고 스파/독서 위주",
        scores: {
          luxury: 8,
          underwater: 4,
          lagoon: 7,
          food: 6,
          activity: 3,
          budget: 5,
        },
      },
      {
        text: "오전엔 체험, 오후엔 휴식으로 균형",
        scores: {
          luxury: 6,
          underwater: 7,
          lagoon: 6,
          food: 6,
          activity: 8,
          budget: 5,
        },
      },
      {
        text: "하루 종일 액티비티로 채울래",
        scores: {
          luxury: 5,
          underwater: 8,
          lagoon: 5,
          food: 5,
          activity: 10,
          budget: 5,
        },
      },
      {
        text: "비용 아끼며 핵심 몇 가지만 즐길래",
        scores: {
          luxury: 4,
          underwater: 6,
          lagoon: 6,
          food: 5,
          activity: 6,
          budget: 8,
        },
      },
    ],
  },
  {
    id: 7,
    question: "✈️ 말레에서 리조트까지 이동은?",
    options: [
      {
        text: "스피드보트로 빠르고 경제적으로",
        scores: {
          luxury: 4,
          underwater: 6,
          lagoon: 6,
          food: 5,
          activity: 6,
          budget: 9,
        },
      },
      {
        text: "국내선 + 보트, 이동시간 감수 가능",
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
        text: "수상비행기 타고 전경을 즐기고 싶어",
        scores: {
          luxury: 9,
          underwater: 7,
          lagoon: 8,
          food: 7,
          activity: 7,
          budget: 3,
        },
      },
      {
        text: "프라이빗 차터/전세 이동이 좋아",
        scores: {
          luxury: 10,
          underwater: 6,
          lagoon: 8,
          food: 6,
          activity: 7,
          budget: 2,
        },
      },
    ],
  },
  {
    id: 8,
    question: "🛎 서비스 스타일에 대한 기대는?",
    options: [
      {
        text: "버틀러, 맞춤 컨시어지, 소수정예",
        scores: {
          luxury: 10,
          underwater: 5,
          lagoon: 7,
          food: 8,
          activity: 5,
          budget: 3,
        },
      },
      {
        text: "세련된 5성급 표준 서비스",
        scores: {
          luxury: 8,
          underwater: 6,
          lagoon: 7,
          food: 7,
          activity: 6,
          budget: 5,
        },
      },
      {
        text: "친근하고 실용적인 스태프면 충분",
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
        text: "DIY/셀프 서비스, 자유도가 좋아",
        scores: {
          luxury: 4,
          underwater: 6,
          lagoon: 6,
          food: 5,
          activity: 6,
          budget: 9,
        },
      },
    ],
  },
  {
    id: 9,
    question: "🌙 저녁 시간을 어떻게 보내고 싶어?",
    options: [
      {
        text: "별 감상과 프라이빗 다이닝",
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
        text: "선셋 크루즈 + 포토 타임",
        scores: {
          luxury: 7,
          underwater: 5,
          lagoon: 10,
          food: 6,
          activity: 6,
          budget: 5,
        },
      },
      {
        text: "바/와인셀러, 셰프 테이스팅",
        scores: {
          luxury: 8,
          underwater: 4,
          lagoon: 5,
          food: 10,
          activity: 5,
          budget: 4,
        },
      },
      {
        text: "밤낚시, 나이트 스노클 같은 액티비티",
        scores: {
          luxury: 5,
          underwater: 9,
          lagoon: 5,
          food: 5,
          activity: 9,
          budget: 6,
        },
      },
    ],
  },
  {
    id: 10,
    question: "📍 추가로 꼭 투자하고 싶은 포인트는?",
    options: [
      {
        text: "객실 인테리어와 편의시설 업그레이드",
        scores: {
          luxury: 10,
          underwater: 5,
          lagoon: 7,
          food: 6,
          activity: 4,
          budget: 3,
        },
      },
      {
        text: "다이빙 장비/가이드, 해양 워크샵",
        scores: {
          luxury: 5,
          underwater: 10,
          lagoon: 5,
          food: 5,
          activity: 9,
          budget: 4,
        },
      },
      {
        text: "전문 포토그래퍼와 라군 촬영",
        scores: {
          luxury: 7,
          underwater: 4,
          lagoon: 10,
          food: 5,
          activity: 5,
          budget: 4,
        },
      },
      {
        text: "체류일수 연장 + 가성비 플랜 유지",
        scores: {
          luxury: 4,
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
    id: 11,
    question: "🎒 반드시 포함하고 싶은 액티비티 패키지는?",
    options: [
      {
        text: "시그니처 스파·요가·사운드 힐링",
        scores: {
          luxury: 9,
          underwater: 4,
          lagoon: 7,
          food: 6,
          activity: 3,
          budget: 4,
        },
      },
      {
        text: "만타레이 익스커션과 딥 다이빙",
        scores: {
          luxury: 5,
          underwater: 10,
          lagoon: 5,
          food: 5,
          activity: 9,
          budget: 4,
        },
      },
      {
        text: "제트스키, 서핑, 워터스포츠 풀패키지",
        scores: {
          luxury: 6,
          underwater: 7,
          lagoon: 6,
          food: 5,
          activity: 10,
          budget: 5,
        },
      },
      {
        text: "선셋 크루즈 + 로컬 체험, 합리적 패키지",
        scores: {
          luxury: 5,
          underwater: 6,
          lagoon: 8,
          food: 5,
          activity: 6,
          budget: 8,
        },
      },
    ],
  },
  {
    id: 12,
    question: "👥 동행 스타일은 어떤가요?",
    options: [
      {
        text: "허니문/커플 - 로맨스 집중",
        scores: {
          luxury: 9,
          underwater: 4,
          lagoon: 9,
          food: 8,
          activity: 4,
          budget: 4,
        },
      },
      {
        text: "가족/아이 동반 - 모두 편안해야",
        scores: {
          luxury: 6,
          underwater: 6,
          lagoon: 8,
          food: 6,
          activity: 6,
          budget: 6,
        },
      },
      {
        text: "친구/모험 메이트 - 액티비티 위주",
        scores: {
          luxury: 5,
          underwater: 8,
          lagoon: 6,
          food: 5,
          activity: 9,
          budget: 5,
        },
      },
      {
        text: "1인 혹은 자유 여행 - 효율과 가성비",
        scores: {
          luxury: 4,
          underwater: 7,
          lagoon: 6,
          food: 5,
          activity: 6,
          budget: 8,
        },
      },
    ],
  },
];
