import React, { useState } from 'react';
import { umlComponents, UMLType } from '../data/uml';
import { Sparkles, Filter } from 'lucide-react';

interface KnowledgeScreenProps {
    onNext: () => void;
}

export default function KnowledgeScreen({ onNext }: KnowledgeScreenProps) {
    const [filter, setFilter] = useState<'all' | UMLType>('all');

    const filteredItems = filter === 'all'
        ? umlComponents
        : umlComponents.filter(c => c.type === filter);

    return (
        <div className="flex-1 flex flex-col p-6 bg-slate-50 overflow-y-auto">
            <div className="max-w-6xl mx-auto w-full pb-24">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Knowledge Hub</h2>
                    <p className="text-slate-500">Kamus Visual Komponen UML</p>
                </div>

                <div className="flex justify-center gap-2 mb-8 flex-wrap">
                    <div className="flex items-center gap-2 bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
                        <Filter size={16} className="text-slate-400 ml-2" />
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${filter === 'all' ? 'bg-indigo-600 text-white shadow' : 'text-slate-600 hover:bg-slate-50'}`}
                        >
                            Semua
                        </button>
                        <button
                            onClick={() => setFilter('usecase')}
                            className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${filter === 'usecase' ? 'bg-indigo-600 text-white shadow' : 'text-slate-600 hover:bg-slate-50'}`}
                        >
                            Use Case
                        </button>
                        <button
                            onClick={() => setFilter('activity')}
                            className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${filter === 'activity' ? 'bg-indigo-600 text-white shadow' : 'text-slate-600 hover:bg-slate-50'}`}
                        >
                            Activity
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 hover:-translate-y-1 transition-all group flex flex-col items-center text-center backdrop-blur-sm"
                        >
                            <div
                                className="h-16 w-16 mb-4 text-indigo-600 group-hover:scale-110 transition-transform duration-300"
                                dangerouslySetInnerHTML={{ __html: item.svg }}
                            />
                            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{item.type}</div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">{item.name}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-200 p-4 flex justify-center shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                <button
                    onClick={onNext}
                    className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 hover:shadow-indigo-200 transition-all hover:scale-105"
                >
                    <span>Lanjut ke Tantangan Visual</span>
                    <Sparkles size={20} />
                </button>
            </div>
        </div>
    );
}
