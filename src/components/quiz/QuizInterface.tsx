import React from 'react';
import { useQuiz } from '@/hooks/useQuiz';
import { Toolbox } from './Toolbox';
import styles from './Quiz.module.css';

interface QuizInterfaceProps {
    quizHook: ReturnType<typeof useQuiz>;
}

export const QuizInterface: React.FC<QuizInterfaceProps> = ({ quizHook }) => {
    const {
        activeQuizType,
        currentQuestion,
        currentIndex,
        totalQuestions,
        userSequence,
        feedbackData,
        showFeedback,
        handleDrop,
        handleRemove,
        checkAnswer,
        nextQuestion,
        exitQuiz
    } = quizHook;

    if (!activeQuizType || !currentQuestion) return null;

    const onDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const onDrop = (e: React.DragEvent, index: number) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        handleDrop(index, id);
    };

    const onDragStart = (e: React.DragEvent, id: string) => {
        e.dataTransfer.setData('text/plain', id);
    };

    return (
        <div className={styles.quizInterface}>
            {/* Left: Canvas Area */}
            <div className={styles.canvasArea}>
                <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <button className={styles.btnBack} onClick={exitQuiz}>← Kembali ke Menu</button>
                        <span style={{ fontWeight: 600 }}>Soal {currentIndex + 1}/{totalQuestions}</span>
                    </div>
                    <h2 style={{ marginTop: '1rem', color: 'var(--primary-color)' }}>
                        {activeQuizType === 'usecase' ? 'USE CASE DIAGRAM' : 'ACTIVITY DIAGRAM'}
                    </h2>
                    <div className={styles.progressContainer}>
                        <div
                            className={styles.progressBar}
                            style={{ width: `${(currentIndex / totalQuestions) * 100}%` }}
                        ></div>
                    </div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{currentQuestion.scenario}</h3>
                    <p className={styles.quizDesc}>{currentQuestion.instruction}</p>
                </div>

                <div className={styles.builderContainer}>
                    <div className={styles.builderRow}>
                        {userSequence.map((item, i) => (
                            <React.Fragment key={i}>
                                {i > 0 && <div className={styles.arrowConnector}>→</div>}
                                <div
                                    className={`${styles.dropZone} ${item ? styles.dropZoneFilled : ''}`}
                                    onDragOver={onDragOver}
                                    onDrop={(e) => onDrop(e, i)}
                                >
                                    {item ? (
                                        <>
                                            <div className={styles.dropZoneContent}>
                                                <div dangerouslySetInnerHTML={{ __html: item.svg }} />
                                                <span>{item.name}</span>
                                            </div>
                                            <button className={styles.removeBtn} onClick={() => handleRemove(i)}>×</button>
                                        </>
                                    ) : (
                                        <div className={styles.dropZoneContent}>
                                            <span style={{ fontSize: '2rem', color: '#cbd5e1' }}>+</span>
                                            <span style={{ color: '#94a3b8', fontWeight: 400 }}>Drop Here</span>
                                        </div>
                                    )}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <button className={styles.btnCheck} onClick={checkAnswer}>CEK JAWABAN</button>
            </div>

            {/* Right: Toolbox */}
            <Toolbox quizType={activeQuizType} onDragStart={onDragStart} />

            {/* Feedback Modal */}
            {showFeedback && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalBox}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                            {feedbackData.isCorrect ? '🎉' : '❌'}
                        </div>
                        <h2 style={{ marginBottom: '0.5rem' }}>{feedbackData.title}</h2>
                        <p style={{ color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>{feedbackData.desc}</p>
                        <button className={styles.btnCheck} onClick={nextQuestion}>
                            {feedbackData.isCorrect ? 'LANJUT' : 'COBA LAGI / LANJUT'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
