import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
    activeTab: 'knowledge' | 'quiz' | 'builder';
    onTabChange: (tab: 'knowledge' | 'quiz' | 'builder') => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.logo}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    UML Mastery <span className={styles.logoSubtitle}>Ultimate</span>
                </div>
                <nav className={styles.nav}>
                    <button
                        className={`${styles.navButton} ${activeTab === 'knowledge' ? styles.active : ''}`}
                        onClick={() => onTabChange('knowledge')}
                    >
                        Knowledge Hub
                    </button>
                    <button
                        className={`${styles.navButton} ${activeTab === 'quiz' ? styles.active : ''}`}
                        onClick={() => onTabChange('quiz')}
                    >
                        Visual Quiz
                    </button>
                    <button
                        className={`${styles.navButton} ${activeTab === 'builder' ? styles.active : ''}`}
                        onClick={() => onTabChange('builder')}
                    >
                        UML Builder
                    </button>
                </nav>
            </div>
        </header>
    );
};
