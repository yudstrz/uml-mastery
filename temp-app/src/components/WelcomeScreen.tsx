import React from 'react';

interface WelcomeScreenProps {
    onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
    return (
        <div id="screen-welcome" className="app-screen active">
            <div className="hero-icon">🚀</div>
            <h1 className="hero-title">UML Mastery</h1>
            <p className="hero-subtitle">
                Platform belajar interaktif untuk Siswa SMK.<br />
                Pahami Proses Bisnis, Kuasai UML, dan Bangun Diagrammu sendiri.
            </p>
            <button className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }} onClick={onStart}>
                Mulai Petualangan Belajar
            </button>
        </div>
    );
}
