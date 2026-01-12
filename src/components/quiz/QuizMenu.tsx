import React from 'react';
import styles from './Quiz.module.css';

interface QuizMenuProps {
    onStartQuiz: (type: 'usecase' | 'activity' | 'userflow') => void;
}

export const QuizMenu: React.FC<QuizMenuProps> = ({ onStartQuiz }) => {
    return (
        <div className={styles.quizMenuContainer}>
            <div className={styles.quizMenuCard} onClick={() => onStartQuiz('usecase')}>
                <span className={styles.menuIcon}>👤</span>
                <div className={styles.menuTitle}>Use Case Diagram</div>
                <div className={styles.menuDesc}>Tantangan akhir: Rekonstruksi diagram sistem Go Food.</div>
                <button className={styles.btnCheck}>Mulai Kuis</button>
            </div>

            <div className={styles.quizMenuCard} onClick={() => onStartQuiz('activity')}>
                <span className={styles.menuIcon}>⚡</span>
                <div className={styles.menuTitle}>Activity Diagram</div>
                <div className={styles.menuDesc}>Tantangan akhir: Alur pemesanan makanan via Go Food.</div>
                <button className={styles.btnCheck}>Mulai Kuis</button>
            </div>

            <div className={styles.quizMenuCard} onClick={() => onStartQuiz('userflow')}>
                <span className={styles.menuIcon}>🎯</span>
                <div className={styles.menuTitle}>User Flow</div>
                <div className={styles.menuDesc}>3 Alur: Masuk aplikasi, mencari makanan, dan memesan.</div>
                <button className={styles.btnCheck}>Mulai Kuis</button>
            </div>
        </div>
    );
};
