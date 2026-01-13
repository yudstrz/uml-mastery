import React from 'react';
import { learningSlides } from '@/data/learning';

interface LearningScreenProps {
    onComplete: () => void;
}

export default function LearningScreen({ onComplete }: LearningScreenProps) {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const slide = learningSlides[currentIndex];

    const nextSlide = () => {
        if (currentIndex < learningSlides.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            onComplete();
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div id="screen-learning" className="app-screen active">
            <div className="slide-card">
                <div id="slide-content-area">
                    <div className="slide-icon">{slide.icon}</div>
                    <div className="slide-title">{slide.title}</div>
                    <div className="slide-content-wrapper" dangerouslySetInnerHTML={{ __html: slide.content }} />
                </div>

                <div className="slide-nav">
                    <button className="btn btn-secondary" onClick={prevSlide} disabled={currentIndex === 0}>
                        Kembali
                    </button>
                    <div style={{ fontWeight: 'bold', color: 'var(--primary)' }}>
                        Materi <span id="slide-count">{currentIndex + 1}/{learningSlides.length}</span>
                    </div>
                    <button className="btn btn-primary" onClick={nextSlide}>
                        {currentIndex === learningSlides.length - 1 ? 'Lanjut ke Kuis' : 'Lanjut'}
                    </button>
                </div>
            </div>
        </div>
    );
}
