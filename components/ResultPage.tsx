"use client";

import { TestResult, TraitKey } from "@/types";
import RadarChart from "./RadarChart";

const traitMeta: Record<
  TraitKey,
  { label: string; emoji: string; badgeClass: string }
> = {
  luxury: {
    label: "럭셔리",
    emoji: "👑",
    badgeClass: "bg-purple-100 text-purple-700",
  },
  underwater: {
    label: "수중환경",
    emoji: "🐠",
    badgeClass: "bg-blue-100 text-blue-700",
  },
  lagoon: {
    label: "라군",
    emoji: "💙",
    badgeClass: "bg-cyan-100 text-cyan-700",
  },
  food: {
    label: "음식",
    emoji: "🍽️",
    badgeClass: "bg-orange-100 text-orange-700",
  },
  activity: {
    label: "액티비티",
    emoji: "🏄",
    badgeClass: "bg-green-100 text-green-700",
  },
  budget: {
    label: "가성비",
    emoji: "💰",
    badgeClass: "bg-yellow-100 text-yellow-700",
  },
};

interface ResultPageProps {
  result: TestResult;
  onReset: () => void;
}

export default function ResultPage({ result, onReset }: ResultPageProps) {
  const { personalityTypes, scores, topTraits, rankedTypes, selectedAnswers } =
    result;
  const primaryType = personalityTypes[0];
  const additionalRecommendations = rankedTypes
    .filter(
      ({ type }) =>
        !personalityTypes.some((selected) => selected.id === type.id)
    )
    .slice(0, 3);

  if (!primaryType) {
    return null;
  }

  const handleDownloadText = () => {
    const now = new Date();
    const dateStr = now.toISOString().split("T")[0];
    const timeStr = now.toTimeString().split(" ")[0].replace(/:/g, "-");

    let textContent =
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    textContent += "🏝️ 몰디브 매치 - 여행 성향 분석 결과\n";
    textContent += `📅 생성일시: ${dateStr} ${
      now.toTimeString().split(" ")[0]
    }\n`;
    textContent +=
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";

    // 선택한 질문과 답변 (항상 포함)
    textContent += "📋 선택한 질문과 답변\n";
    textContent +=
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";

    if (selectedAnswers && selectedAnswers.length > 0) {
      selectedAnswers.forEach((answer, index) => {
        textContent += `${index + 1}. ${answer.question}\n`;
        textContent += `   ✅ 선택: ${answer.selectedOption}\n\n`;
      });
    } else {
      textContent += "선택한 답변이 없습니다.\n\n";
    }

    textContent += "\n";

    // 매칭된 성향 타입
    textContent += "🎯 매칭된 성향 타입\n";
    textContent +=
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
    personalityTypes.forEach((type, index) => {
      const ranking = rankedTypes.find((r) => r.type.id === type.id);
      textContent += `${index + 1}. ${type.emoji} ${type.name}\n`;
      if (ranking) {
        textContent += `   유사도: ${ranking.similarity}%\n`;
      }
      textContent += `   설명: ${type.description}\n\n`;
      textContent += `   주요 특징:\n`;
      type.characteristics.forEach((char) => {
        textContent += `   - ${char}\n`;
      });
      textContent += `\n   ${type.resortRecommendation}\n\n`;
    });

    // 전체 성향 타입 순위
    textContent += "📈 전체 성향 타입 순위\n";
    textContent +=
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    rankedTypes.forEach((ranking, index) => {
      textContent += `${index + 1}. ${ranking.type.emoji} ${
        ranking.type.name
      } - 유사도: ${ranking.similarity}%\n`;
    });

    textContent +=
      "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    textContent += "💬 이 결과를 공유하고 여행 동반자와 함께 상의해보세요!\n";
    textContent += "위에 표시된 '선택한 질문과 답변'을 비교하며\n";
    textContent +=
      "서로의 선호도를 확인하고 더 나은 몰디브 여행을 계획할 수 있습니다.\n";
    textContent +=
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
    textContent += "© 2025 몰디브 매치 (Maldives Match)\n";
    textContent += "개발자: AshLight (ashlight2510@gmail.com)\n";
    textContent += "Made with 💙 for Maldives Lovers\n";

    // 파일 다운로드
    const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `몰디브매치_결과_${dateStr}_${timeStr}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-300 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            🎉 분석 완료!
          </h1>
          <p className="text-white/90 text-lg">당신의 몰디브 여행 성향은...</p>
        </div>

        {/* 성향 타입 카드 */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 mb-6">
          <div className="text-center mb-8">
            <div className="text-7xl mb-4">{primaryType.emoji}</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              {primaryType.name}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {primaryType.description}
            </p>
            {topTraits.length > 0 && (
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {topTraits.map((trait) => {
                  const meta = traitMeta[trait.key];
                  return (
                    <div
                      key={trait.key}
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${meta.badgeClass}`}
                    >
                      <span className="mr-2">{meta.emoji}</span>
                      {meta.label} {trait.value}%
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* 특징 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              ✨ 주요 특징
            </h3>
            <div className="space-y-3">
              {primaryType.characteristics.map((char, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl"
                >
                  <p className="text-gray-700 font-medium">{char}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 리조트 추천 */}
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              🏨 추천 리조트
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {primaryType.resortRecommendation}
            </p>
          </div>
        </div>

        {personalityTypes.length > 1 && (
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              ⚖️ 동률로 나온 다른 추천 성향
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {personalityTypes.slice(1).map((type) => (
                <div
                  key={type.id}
                  className="border border-blue-100 rounded-2xl p-4 flex items-start space-x-4"
                >
                  <div className="text-3xl">{type.emoji}</div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      {type.name}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {type.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {additionalRecommendations.length > 0 && (
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              📌 성향 기반 추가 추천
            </h3>
            <div className="space-y-4">
              {additionalRecommendations.map(({ type, similarity }) => (
                <div
                  key={type.id}
                  className="border border-blue-100 rounded-2xl p-4 flex items-center justify-between gap-4"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-3xl">{type.emoji}</div>
                    <div>
                      <div className="font-semibold text-gray-800">
                        {type.name}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {type.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">일치도</div>
                    <div className="text-xl font-bold text-blue-600">
                      {similarity}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6각형 그래프 */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            📊 나의 여행 성향 분석
          </h3>
          <RadarChart scores={scores} />

          {/* 점수 설명 */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <div className="text-3xl mb-2">👑</div>
              <div className="font-bold text-gray-800">럭셔리</div>
              <div className="text-2xl font-bold text-purple-600">
                {scores.luxury}
              </div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-3xl mb-2">🐠</div>
              <div className="font-bold text-gray-800">수중환경</div>
              <div className="text-2xl font-bold text-blue-600">
                {scores.underwater}
              </div>
            </div>
            <div className="text-center p-4 bg-cyan-50 rounded-xl">
              <div className="text-3xl mb-2">💙</div>
              <div className="font-bold text-gray-800">라군</div>
              <div className="text-2xl font-bold text-cyan-600">
                {scores.lagoon}
              </div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-xl">
              <div className="text-3xl mb-2">🍽️</div>
              <div className="font-bold text-gray-800">음식</div>
              <div className="text-2xl font-bold text-orange-600">
                {scores.food}
              </div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="text-3xl mb-2">🏄</div>
              <div className="font-bold text-gray-800">액티비티</div>
              <div className="text-2xl font-bold text-green-600">
                {scores.activity}
              </div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-xl">
              <div className="text-3xl mb-2">💰</div>
              <div className="font-bold text-gray-800">가성비</div>
              <div className="text-2xl font-bold text-yellow-600">
                {scores.budget}
              </div>
            </div>
          </div>
        </div>

        {/* 다시하기 버튼 */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleDownloadText}
              className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              📥 결과 텍스트 파일 다운로드
            </button>
            <button
              onClick={onReset}
              className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              🔄 다시 테스트하기
            </button>
          </div>
          <p className="text-white/80 text-sm">
            다운로드 파일에는 선택한 모든 질문과 답변이 포함됩니다
          </p>
        </div>

        {/* 공유 안내 */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-8 mb-6 text-center">
          <div className="text-4xl mb-4">💬</div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            결과를 공유하고 여행 동반자와 함께 상의해보세요!
          </h3>
          <p className="text-gray-600 leading-relaxed">
            여러분의 선택을 비교하며 더 나은 몰디브 여행을 계획할 수 있습니다.
            <br />
            텍스트 파일을 다운로드하여 함께 공유해보세요.
          </p>
        </div>

        {/* 광고 카드 */}
        <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-6 mb-6 flex justify-center">
          </div>

        {/* Footer */}
        <footer className="text-center py-6 text-white/80">
          <p>
            © 2025{" "}
            <a
              href="mailto:ashlight2510@gmail.com"
              className="text-white/80 hover:text-white transition-colors duration-200 underline"
            >
              몰디브 매치 (Maldives Match)
            </a>
            {" - "}
            <a
              href="mailto:ashlight2510@gmail.com"
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              AshLight
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
