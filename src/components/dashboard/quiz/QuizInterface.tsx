import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  ClockIcon, 
  FlagIcon,
  CheckCircleIcon
} from '@heroicons/react/24/solid';
import { RevealOnScroll } from '../../RevealOnScroll';
import QuestionCard from './QuestionCard';
import type { Quiz, Question } from '../../../types';

const QuizInterface = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock Data (In real app, fetch based on ID)
  const quiz: Quiz = {
    id: '1',
    title: 'Neural Networks Basics',
    description: 'Test your knowledge on the fundamentals of neural networks and backpropagation.',
    courseId: '1',
    questionsCount: 3,
    timeLimit: 15,
    passScore: 70,
    status: 'in-progress',
    attempts: 0
  };

  const questions: Question[] = [
    {
      id: 'q1',
      type: 'multiple-choice',
      text: 'What is the primary function of an activation function in a neural network?',
      options: [
        'To initialize weights',
        'To introduce non-linearity',
        'To reduce overfitting',
        'To calculate the loss'
      ],
      correctAnswer: 'To introduce non-linearity',
      explanation: 'Activation functions introduce non-linear properties to the network, allowing it to learn complex patterns.',
      points: 10
    },
    {
      id: 'q2',
      type: 'multiple-select',
      text: 'Which of the following are common activation functions?',
      options: [
        'ReLU',
        'Sigmoid',
        'Linear Regression',
        'Tanh'
      ],
      correctAnswer: ['ReLU', 'Sigmoid', 'Tanh'],
      explanation: 'ReLU, Sigmoid, and Tanh are standard activation functions. Linear Regression is an algorithm, not an activation function.',
      points: 10
    },
    {
      id: 'q3',
      type: 'code',
      text: 'Which library is commonly used for building neural networks in Python?',
      codeSnippet: 'import ______ as tf',
      options: [
        'numpy',
        'pandas',
        'tensorflow',
        'matplotlib'
      ],
      correctAnswer: 'tensorflow',
      explanation: 'TensorFlow is a popular library for deep learning, often imported as tf.',
      points: 10
    }
  ];

  // Timer Logic
  useEffect(() => {
    setTimeLeft(quiz.timeLimit * 60);
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit(); // Auto-submit
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Handlers
  const handleAnswerChange = (answer: string | string[]) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestionIndex].id]: answer
    }));
  };

  const toggleFlag = () => {
    const currentId = questions[currentQuestionIndex].id;
    setFlaggedQuestions(prev => 
      prev.includes(currentId) 
        ? prev.filter(id => id !== currentId)
        : [...prev, currentId]
    );
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      // Calculate score (mock logic)
      let score = 0;
      let totalPoints = 0;
      questions.forEach(q => {
        totalPoints += q.points;
        const answer = answers[q.id];
        if (Array.isArray(q.correctAnswer)) {
          // Simplified array comparison
          if (Array.isArray(answer) && 
              answer.length === q.correctAnswer.length && 
              answer.every(a => q.correctAnswer.includes(a))) {
            score += q.points;
          }
        } else {
          if (answer === q.correctAnswer) {
            score += q.points;
          }
        }
      });
      
      const percentage = Math.round((score / totalPoints) * 100);
      navigate(`/lms/quizzes/${id}/results`, { 
        state: { score: percentage, answers, questions, quiz } 
      });
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto pb-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">{quiz.title}</h1>
          <p className="text-gray-400 text-sm">Question {currentQuestionIndex + 1} of {questions.length}</p>
        </div>
        <div className={`
          flex items-center px-4 py-2 rounded-lg font-mono font-bold text-lg
          ${timeLeft < 60 ? 'bg-red-500/20 text-red-400' : 'bg-dark-surface border border-dark-border text-white'}
        `}>
          <ClockIcon className="h-5 w-5 mr-2" />
          {formatTime(timeLeft)}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <RevealOnScroll key={currentQuestionIndex}>
            <div className="bg-dark-surface rounded-2xl border border-dark-border p-8 min-h-[400px] flex flex-col">
              <div className="flex-1">
                <QuestionCard 
                  question={questions[currentQuestionIndex]}
                  selectedAnswer={answers[questions[currentQuestionIndex].id] || ''}
                  onAnswerChange={handleAnswerChange}
                />
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                <button
                  onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                  disabled={currentQuestionIndex === 0}
                  className="flex items-center px-4 py-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeftIcon className="h-5 w-5 mr-1" />
                  Previous
                </button>

                <button
                  onClick={toggleFlag}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                    flaggedQuestions.includes(questions[currentQuestionIndex].id)
                      ? 'text-yellow-400 bg-yellow-400/10'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <FlagIcon className="h-5 w-5 mr-2" />
                  {flaggedQuestions.includes(questions[currentQuestionIndex].id) ? 'Flagged' : 'Flag for Review'}
                </button>

                {currentQuestionIndex === questions.length - 1 ? (
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex items-center px-6 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-all shadow-lg shadow-primary/20 disabled:opacity-70"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Quiz'}
                    {!isSubmitting && <CheckCircleIcon className="h-5 w-5 ml-2" />}
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentQuestionIndex(prev => Math.min(questions.length - 1, prev + 1))}
                    className="flex items-center px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors"
                  >
                    Next
                    <ChevronRightIcon className="h-5 w-5 ml-2" />
                  </button>
                )}
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-dark-surface rounded-2xl border border-dark-border p-6 sticky top-8">
            <h3 className="text-white font-bold mb-4">Questions</h3>
            <div className="grid grid-cols-4 gap-2">
              {questions.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={`
                    h-10 w-10 rounded-lg font-medium text-sm transition-all relative
                    ${currentQuestionIndex === idx 
                      ? 'bg-primary text-white ring-2 ring-primary ring-offset-2 ring-offset-dark-surface' 
                      : answers[q.id] 
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }
                  `}
                >
                  {idx + 1}
                  {flaggedQuestions.includes(q.id) && (
                    <div className="absolute -top-1 -right-1 h-3 w-3 bg-yellow-400 rounded-full border-2 border-dark-surface"></div>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
              <div className="flex items-center text-sm text-gray-400">
                <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                Current
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <div className="w-3 h-3 rounded-full bg-blue-500/20 border border-blue-500/30 mr-2"></div>
                Answered
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <div className="w-3 h-3 rounded-full bg-white/5 mr-2"></div>
                Unanswered
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                Flagged
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizInterface;
