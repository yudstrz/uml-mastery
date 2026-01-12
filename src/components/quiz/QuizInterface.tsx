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
                                            {/* Render items based on slotMapping if available, else simple distribution */}
                                            {userSequence.map((item, i) => {
                                                // Determine target column
                                                // 1. Explicit mapping
                                                let targetCol = 0;
                                                if (currentQuestion.slotMapping && currentQuestion.slotMapping[i] !== undefined) {
                                                    targetCol = currentQuestion.slotMapping[i];
                                                } else {
                                                    // 2. Fallback: all in first column if mapping missing to be safe
                                                    targetCol = 0;
                                                }

                                                if (targetCol === colIndex) {
                                                    return (
                                                        <React.Fragment key={i}>
                                                            {/* Add visual arrow separator if not the first item in this column/sequence? 
                                                                Actually, we check if there was a previous item in this column.
                                                                But simpler: just add arrow above item if i > 0.
                                                            */}
                                                            {i > 0 && (
                                                                <div className={styles.arrowConnector} style={{ margin: '0.5rem 0' }}>↓</div>
                                                            )}
                                                            <DropSlot item={item} index={i} onDrop={onDrop} onDragOver={onDragOver} handleRemove={handleRemove} />
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

                            /* 3. GO FOOD / CUSTOM GRID LAYOUT */
                            currentQuestion.layoutMode === 'gofood' && currentQuestion.slotConfig ? (
                                <div className={styles.gofoodGrid}>
                                    {/* System Boundary Box - visual only */}
                                    <div className={styles.gofoodSystemBox}>
                                        <span className={styles.gofoodSystemLabel}>Sistem Go Food</span>
                                    </div>

                                    {currentQuestion.slotConfig.map((config, i) => {
                                        // Yellow slots for Validasi Pembayaran (index 7) and Pakai promo (index 8)
                                        const isSpecialUseCase = i === 7 || i === 8;

                                        return (
                                            <div
                                                key={i}
                                                style={{ gridArea: config.gridArea, position: 'relative', zIndex: 10 }}
                                                className={styles.gofoodSlotWrapper}
                                            >
                                                <div className={`${styles.slotLabel} ${isSpecialUseCase ? styles.yellowSlotLabel : ''}`}>
                                                    {config.label}
                                                </div>
                                                <DropSlot
                                                    item={userSequence[i]}
                                                    index={i}
                                                    onDrop={onDrop}
                                                    onDragOver={onDragOver}
                                                    handleRemove={handleRemove}
                                                    isYellowSlot={isSpecialUseCase}
                                                />
                                            </div>
                                        );
                                    })}


                                    {/* Visual Lines (Hardcoded for this specific layout to match the diagram) */}
                                    <svg className={styles.connectorLines} viewBox="0 0 800 600">
                                        <defs>
                                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                                                <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
                                            </marker>
                                        </defs>
                                        {/* Lines will be drawn via CSS background or absolute if complex, but simple SVG lines work best */}
                                        {/* Example lines matching the grid positions roughly - this is simplified */}
                                        {/* Pelanggan -> Login */}
                                        <line x1="80" y1="80" x2="350" y2="80" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#arrowhead)" />
                                        {/* Pelanggan -> Mencari Makanan */}
                                        <line x1="80" y1="120" x2="350" y2="150" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#arrowhead)" />
                                        {/* ... more lines would be ideal but might be complex to hardcode perfectly without specific coordinates. 
                                        For now, the grid placement implies the structure. 
                                        Let's trust the spatial arrangement.
                                    */}
                                    </svg>
                                </div>
                            ) :

                                /* 4. ACTIVITY CUSTOM LAYOUT (Go Food) */
                                currentQuestion.layoutMode === 'activity_gofood' && currentQuestion.slotConfig ? (
                                    <div className={styles.activityGrid}>
                                        {/* Swimlane Headers (Column 1) */}
                                        <div className={`${styles.activitySwimlaneHeader} ${styles.pelanggan}`}>Pelanggan</div>
                                        <div className={`${styles.activitySwimlaneHeader} ${styles.sistem}`}>Sistem</div>
                                        <div className={`${styles.activitySwimlaneHeader} ${styles.admin}`}>Admin Resto</div>
                                        <div className={`${styles.activitySwimlaneHeader} ${styles.driver}`}>Driver</div>

                                        {/* Slots - placed in columns 2-10 (grid col 2 = data col 1) */}
                                        {currentQuestion.slotConfig.map((config, i) => {
                                            // Parse grid area to determine row (for coloring)
                                            const gridArea = config.gridArea || '1 / 1 / 2 / 2';
                                            const gridRow = parseInt(gridArea.split('/')[0]);
                                            // Adjust column: add 1 to shift right for swimlane header
                                            const parts = gridArea.split('/').map(p => p.trim());
                                            const adjustedGridArea = `${parts[0]} / ${parseInt(parts[1]) + 1} / ${parts[2]} / ${parseInt(parts[3]) + 1}`;

                                            const swimlaneClass =
                                                gridRow === 1 ? styles.pelanggan :
                                                    gridRow === 2 ? styles.sistem :
                                                        gridRow === 3 ? styles.admin : styles.driver;

                                            return (
                                                <div
                                                    key={i}
                                                    style={{ gridArea: adjustedGridArea }}
                                                    className={styles.activitySlotWrapper}
                                                >
                                                    <div className={`${styles.activitySlotLabel} ${swimlaneClass}`}>
                                                        {config.label}
                                                    </div>
                                                    <DropSlot
                                                        item={userSequence[i]}
                                                        index={i}
                                                        onDrop={onDrop}
                                                        onDragOver={onDragOver}
                                                        handleRemove={handleRemove}
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>
                                ) :

                                    /* 5. USER FLOW HORIZONTAL LAYOUT */
                                    currentQuestion.layoutMode === 'userflow_horizontal' ? (
                                        <div className={styles.userFlowGrid}>
                                            {userSequence.map((item, i) => (
                                                <React.Fragment key={i}>
                                                    <DropSlot
                                                        item={item}
                                                        index={i}
                                                        onDrop={onDrop}
                                                        onDragOver={onDragOver}
                                                        handleRemove={handleRemove}
                                                    />
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    ) :

                                        /* 5. USER FLOW BRANCH LAYOUT (with decision branches) */
                                        currentQuestion.layoutMode === 'userflow_branch' && currentQuestion.slotConfig ? (
                                            <div className={styles.userFlowBranchGrid}>
                                                {currentQuestion.slotConfig.map((config, i) => (
                                                    <div
                                                        key={i}
                                                        style={{ gridArea: config.gridArea }}
                                                        className={styles.userFlowSlot}
                                                    >
                                                        <div className={styles.slotLabel}>{config.label}</div>
                                                        <DropSlot
                                                            item={userSequence[i]}
                                                            index={i}
                                                            onDrop={onDrop}
                                                            onDragOver={onDragOver}
                                                            handleRemove={handleRemove}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        ) :

                                            /* 6. DEFAULT LINEAR LAYOUT */
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
                                <div dangerouslySetInnerHTML={{ __html: feedbackData.correctAnswer }} />
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
const DropSlot = ({ item, index, onDrop, onDragOver, handleRemove, isYellowSlot }: any) => {
    return (
        <div
            className={`${styles.dropZone} ${item ? styles.dropZoneFilled : ''} ${isYellowSlot ? styles.yellowDropZone : styles.purpleDropZone}`}
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
