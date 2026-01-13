import React, { useState } from 'react';
import { theoryQuestions } from '@/data/quiz';

interface QuizScreenProps {
    onComplete: () => void;
}

export default function QuizScreen({ onComplete }: QuizScreenProps) {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [showFeedback, setShowFeedback] = useState(false);

    const question = theoryQuestions[currentIdx];

    const handleAnswer = (optionIndex: number) => {
        if (showFeedback) return;

        setSelectedOption(optionIndex);
        const correct = optionIndex === question.correct;
        setIsCorrect(correct);

        if (correct) {
            setShowFeedback(true);
        } else {
            // Visual shake effect or temporary wrong state could be added here
            // For now, we just rely on the 'wrong' class being applied
            setTimeout(() => {
                setSelectedOption(null);
                setIsCorrect(null);
            }, 500);
        }
    };

    const nextQuestion = () => {
        if (currentIdx < theoryQuestions.length - 1) {
            setCurrentIdx(currentIdx + 1);
            setSelectedOption(null);
            setIsCorrect(null);
            setShowFeedback(false);
        } else {
            onComplete();
        }
    };

    return (
        <div id="screen-quiz-theory" className="app-screen active">
            <div className="quiz-card" style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '3rem', borderRadius: '24px', boxShadow: 'var(--shadow)' }}>
                <div style={{ textTransform: 'uppercase', color: 'var(--warning)', fontWeight: 800, fontSize: '0.8rem', marginBottom: '1rem' }}>
                    Kuis Teori
                </div>

                <div className="quiz-question" id="mcq-question" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                    {currentIdx + 1}. {question.q}
                </div>

                <div className="quiz-options" id="mcq-options" style={{ display: 'grid', gap: '1rem' }}>
                    {question.opts.map((opt, i) => (
                        <div
                            key={i}
                            className={`quiz-option ${selectedOption === i ? (isCorrect ? 'correct' : 'wrong') : ''}`}
                            onClick={() => handleAnswer(i)}
                        >
                            {opt}
                        </div>
                    ))}
                </div>

                {showFeedback && (
                    <div className="feedback-box" id="mcq-feedback" style={{ marginTop: '2rem', padding: '1.5rem', background: '#ecfdf5', borderRadius: '12px', borderLeft: '4px solid #10b981', textAlign: 'left' }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#064e3b' }}>Penjelasan:</div>
                        <div id="mcq-explanation" style={{ color: '#065f46' }}>{question.exp}</div>
                        <div style={{ textAlign: 'right', marginTop: '1rem' }}>
                            <button className="btn btn-primary btn-sm" onClick={nextQuestion}>
                                {currentIdx === theoryQuestions.length - 1 ? 'Masuk ke Knowledge Hub 📚' : 'Soal Berikutnya 👉'}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
