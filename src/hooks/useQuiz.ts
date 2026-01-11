import { useState, useCallback } from 'react';
import { QuizQuestion, UmlComponent } from '@/types';
import { useCaseQuestions, activityQuestions, umlData } from '@/data/uml-data';

export const useQuiz = () => {
    const [activeQuizType, setActiveQuizType] = useState<'usecase' | 'activity' | null>(null);
    const [currentQuestions, setCurrentQuestions] = useState<QuizQuestion[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userSequence, setUserSequence] = useState<(UmlComponent | null)[]>([]);

    // Feedback Modal
    const [showFeedback, setShowFeedback] = useState(false);
    const [feedbackData, setFeedbackData] = useState<{ title: string, desc: string, isCorrect: boolean }>({
        title: '', desc: '', isCorrect: false
    });

    const startQuiz = (type: 'usecase' | 'activity') => {
        setActiveQuizType(type);
        setCurrentQuestions(type === 'usecase' ? useCaseQuestions : activityQuestions);
        setCurrentIndex(0);
        setUserSequence([]); // Will init based on question length in useEffect or render
    };

    const currentQuestion = currentQuestions[currentIndex];

    // Initialize slots when question changes
    const initSlots = useCallback(() => {
        if (currentQuestion) {
            setUserSequence(new Array(currentQuestion.targetSequence.length).fill(null));
        }
    }, [currentQuestion]);

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
            setFeedbackData({
                title: 'Benar!',
                desc: currentQuestion.explanation,
                isCorrect: true
            });
            setShowFeedback(true);
        } else {
            setFeedbackData({
                title: 'Kurang Tepat',
                desc: 'Coba periksa kembali urutan atau komponen yang digunakan.',
                isCorrect: false
            });
            setShowFeedback(true);
        }
    };

    const nextQuestion = () => {
        setShowFeedback(false);
        if (currentIndex < currentQuestions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            // Reset sequence is handled by useEffect or parent calling initSlots
            // We'll reset here for safety but logic depends on how we consume it
            // actually initSlots needs to be called after render or we just reset state here
            // But we can't sync synchronously with state update of index immediately in same tick easily without effect
            // So we'll set userSequence to empty here, and the component will see it mismatches length and re-init or we init with correct length if we know next Q
            const nextQ = currentQuestions[currentIndex + 1];
            setUserSequence(new Array(nextQ.targetSequence.length).fill(null));
        } else {
            // End of quiz
            alert("Selamat! Anda telah menyelesaikan sesi kuis ini.");
            exitQuiz();
        }
    };

    const exitQuiz = () => {
        setActiveQuizType(null);
        setShowFeedback(false);
    };

    return {
        activeQuizType,
        currentQuestion,
        currentIndex,
        totalQuestions: currentQuestions.length,
        userSequence,
        showFeedback,
        feedbackData,
        startQuiz,
        handleDrop,
        handleRemove,
        checkAnswer,
        nextQuestion,
        exitQuiz,
        initSlots // Optional helper
    };
};
