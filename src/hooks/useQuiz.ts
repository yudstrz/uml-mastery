import { useState, useCallback, useEffect } from 'react';
import { QuizQuestion, UmlComponent } from '@/types';
import { useCaseQuestions, activityQuestions, umlData } from '@/data/uml-data';

export const useQuiz = () => {
    const [activeQuizType, setActiveQuizType] = useState<'usecase' | 'activity' | null>(null);
    const [currentQuestions, setCurrentQuestions] = useState<QuizQuestion[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userSequence, setUserSequence] = useState<(UmlComponent | null)[]>([]);

    // Scoring & Results
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    // Feedback Modal
    const [showFeedback, setShowFeedback] = useState(false);
    const [feedbackData, setFeedbackData] = useState<{ title: string, desc: string, isCorrect: boolean, correctAnswer?: string }>({
        title: '', desc: '', isCorrect: false
    });

    const currentQuestion = currentQuestions[currentIndex];

    // Initialize drop zones when question changes
    useEffect(() => {
        if (currentQuestion) {
            setUserSequence(new Array(currentQuestion.targetSequence.length).fill(null));
        }
    }, [currentQuestion]);

    const startQuiz = (type: 'usecase' | 'activity') => {
        setActiveQuizType(type);
        setCurrentQuestions(type === 'usecase' ? useCaseQuestions : activityQuestions);
        setCurrentIndex(0);
        setScore(0);
        setShowResult(false);
        // userSequence will be init by useEffect
    };

    const handleDrop = (index: number, componentId: string) => {
        const component = umlData.find(c => c.id === componentId);
        if (!component) return;

        setUserSequence(prev => {
            const newSeq = [...prev];
            newSeq[index] = component;
            return newSeq;
        });
    };

    const handleRemove = (index: number) => {
        setUserSequence(prev => {
            const newSeq = [...prev];
            newSeq[index] = null;
            return newSeq;
        });
    };

    const checkAnswer = () => {
        if (!currentQuestion) return;

        // Compare IDs
        const currentIds = userSequence.map(u => u?.id);
        const targetIds = currentQuestion.targetSequence;

        // Simple equality check
        const isCorrect = currentIds.length === targetIds.length &&
            currentIds.every((val, index) => val === targetIds[index]);

        if (isCorrect) {
            setScore(prev => prev + 1);
            setFeedbackData({
                title: 'Benar!',
                desc: currentQuestion.explanation,
                isCorrect: true
            });
            setShowFeedback(true);
        } else {
            // Generate correct answer string
            const correctNames = targetIds.map(id => {
                const comp = umlData.find(c => c.id === id);
                return comp ? comp.name : id;
            }).join(' → ');

            setFeedbackData({
                title: 'Kurang Tepat',
                desc: 'Coba periksa kembali urutan atau komponen yang digunakan.',
                isCorrect: false,
                correctAnswer: correctNames
            });
            setShowFeedback(true);
        }
    };

    const nextQuestion = () => {
        setShowFeedback(false);
        if (currentIndex < currentQuestions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            // End of quiz
            setShowResult(true);
        }
    };

    const exitQuiz = () => {
        setActiveQuizType(null);
        setShowFeedback(false);
        setShowResult(false);
        setScore(0);
    };

    return {
        activeQuizType,
        currentQuestion,
        currentIndex,
        totalQuestions: currentQuestions.length,
        userSequence,
        showFeedback,
        feedbackData,
        score,
        showResult,
        startQuiz,
        handleDrop,
        handleRemove,
        checkAnswer,
        nextQuestion,
        exitQuiz
    };
};
