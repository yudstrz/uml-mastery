import React, { useState } from 'react';
import { theoryQuestions } from '../data/quiz';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

interface QuizScreenProps {
    onFinish: () => void;
}

export default function QuizScreen({ onFinish }: QuizScreenProps) {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);

    const question = theoryQuestions[currentIdx];
    const isLast = currentIdx === theoryQuestions.length - 1;

    const handleAnswer = (idx: number) => {
        if (isAnswered) return;
        setSelectedOpt(idx);
        setIsAnswered(true);
        if (idx === question.correct) {
            setScore(s => s + 1);
        }
    };

    const nextQuestion = () => {
        if (isLast) {
            onFinish();
        } else {
            setCurrentIdx(c => c + 1);
            setSelectedOpt(null);
            setIsAnswered(false);
        }
    };

    return (
        <div className="flex-1 flex flex-col items-center justify-center p-6 bg-slate-50">
            <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-2xl border border-slate-100">
                <div className="flex justify-between items-center mb-6">
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Kuis Teori</span>
                    <span className="text-slate-400 font-semibold text-sm">Soal {currentIdx + 1}/{theoryQuestions.length}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-8 leading-tight">
                    {question.q}
                </h3>

                <div className="space-y-3">
                    {question.opts.map((opt, idx) => {
                        let stateClass = "border-slate-200 hover:border-indigo-400 hover:bg-slate-50";
                        if (isAnswered) {
                            if (idx === question.correct) {
                                stateClass = "bg-emerald-50 border-emerald-500 text-emerald-800";
                            } else if (idx === selectedOpt) {
                                stateClass = "bg-red-50 border-red-500 text-red-800";
                            } else {
                                stateClass = "border-slate-200 opacity-50";
                            }
                        }

                        return (
                            <button
                                key={idx}
                                disabled={isAnswered}
                                onClick={() => handleAnswer(idx)}
                                className={`w-full text-left p-4 rounded-xl border-2 font-medium transition-all duration-200 flex justify-between items-center ${stateClass}`}
                            >
                                <span>{opt}</span>
                                {isAnswered && idx === question.correct && <CheckCircle size={20} className="text-emerald-600" />}
                                {isAnswered && idx === selectedOpt && idx !== question.correct && <XCircle size={20} className="text-red-500" />}
                            </button>
                        );
                    })}
                </div>

                {isAnswered && (
                    <div className="mt-8 bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg animate-in slide-in-from-top-2 fade-in duration-300">
                        <div className="font-bold text-indigo-900 mb-1">Penjelasan:</div>
                        <p className="text-indigo-800 text-sm">{question.exp}</p>
                        <div className="mt-4 text-right">
                            <button
                                onClick={nextQuestion}
                                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-lg font-bold shadow-md hover:bg-indigo-700 transition-colors"
                            >
                                {isLast ? "Selesai" : "Lanjut"} <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
