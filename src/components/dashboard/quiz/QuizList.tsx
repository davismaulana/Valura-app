import { Link } from 'react-router-dom';
import { 
  ClockIcon, 
  CheckCircleIcon, 
  XCircleIcon, 
  PlayCircleIcon,
  ArrowPathIcon
} from '@heroicons/react/24/solid';
import { RevealOnScroll } from '../../RevealOnScroll';
import type { Quiz } from '../../../types';

const QuizList = () => {
  // Mock Data
  const quizzes: Quiz[] = [
    {
      id: '1',
      title: 'Neural Networks Basics',
      description: 'Test your knowledge on the fundamentals of neural networks and backpropagation.',
      courseId: '1',
      questionsCount: 10,
      timeLimit: 15,
      passScore: 70,
      status: 'passed',
      score: 85,
      attempts: 1
    },
    {
      id: '2',
      title: 'Python for Data Science',
      description: 'Assess your understanding of NumPy, Pandas, and data manipulation.',
      courseId: '2',
      questionsCount: 15,
      timeLimit: 20,
      passScore: 75,
      status: 'not-started',
      attempts: 0
    },
    {
      id: '3',
      title: 'Machine Learning Algorithms',
      description: 'A comprehensive quiz on supervised and unsupervised learning algorithms.',
      courseId: '1',
      questionsCount: 20,
      timeLimit: 30,
      passScore: 80,
      status: 'failed',
      score: 65,
      attempts: 2
    }
  ];

  const getStatusBadge = (status: Quiz['status']) => {
    switch (status) {
      case 'passed':
        return (
          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium flex items-center border border-green-500/20">
            <CheckCircleIcon className="h-3 w-3 mr-1" />
            Passed
          </span>
        );
      case 'failed':
        return (
          <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-medium flex items-center border border-red-500/20">
            <XCircleIcon className="h-3 w-3 mr-1" />
            Failed
          </span>
        );
      case 'in-progress':
        return (
          <span className="bg-primary/20 text-primary-light px-3 py-1 rounded-full text-xs font-medium flex items-center border border-primary/20">
            <ClockIcon className="h-3 w-3 mr-1" />
            In Progress
          </span>
        );
      default:
        return (
          <span className="bg-gray-500/20 text-gray-300 px-3 py-1 rounded-full text-xs font-medium flex items-center border border-gray-500/20">
            Not Started
          </span>
        );
    }
  };

  return (
    <div className="space-y-8 pb-10">
      <RevealOnScroll>
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Assessments & Quizzes</h1>
          <p className="text-gray-400">Test your knowledge and earn certificates.</p>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz, index) => (
          <RevealOnScroll key={quiz.id} delay={index * 100}>
            <div className="bg-dark-surface rounded-2xl border border-dark-border p-6 hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-lg group h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                {getStatusBadge(quiz.status)}
                {quiz.score !== undefined && (
                  <span className={`text-lg font-bold ${quiz.score >= quiz.passScore ? 'text-green-400' : 'text-red-400'}`}>
                    {quiz.score}%
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {quiz.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 flex-1">
                {quiz.description}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pt-4 border-t border-white/5">
                <span className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  {quiz.timeLimit} mins
                </span>
                <span>{quiz.questionsCount} Questions</span>
              </div>

              <Link
                to={`/lms/quizzes/${quiz.id}`}
                className={`
                  block w-full py-3 rounded-xl font-medium text-center transition-all shadow-lg flex items-center justify-center
                  ${quiz.status === 'not-started' 
                    ? 'bg-primary hover:bg-primary-hover text-white shadow-primary/20 hover:shadow-primary/40' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                  }
                `}
              >
                {quiz.status === 'not-started' ? (
                  <>
                    <PlayCircleIcon className="h-5 w-5 mr-2" />
                    Start Quiz
                  </>
                ) : (
                  <>
                    <ArrowPathIcon className="h-5 w-5 mr-2" />
                    {quiz.status === 'passed' ? 'Retake Quiz' : 'Try Again'}
                  </>
                )}
              </Link>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};

export default QuizList;
