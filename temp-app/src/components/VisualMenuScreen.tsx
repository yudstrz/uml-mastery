import React from 'react';
import { ArrowLeft, PlayCircle } from 'lucide-react';

interface VisualMenuScreenProps {
    onSelect: (scenarioId: string) => void;
    onBack: () => void;
}

export default function VisualMenuScreen({ onSelect, onBack }: VisualMenuScreenProps) {
    return (
        <div className="flex-1 flex flex-col items-center justify-center p-6 bg-slate-50">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-3">Tantangan Visual</h1>
                <p className="text-lg text-slate-600">Pilih topik dan susun diagram berdasarkan skenario nyata.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
                {/* Card 1 */}
                <div
                    onClick={() => onSelect('gofood')}
                    className="bg-white p-8 rounded-3xl border-2 border-transparent shadow-xl hover:border-indigo-600 hover:scale-105 cursor-pointer transition-all group"
                >
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">🍔</div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Go-Food Flow</h3>
                    <p className="text-slate-500 mb-6">Simulasi lengkap proses pesan makanan online dari pelanggan hingga driver.</p>
                    <div className="w-full py-3 bg-indigo-50 text-indigo-700 font-bold rounded-xl flex items-center justify-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <PlayCircle size={20} />
                        Mulai Misi
                    </div>
                </div>

                {/* Card 2 */}
                <div
                    onClick={() => onSelect('atm')}
                    className="bg-white p-8 rounded-3xl border-2 border-transparent shadow-xl hover:border-indigo-600 hover:scale-105 cursor-pointer transition-all group"
                >
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">🏧</div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">ATM System</h3>
                    <p className="text-slate-500 mb-6">Simulasi ragam transaksi perbankan tarik tunai dan cek saldo.</p>
                    <div className="w-full py-3 bg-indigo-50 text-indigo-700 font-bold rounded-xl flex items-center justify-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <PlayCircle size={20} />
                        Mulai Misi
                    </div>
                </div>
            </div>

            <button
                onClick={onBack}
                className="mt-12 flex items-center gap-2 text-slate-500 font-semibold hover:text-indigo-600 transition-colors"
            >
                <ArrowLeft size={20} />
                Kembali ke Knowledge Hub
            </button>
        </div>
    );
}
