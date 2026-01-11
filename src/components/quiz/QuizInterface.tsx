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
        score,
        showResult,
        handleDrop,
        handleRemove,
        checkAnswer,
        nextQuestion,
        exitQuiz
    } = quizHook;

    if (!activeQuizType) return null;

    // Handle Quiz Start / Loading
    if (!currentQuestion && !showResult) {
        return <div style={{ padding: '2rem', textAlign: 'center' }}>Memuat Soal...</div>;
    }

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
                    {currentQuestion && (
                        <>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{currentQuestion.scenario}</h3>
                            <p className={styles.quizDesc}>{currentQuestion.instruction}</p>
                        </>
                    )}
                </div>

                <div className={styles.builderContainer}>
                    {/* --- LAYOUT SWITCHER --- */}

                    {/* 1. BOUNDARY LAYOUT (Use Case) */}
                    {currentQuestion.layoutMode === 'boundary' && userSequence.length >= 3 ? (
                        <div className={styles.boundaryContainer}>
                            {/* Left: Actor Zone (Index 0 generally) */}
                            <div className={styles.actorZone}>
                                <div style={{ marginBottom: '0.5rem', fontSize: '0.8rem', color: '#64748b' }}>Actor</div>
                                <DropSlot item={userSequence[0]} index={0} onDrop={onDrop} onDragOver={onDragOver} handleRemove={handleRemove} />
                            </div>

                            {/* Middle: Connector (Index 1) */}
                            <div className={styles.actorZone}>
                                <div style={{ marginBottom: '0.5rem', fontSize: '0.8rem', color: '#64748b' }}>Relasi</div>
                                <DropSlot item={userSequence[1]} index={1} onDrop={onDrop} onDragOver={onDragOver} handleRemove={handleRemove} />
                            </div>

                            {/* Right: System Boundary (Index 2) */}
                            <div className={styles.systemBox}>
                                <div className={styles.systemLabel}>System</div>
                                <DropSlot item={userSequence[2]} index={2} onDrop={onDrop} onDragOver={onDragOver} handleRemove={handleRemove} />
                            </div>
                        </div>
                    ) :

                        /* 2. SWIMLANE LAYOUT (Activity) */
                        currentQuestion.layoutMode === 'swimlane' && currentQuestion.swimlaneHeaders ? (
                            <div className={styles.swimlaneContainer}>
                                {currentQuestion.swimlaneHeaders.map((header, colIndex) => (
                                    <div key={colIndex} className={styles.swimlaneCol}>
                                        <div className={styles.swimlaneHeader}>{header}</div>
                                        <div className={styles.swimlaneContent}>
                                            {/* Simple mapping: if headers are [User, System], 
                                            we put even items in col 0, odd in col 1? 
                                            OR we just iterate sequence and guess. 
                                            BETTER: Let's assume sequential filling for now:
                                            col 0 gets item 0, col 1 gets item 1, etc? 
                                            
                                            For this demo, let's distribute specific indices.
                                            Index 0 -> Col 0
                                            Index 1 -> Col 0 (arrow?)
                                            Index 2 -> Col 1
                                            
                                            A generic way: Loop all sequence items, print them if they 'belong' to this column.
                                            But we don't have 'belonging' data here.
                                            
                                            Let's blindly fill slots into columns for demo purpose.
                                            Col 0: Item 0
                                            Col 1: Item 2 (Item 1 is arrow)
                                            Col 2: Item 4
                                            
                                            Actually, let's just render specific slots in specific columns based on predefined assumption for specific Qs
                                            or just render ALL slots belonging to "this turn".
                                            
                                            Implementation Simplified:
                                            We just split the slots equally? No.
                                            Let's hardcode for the demo scenarios:
                                            If 2 columns (User, System):
                                              Item 0 -> User
                                              Item 1 (Flow) -> Across? No, just hidden or placed in between?
                                              Item 2 -> System
                                        */}

                                            {/* Render items that map to this column modulo or simple logic */}
                                            {userSequence.map((item, i) => {
                                                // Quick hack logic for visual distribution:
                                                // Even indices (nodes) go to respective columns. 
                                                // Odd indices (flows) are tricky.
                                                // Let's just put Node 1 (index 0) in Col 0, Node 2 (index 2) in Col 1...

                                                // If this is an 'Arrow' (odd index usually), maybe exclude from swimlane or put in previous?
                                                const isArrow = i % 2 !== 0;
                                                const targetCol = Math.floor(i / 2) % currentQuestion.swimlaneHeaders!.length;

                                                if (targetCol === colIndex) {
                                                    return (
                                                        <React.Fragment key={i}>
                                                            {isArrow ? (
                                                                <div className={styles.arrowConnector} style={{ margin: '1rem 0' }}>↓</div>
                                                            ) : (
                                                                <DropSlot item={item} index={i} onDrop={onDrop} onDragOver={onDragOver} handleRemove={handleRemove} />
                                                            )}
                                                        </React.Fragment>
                                                    )
                                                }
                                                return null;
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) :

                            /* 3. DEFAULT LINEAR LAYOUT */
                            (
                                <div className={styles.builderRow}>
                                    {userSequence.map((item, i) => (
                                        <React.Fragment key={i}>
                                            {i > 0 && <div className={styles.arrowConnector}>→</div>}
                                            <DropSlot item={item} index={i} onDrop={onDrop} onDragOver={onDragOver} handleRemove={handleRemove} />
                                        </React.Fragment>
                                    ))}
                                </div>
                            )}
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
                        <p style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>{feedbackData.desc}</p>

                        {!feedbackData.isCorrect && feedbackData.correctAnswer && (
                            <div style={{
                                padding: '1rem',
                                background: '#f0f9ff',
                                borderRadius: '0.5rem',
                                border: '1px solid #bae6fd',
                                marginBottom: '1.5rem',
                                fontSize: '0.9rem'
                            }}>
                                <strong>Jawaban Benar:</strong><br />
                                {feedbackData.correctAnswer}
                            </div>
                        )}

                        <button className={styles.btnCheck} onClick={nextQuestion}>
                            {feedbackData.isCorrect ? 'LANJUT' : 'LANJUT KE SOAL BERIKUTNYA'}
                        </button>
                    </div>
                </div>
            )}

            {/* Result Modal */}
            {showResult && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalBox}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏆</div>
                        <h2 style={{ marginBottom: '0.5rem' }}>Kuis Selesai!</h2>
                        <p style={{ color: 'var(--secondary-color)', marginBottom: '2rem' }}>
                            Anda berhasil menyelesaikan kuis ini.
                        </p>
                        <div style={{
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            color: 'var(--primary-color)',
                            marginBottom: '2rem'
                        }}>
                            Skor: {score} / {totalQuestions}
                        </div>
                        <button className={styles.btnCheck} onClick={exitQuiz}>
                            KEMBALI KE MENU
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

// Helper Component for Drop Zone
const DropSlot = ({ item, index, onDrop, onDragOver, handleRemove }: any) => {
    return (
        <div
            className={`${styles.dropZone} ${item ? styles.dropZoneFilled : ''}`}
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, index)}
        >
            {item ? (
                <>
                    <div className={styles.dropZoneContent}>
                        <div dangerouslySetInnerHTML={{ __html: item.svg }} />
                        <span>{item.name}</span>
                    </div>
                    <button className={styles.removeBtn} onClick={() => handleRemove(index)}>×</button>
                </>
            ) : (
                <div className={styles.dropZoneContent}>
                    <span style={{ fontSize: '2rem', color: '#cbd5e1' }}>+</span>
                    <span style={{ color: '#94a3b8', fontWeight: 400 }}>Drop Here</span>
                </div>
            )}
        </div>
    );
};
