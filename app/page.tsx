"use client";

import { useState } from "react";
import { questions } from "@/data/questions";
import { personalityTypes } from "@/data/personalityTypes";
import { TestResult, TraitKey } from "@/types";
import QuestionCard from "@/components/QuestionCard";
import ResultPage from "@/components/ResultPage";

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<TestResult | null>(null);
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 테스트 완료, 결과 계산
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (userAnswers: number[]) => {
    // 선택한 질문과 답변 로그 출력
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("📋 선택한 질문과 답변");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

    userAnswers.forEach((answerIndex, questionIndex) => {
      const question = questions[questionIndex];
      const selectedOption = question.options[answerIndex];

      console.log(`\n${questionIndex + 1}. ${question.question}`);
      console.log(`   ✅ 선택: ${selectedOption.text}`);
      console.log(`   📊 점수:`, {
        luxury: selectedOption.scores.luxury,
        underwater: selectedOption.scores.underwater,
        lagoon: selectedOption.scores.lagoon,
        food: selectedOption.scores.food,
        activity: selectedOption.scores.activity,
        budget: selectedOption.scores.budget,
      });
    });

    console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

    const totalScores = {
      luxury: 0,
      underwater: 0,
      lagoon: 0,
      food: 0,
      activity: 0,
      budget: 0,
    };

    userAnswers.forEach((answerIndex, questionIndex) => {
      const selectedOption = questions[questionIndex].options[answerIndex];
      totalScores.luxury += selectedOption.scores.luxury;
      totalScores.underwater += selectedOption.scores.underwater;
      totalScores.lagoon += selectedOption.scores.lagoon;
      totalScores.food += selectedOption.scores.food;
      totalScores.activity += selectedOption.scores.activity;
      totalScores.budget += selectedOption.scores.budget;
    });

    // 정규화 (0-100 범위로)
    const maxScore = questions.length * 10;
    const normalizedScores = {
      luxury: Math.round((totalScores.luxury / maxScore) * 100),
      underwater: Math.round((totalScores.underwater / maxScore) * 100),
      lagoon: Math.round((totalScores.lagoon / maxScore) * 100),
      food: Math.round((totalScores.food / maxScore) * 100),
      activity: Math.round((totalScores.activity / maxScore) * 100),
      budget: Math.round((totalScores.budget / maxScore) * 100),
    };

    const traitEntries = (
      Object.entries(normalizedScores) as [TraitKey, number][]
    )
      .map(([key, value]) => ({ key, value }))
      .sort((a, b) => b.value - a.value);

    const highestScore = traitEntries[0]?.value ?? 0;
    const topTraits = traitEntries.filter(
      (trait) => trait.value === highestScore
    );

    const traitToTypeId: Record<TraitKey, string> = {
      luxury: "luxury-healing",
      underwater: "underwater-explorer",
      lagoon: "lagoon-romantic",
      food: "foodie-allin",
      activity: "activity-adventurer",
      budget: "value-seeker",
    };

    // 특정 선택에 대한 강제 매칭 로직
    // 만타레이를 선택했으면 수중 탐험가형 우선 고려
    const selectedMantaRay = userAnswers[1] === 1; // 질문 2번의 두 번째 옵션 (만타레이)

    // 수중 환경이 라군보다 훨씬 높으면 수중 탐험가형 우선
    const underwaterDominant =
      normalizedScores.underwater > normalizedScores.lagoon + 30;

    // 라군이 수중보다 훨씬 높으면 라군 낭만형 우선
    const lagoonDominant =
      normalizedScores.lagoon > normalizedScores.underwater + 30;

    const maxDistance = Math.sqrt(6 * Math.pow(100, 2));
    const typeRankings = personalityTypes
      .map((type) => {
        const distance = Math.sqrt(
          Math.pow(normalizedScores.luxury - type.scores.luxury, 2) +
            Math.pow(normalizedScores.underwater - type.scores.underwater, 2) +
            Math.pow(normalizedScores.lagoon - type.scores.lagoon, 2) +
            Math.pow(normalizedScores.food - type.scores.food, 2) +
            Math.pow(normalizedScores.activity - type.scores.activity, 2) +
            Math.pow(normalizedScores.budget - type.scores.budget, 2)
        );

        let similarity = Math.max(
          0,
          Math.round(100 - (distance / maxDistance) * 100)
        );

        // 만타레이 선택 시 수중 탐험가형 보너스
        if (selectedMantaRay && type.id === "underwater-explorer") {
          similarity += 20;
        }

        // 수중 환경이 압도적이면 수중 탐험가형 보너스
        if (underwaterDominant && type.id === "underwater-explorer") {
          similarity += 15;
        }

        // 라군이 압도적이면 라군 낭만형 보너스
        if (lagoonDominant && type.id === "lagoon-romantic") {
          similarity += 15;
        }

        return { type, similarity };
      })
      .sort((a, b) => b.similarity - a.similarity);

    // 선택한 답변 정보 저장 (먼저 생성)
    const selectedAnswers = userAnswers.map((answerIndex, questionIndex) => {
      const question = questions[questionIndex];
      const selectedOption = question.options[answerIndex];
      return {
        questionId: question.id,
        question: question.question,
        selectedOption: selectedOption.text,
        scores: selectedOption.scores,
      };
    });

    const topTraitIds = new Set(
      topTraits.map((trait) => traitToTypeId[trait.key])
    );

    // 만타레이 선택했으면 수중 탐험가형 강제 매칭
    if (selectedMantaRay) {
      const underwaterType = personalityTypes.find(
        (t) => t.id === "underwater-explorer"
      );
      if (underwaterType) {
        setResult({
          personalityTypes: [underwaterType],
          scores: normalizedScores,
          topTraits,
          rankedTypes: typeRankings,
          selectedAnswers, // selectedAnswers 포함
        });
        return;
      }
    }

    const bestMatches = typeRankings
      .filter(({ type }) => topTraitIds.has(type.id))
      .map(({ type }) => type);

    const resolvedMatches =
      bestMatches.length > 0 ? bestMatches : [typeRankings[0].type];

    // 결과 로그 출력
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("📊 계산된 점수 (정규화 후)");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("럭셔리:", normalizedScores.luxury);
    console.log("수중환경:", normalizedScores.underwater);
    console.log("라군:", normalizedScores.lagoon);
    console.log("음식:", normalizedScores.food);
    console.log("액티비티:", normalizedScores.activity);
    console.log("가성비:", normalizedScores.budget);

    console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("🎯 매칭된 성향 타입");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    resolvedMatches.forEach((type, index) => {
      console.log(`\n${index + 1}. ${type.emoji} ${type.name}`);
      const ranking = typeRankings.find((r) => r.type.id === type.id);
      if (ranking) {
        console.log(`   유사도: ${ranking.similarity}%`);
      }
    });

    console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("📈 전체 성향 타입 순위");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    typeRankings.forEach((ranking, index) => {
      console.log(
        `${index + 1}. ${ranking.type.emoji} ${ranking.type.name} - 유사도: ${
          ranking.similarity
        }%`
      );
    });
    console.log("\n");

    setResult({
      personalityTypes: resolvedMatches,
      scores: normalizedScores,
      topTraits,
      rankedTypes: typeRankings,
      selectedAnswers,
    });
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setIsStarted(false);
  };

  if (result) {
    return <ResultPage result={result} onReset={handleReset} />;
  }

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-300 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              🏝️ 몰디브 매치
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              나의 몰디브 여행 성향 찾기
            </p>
            <p className="text-gray-500">
              18개의 전문 질문으로 나에게 딱 맞는 몰디브 스타일을 찾아보세요!
            </p>
            <p className="text-sm text-gray-400 mt-2">⏱️ 소요 시간: 약 3-5분</p>
          </div>

          <div className="mb-8 p-6 bg-blue-50 rounded-2xl">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              🎯 8가지 몰디브 여행 성향
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {personalityTypes.map((type) => (
                <div
                  key={type.id}
                  className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-1">{type.emoji}</div>
                  <div className="text-sm font-medium text-gray-700">
                    {type.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleStart}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            시작하기 🚀
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-300 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-semibold">
              질문 {currentQuestion + 1} / {questions.length}
            </span>
            <span className="text-white font-semibold">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-white/30 rounded-full h-3">
            <div
              className="bg-white rounded-full h-3 transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <QuestionCard
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  );
}
