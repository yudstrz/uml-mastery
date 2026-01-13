import React from 'react';
import { Rocket } from 'lucide-react';

interface WelcomeScreenProps {
    onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
    return (
        <div className="flex-1 flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-600 to-indigo-900 text-white p-8">
            <div className="animate-bounce mb-6">
                <Rocket size={80} strokeWidth={1.5} />
            </div>
            <h1 className="text-5xl font-extrabold mb-4 tracking-tight">UML Mastery</h1>
            <p className="text-xl opacity-90 max-w-2xl mb-8 leading-relaxed">
                Platform belajar interaktif untuk Siswa SMK.<br />
                Pahami Proses Bisnis, Kuasai UML, dan Bangun Diagrammu sendiri.
            </p>
            <button
                onClick={onStart}
                className="px-8 py-4 bg-white text-indigo-700 font-bold rounded-full text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform flex items-center gap-2"
            >
                <span>Mulai Petualangan Belajar</span>
                <span>🚀</span>
            </button>
        </div>
    );
}
