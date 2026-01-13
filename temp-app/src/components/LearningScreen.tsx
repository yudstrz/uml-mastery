import React, { useState } from 'react';
import { learningSlides } from '../data/learning';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

interface LearningScreenProps {
    onFinish: () => void;
}

export default function LearningScreen({ onFinish }: LearningScreenProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slide = learningSlides[currentSlide];
    const isLast = currentSlide === learningSlides.length - 1;

    const nextSlide = () => {
        if (isLast) {
            onFinish();
        } else {
            setCurrentSlide(curr => curr + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(curr => curr - 1);
        }
    };

    return (
        <div className="flex-1 flex flex-col items-center justify-center p-6 bg-slate-50">
            <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-4xl min-h-[600px] flex flex-col relative transition-all duration-300 border border-slate-100">

                {/* Content Area */}
                <div className="flex-1">
                    <div className="text-6xl mb-6">{slide.icon}</div>
                    <h2 className="text-3xl font-extrabold text-indigo-700 mb-6">{slide.title}</h2>

                    <div
                        className="prose prose-lg max-w-none text-slate-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: slide.content }}
                    />
                </div>

                {/* Navigation Footer */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${currentSlide === 0 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-100 hover:text-indigo-600'}`}
                    >
                        <ChevronLeft size={20} />
                        Kembali
                    </button>

                    <div className="font-bold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-lg">
                        Materi {currentSlide + 1} / {learningSlides.length}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 hover:shadow-indigo-200 hover:-translate-y-0.5 transition-all"
                    >
                        {isLast ? <span>Lanjut Kuis</span> : <span>Lanjut</span>}
                        {isLast ? <CheckCircle size={20} /> : <ChevronRight size={20} />}
                    </button>
                </div>
            </div>
        </div>
    );
}
