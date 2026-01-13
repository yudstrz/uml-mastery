import React from 'react';

interface HeaderProps {
    activeTab: string;
    onNavigate: (tab: string) => void;
    show: boolean;
}

export default function Header({ activeTab, onNavigate, show }: HeaderProps) {
    if (!show) return null;

    return (
        <header className="header-nav" id="main-header">
            <div className="nav-logo" onClick={() => onNavigate('welcome')}>
                <span>🚀</span> UML Mastery
            </div>
            <nav className="nav-tabs">
                <button
                    className={`nav-tab ${activeTab === 'learning' ? 'active' : ''}`}
                    onClick={() => onNavigate('learning')}
                >
                    📚 <span>Materi</span>
                </button>
                <button
                    className={`nav-tab ${activeTab === 'quiz' ? 'active' : ''}`}
                    onClick={() => onNavigate('quiz')}
                >
                    ✏️ <span>Kuis Teori</span>
                </button>
                <button
                    className={`nav-tab ${activeTab === 'knowledge' ? 'active' : ''}`}
                    onClick={() => onNavigate('knowledge')}
                >
                    🧩 <span>Knowledge Hub</span>
                </button>
                <button
                    className={`nav-tab ${(activeTab === 'visual-menu' || activeTab === 'visual-builder') ? 'active' : ''}`}
                    onClick={() => onNavigate('visual-menu')}
                >
                    🎨 <span>Tantangan Visual</span>
                </button>
            </nav>
        </header>
    );
}
