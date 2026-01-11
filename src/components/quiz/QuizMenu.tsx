import React from 'react';
import styles from './Quiz.module.css';

interface QuizMenuProps {
    onStartQuiz: (type: 'usecase' | 'activity') => void;
}

export const QuizMenu: React.FC<QuizMenuProps> = ({ onStartQuiz }) => {
    return (
        <div className={styles.quizMenuContainer}>
            <div className={styles.quizMenuCard} onClick={() => onStartQuiz('usecase')}>
                <span className={styles.menuIcon}>👤</span>
                <div className={styles.menuTitle}>Use Case Diagram</div>
                <div className={styles.menuDesc}>10 Soal tentang aktor, relasi, dan batasan sistem.</div>
                <button className={styles.btnCheck}>Mulai Kuis</button>
            </div>

            <div className={styles.quizMenuCard} onClick={() => onStartQuiz('activity')}>
                <span className={styles.menuIcon}>⚡</span>
                <div className={styles.menuTitle}>Activity Diagram</div>
                <div className={styles.menuDesc}>10 Soal tentang alur proses bisnis (BPMN style).</div>
                <button className={styles.btnCheck}>Mulai Kuis</button>
            </div>
        </div>
    );
};
