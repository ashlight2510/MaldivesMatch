import { Question } from '@/types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (optionIndex: number) => void;
}

export default function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
        {question.question}
      </h2>

      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className="w-full p-5 text-left bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 rounded-2xl border-2 border-transparent hover:border-blue-300 transition-all duration-200 transform hover:scale-102 hover:shadow-lg"
          >
            <span className="text-lg text-gray-800 font-medium">
              {option.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

