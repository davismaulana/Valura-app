import React from 'react';
import type { Question } from '../../../types';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | string[];
  onAnswerChange: (answer: string | string[]) => void;
  showFeedback?: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  selectedAnswer, 
  onAnswerChange,
  showFeedback = false
}) => {
  const isSelected = (value: string) => {
    if (Array.isArray(selectedAnswer)) {
      return selectedAnswer.includes(value);
    }
    return selectedAnswer === value;
  };

  const handleOptionClick = (value: string) => {
    if (showFeedback) return; // Disable interaction in feedback mode

    if (question.type === 'multiple-select') {
      const current = Array.isArray(selectedAnswer) ? selectedAnswer : [];
      if (current.includes(value)) {
        onAnswerChange(current.filter(v => v !== value));
      } else {
        onAnswerChange([...current, value]);
      }
    } else {
      onAnswerChange(value);
    }
  };

  const getOptionStyle = (value: string) => {
    const selected = isSelected(value);
    
    if (showFeedback) {
      const isCorrect = Array.isArray(question.correctAnswer) 
        ? question.correctAnswer.includes(value)
        : question.correctAnswer === value;
      
      if (isCorrect) return 'bg-green-500/20 border-green-500 text-green-400';
      if (selected && !isCorrect) return 'bg-red-500/20 border-red-500 text-red-400';
      return 'bg-dark-surface border-dark-border opacity-50';
    }

    if (selected) return 'bg-primary/20 border-primary text-primary-light';
    return 'bg-dark-surface border-dark-border hover:border-primary/50 hover:bg-white/5 text-gray-300';
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-xl font-medium text-white leading-relaxed">
          {question.text}
        </h3>
        
        {question.codeSnippet && (
          <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto border border-white/10">
            <code className="text-sm font-mono text-blue-300">
              {question.codeSnippet}
            </code>
          </pre>
        )}
      </div>

      <div className="space-y-3">
        {question.options?.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            disabled={showFeedback}
            className={`
              w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center
              ${getOptionStyle(option)}
            `}
          >
            <div className={`
              w-5 h-5 rounded flex items-center justify-center border mr-3 transition-colors
              ${isSelected(option) 
                ? 'bg-primary border-primary text-white' 
                : 'border-gray-500'
              }
              ${question.type === 'multiple-choice' || question.type === 'true-false' ? 'rounded-full' : 'rounded'}
            `}>
              {isSelected(option) && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <span className="font-medium">{option}</span>
          </button>
        ))}
      </div>

      {showFeedback && (
        <div className="mt-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <h4 className="text-blue-400 font-bold mb-2">Explanation</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
