export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: 'student' | 'instructor' | 'admin';
    progress: {
        totalHours: number;
        coursesInProgress: number;
        coursesCompleted: number;
        certificatesEarned: number;
    };
}

export interface Course {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    instructor: {
        name: string;
        avatar: string;
    };
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    modulesCount: number;
    progress: number; // 0-100
    status: 'not-started' | 'in-progress' | 'completed';
    lastAccessed?: string;
}

export interface Module {
    id: string;
    courseId: string;
    title: string;
    description: string;
    duration: string;
    order: number;
    isLocked: boolean;
    lessons: Lesson[];
}

export interface Lesson {
    id: string;
    moduleId: string;
    title: string;
    description: string;
    videoUrl: string;
    duration: string; // e.g., "10:00"
    order: number;
    isCompleted: boolean;
    isLocked: boolean;
    resources?: Resource[];
}

export interface Resource {
    id: string;
    title: string;
    type: 'pdf' | 'code' | 'link';
    url: string;
}

export interface Activity {
    id: string;
    type: 'video' | 'quiz' | 'assignment';
    title: string;
    courseTitle: string;
    timestamp: string;
    progress?: number;
}

export interface Deadline {
    id: string;
    title: string;
    courseTitle: string;
    dueDate: string;
    type: 'assignment' | 'quiz';
    isOverdue: boolean;
}

export interface Quiz {
    id: string;
    title: string;
    description: string;
    courseId: string;
    questionsCount: number;
    timeLimit: number; // in minutes
    passScore: number; // percentage
    status: 'not-started' | 'in-progress' | 'passed' | 'failed';
    score?: number;
    attempts: number;
}

export interface Question {
    id: string;
    type: 'multiple-choice' | 'multiple-select' | 'true-false' | 'short-answer' | 'code';
    text: string;
    codeSnippet?: string;
    options?: string[];
    correctAnswer: string | string[]; // string for single, array for multiple
    explanation: string;
    points: number;
}

export interface QuizAttempt {
    quizId: string;
    answers: Record<string, string | string[]>; // questionId -> answer
    score: number;
    completedAt: string;
    timeSpent: number; // in seconds
}
