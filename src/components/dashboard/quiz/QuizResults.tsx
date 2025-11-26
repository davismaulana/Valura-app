import { useLocation, Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  XCircleIcon, 
  ArrowPathIcon
} from '@heroicons/react/24/solid';
import { RevealOnScroll } from '../../RevealOnScroll';
import QuestionCard from './QuestionCard';
import type { Quiz, Question } from '../../../types';

const QuizResults = () => {
  const location = useLocation();
  const { score, answers, questions, quiz } = location.state as { 
    score: number; 
    answers: Record<string, string | string[]>; 
    questions: Question[];
    quiz: Quiz;
  };

  const isPassed = score >= quiz.passScore;

  return (
    <div className="max-w-4xl mx-auto pb-10">
      <RevealOnScroll>
        <div className="text-center mb-10">
          <div className={`inline-flex items-center justify-center p-4 rounded-full mb-4 ${isPassed ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
            {isPassed ? (
              <CheckCircleIcon className="h-16 w-16 text-green-500" />
            ) : (
              <XCircleIcon className="h-16 w-16 text-red-500" />
            )}
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            {isPassed ? 'Quiz Passed!' : 'Quiz Failed'}
          </h1>
          <p className="text-gray-400 mb-6">
            You scored <span className={`font-bold ${isPassed ? 'text-green-400' : 'text-red-400'}`}>{score}%</span>. 
            Pass mark is {quiz.passScore}%.
          </p>
          
          <div className="flex justify-center gap-4">
            <Link
              to="/lms/quizzes"
              className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
            >
              Back to Quizzes
            </Link>
            <Link
              to={`/lms/quizzes/${quiz.id}`}
              className="px-6 py-2 rounded-lg bg-primary hover:bg-primary-hover text-white font-medium transition-colors flex items-center shadow-lg shadow-primary/20"
            >
              <ArrowPathIcon className="h-5 w-5 mr-2" />
              Retake Quiz
            </Link>
          </div>
        </div>
      </RevealOnScroll>

      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-4">Review Answers</h2>
        
        {questions.map((question, index) => (
          <RevealOnScroll key={question.id} delay={index * 100}>
            <div className="bg-dark-surface rounded-2xl border border-dark-border p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-medium text-gray-400">Question {index + 1}</span>
                <span className="text-sm font-medium text-gray-500">{question.points} Points</span>
              </div>
              
              <QuestionCard 
                question={question}
                selectedAnswer={answers[question.id] || ''}
                onAnswerChange={() => {}} // Read-only
                showFeedback={true}
              />
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};

export default QuizResults;
