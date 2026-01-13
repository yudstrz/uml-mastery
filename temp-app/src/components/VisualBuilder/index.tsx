import React, { useState, useEffect } from 'react';
import { BuilderData, builderTemplates, Relation } from '../../data/visual';
import DiagramCanvas from './DiagramCanvas';
import { Save, ArrowLeft, ArrowRight, User, Settings, Check, Layout, Plus, X } from 'lucide-react';

interface VisualBuilderProps {
    scenarioId: string;
    onBack: () => void;
}

export default function VisualBuilder({ scenarioId, onBack }: VisualBuilderProps) {
    const template = builderTemplates[scenarioId];
    const [step, setStep] = useState(1);
    const [view, setView] = useState<'usecase' | 'activity'>('usecase');

    // Editor State
    const [actors, setActors] = useState<string[]>([]);
    const [usecases, setUsecases] = useState<string[]>([]);
    const [mappings, setMappings] = useState<Record<number, number[]>>({});
    const [relations, setRelations] = useState<Relation[]>([]);

    useEffect(() => {
        if (template) {
            setActors([...template.actors]);
            setUsecases([...template.usecases]);
            setMappings(JSON.parse(JSON.stringify(template.mappings)));
            setRelations(JSON.parse(JSON.stringify(template.relations)));
        }
    }, [template]);

    const builderData: BuilderData = { actors, usecases, mappings, relations };

    const handleAddItem = (type: 'actors' | 'usecases') => {
        if (type === 'actors') setActors([...actors, 'New Actor']);
        else setUsecases([...usecases, 'New Process']);
    };

    const handleRemoveItem = (type: 'actors' | 'usecases', idx: number) => {
        if (type === 'actors') {
            const newArr = [...actors];
            newArr.splice(idx, 1);
            setActors(newArr);
        } else {
            const newArr = [...usecases];
            newArr.splice(idx, 1);
            setUsecases(newArr);
        }
    };

    const handleUpdateItem = (type: 'actors' | 'usecases', idx: number, val: string) => {
        if (type === 'actors') {
            const newArr = [...actors];
            newArr[idx] = val;
            setActors(newArr);
        } else {
            const newArr = [...usecases];
            newArr[idx] = val;
            setUsecases(newArr);
        }
    };

    const toggleMapping = (aIdx: number, uIdx: number) => {
        const newMap = { ...mappings };
        if (!newMap[aIdx]) newMap[aIdx] = [];

        const existingIdx = newMap[aIdx].indexOf(uIdx);
        if (existingIdx === -1) newMap[aIdx].push(uIdx);
        else newMap[aIdx].splice(existingIdx, 1);

        setMappings(newMap);
    };

    // Relation logic for step 2
    const addRelation = () => setRelations([...relations, { source: 0, target: 1, type: 'include' }]);
    const updateRelation = (idx: number, field: keyof Relation, val: any) => {
        const newRels = [...relations];
        newRels[idx] = { ...newRels[idx], [field]: val };
        setRelations(newRels);
    };
    const removeRelation = (idx: number) => {
        const newRels = [...relations];
        newRels.splice(idx, 1);
        setRelations(newRels);
    };

    const downloadJSON = () => {
        const blob = new Blob([JSON.stringify(builderData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `uml-data-${scenarioId}.json`;
        a.click();
    };

    if (!template) return <div>Template not found</div>;

    return (
        <div className="flex-1 flex flex-col h-full bg-slate-50 overflow-hidden">
            {/* Wizard Header */}
            <div className="bg-white px-6 py-4 border-b border-slate-200 shadow-sm z-10">
                <div className="flex justify-center mb-4">
                    <div className="flex items-center gap-4 bg-slate-100 p-1 rounded-full">
                        {[1, 2, 3].map(s => (
                            <div
                                key={s}
                                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold transition-all ${step === s ? 'bg-indigo-600 text-white shadow' :
                                        step > s ? 'bg-emerald-500 text-white' : 'text-slate-400'
                                    }`}
                            >
                                <span className={`flex items-center justify-center w-5 h-5 rounded-full text-xs ${step === s ? 'bg-white/20' : step > s ? 'bg-white/20' : 'bg-slate-300 text-white'}`}>
                                    {step > s ? <Check size={12} /> : s}
                                </span>
                                {s === 1 ? 'Aktor' : s === 2 ? 'Proses & Link' : 'Hasil'}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-bold text-slate-800">
                        {step === 1 ? 'Siapa saja yang terlibat?' : step === 2 ? 'Apa saja kegiatannya?' : 'Diagrammu Siap!'}
                    </h2>
                    <p className="text-sm text-slate-500">
                        {step === 1 ? 'Sebutkan aktor (orang atau sistem eksternal)' : step === 2 ? 'Isi nama kegiatan dan hubungkan dengan aktor' : 'Review dan simpan hasil kerjamu'}
                    </p>
                </div>
            </div>

            {/* Main Content Split */}
            <div className="flex-1 flex overflow-hidden">
                {/* Left: Form Area */}
                {step < 3 && (
                    <div className="w-1/3 min-w-[320px] bg-white border-r border-slate-200 p-6 overflow-y-auto">
                        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3 mb-6 flex items-start gap-3">
                            <div className="bg-indigo-200 p-1 rounded text-indigo-700 mt-0.5">💡</div>
                            <p className="text-xs text-indigo-800 leading-relaxed">
                                {step === 1 ? 'Tambahkan semua pihak yang terlibat dalam sistem ini.' : 'Tulis kegiatan, lalu KLIK nama aktor di bawahnya untuk menghubungkan.'}
                            </p>
                        </div>

                        {step === 1 && (
                            <div className="space-y-3">
                                {actors.map((actor, idx) => (
                                    <div key={idx} className="flex gap-2 items-center bg-slate-50 p-2 rounded border border-slate-200">
                                        <span className="font-bold text-indigo-500 w-6">{idx + 1}</span>
                                        <input
                                            value={actor}
                                            onChange={(e) => handleUpdateItem('actors', idx, e.target.value)}
                                            className="flex-1 bg-white border border-slate-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-indigo-500"
                                        />
                                        <button onClick={() => handleRemoveItem('actors', idx)} className="text-red-400 hover:text-red-600">
                                            <X size={18} />
                                        </button>
                                    </div>
                                ))}
                                <button onClick={() => handleAddItem('actors')} className="w-full py-2 border-2 border-dashed border-indigo-200 text-indigo-600 font-bold rounded-lg hover:bg-indigo-50 transition-colors flex justify-center items-center gap-2 text-sm mt-2">
                                    <Plus size={16} /> Tambah Aktor
                                </button>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    {usecases.map((uc, uIdx) => (
                                        <div key={uIdx} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                                            <div className="flex gap-2 items-center mb-3">
                                                <span className="font-bold text-indigo-500 w-6">{uIdx + 1}</span>
                                                <input
                                                    value={uc}
                                                    onChange={(e) => handleUpdateItem('usecases', uIdx, e.target.value)}
                                                    className="flex-1 bg-slate-50 border border-slate-300 rounded px-2 py-1 text-sm font-semibold focus:outline-none focus:border-indigo-500"
                                                />
                                                <button onClick={() => handleRemoveItem('usecases', uIdx)} className="text-red-400 hover:text-red-600">
                                                    <X size={18} />
                                                </button>
                                            </div>
                                            <div className="flex flex-wrap gap-2 pl-6">
                                                {actors.map((actor, aIdx) => {
                                                    const isActive = (mappings[aIdx] || []).includes(uIdx);
                                                    return (
                                                        <button
                                                            key={aIdx}
                                                            onClick={() => toggleMapping(aIdx, uIdx)}
                                                            className={`text-xs px-2 py-1 rounded-full border transition-all ${isActive ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-500 border-slate-200 hover:border-indigo-300'}`}
                                                        >
                                                            {isActive ? '✓' : '+'} {actor}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                    <button onClick={() => handleAddItem('usecases')} className="w-full py-2 border-2 border-dashed border-indigo-200 text-indigo-600 font-bold rounded-lg hover:bg-indigo-50 transition-colors flex justify-center items-center gap-2 text-sm mt-2">
                                        <Plus size={16} /> Tambah Kegiatan
                                    </button>
                                </div>

                                <div className="border-t border-slate-200 pt-4">
                                    <h3 className="text-sm font-bold text-slate-700 mb-2">Relasi Lanjutan</h3>
                                    {relations.map((rel, rIdx) => (
                                        <div key={rIdx} className="flex gap-1 items-center bg-slate-50 p-2 rounded mb-2 text-xs">
                                            <select
                                                className="flex-1 bg-white border border-slate-200 rounded p-1"
                                                value={rel.source}
                                                onChange={(e) => updateRelation(rIdx, 'source', parseInt(e.target.value))}
                                            >
                                                {usecases.map((u, i) => <option key={i} value={i}>{u}</option>)}
                                            </select>
                                            <select
                                                className="w-20 bg-white border border-slate-200 rounded p-1 font-mono text-indigo-600"
                                                value={rel.type}
                                                onChange={(e) => updateRelation(rIdx, 'type', e.target.value)}
                                            >
                                                <option value="include">INC</option>
                                                <option value="extend">EXT</option>
                                            </select>
                                            <select
                                                className="flex-1 bg-white border border-slate-200 rounded p-1"
                                                value={rel.target}
                                                onChange={(e) => updateRelation(rIdx, 'target', parseInt(e.target.value))}
                                            >
                                                {usecases.map((u, i) => <option key={i} value={i}>{u}</option>)}
                                            </select>
                                            <button onClick={() => removeRelation(rIdx)} className="text-red-400">
                                                <X size={14} />
                                            </button>
                                        </div>
                                    ))}
                                    <button onClick={addRelation} className="text-xs text-indigo-600 font-bold hover:underline">+ Tambah Relasi</button>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Right: Preview Area */}
                <div className="flex-1 flex flex-col bg-slate-100 relative">
                    {/* View Controls (Step 3) */}
                    {step === 3 && (
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-white p-1.5 rounded-xl text-sm font-bold shadow-lg flex gap-1 border border-slate-200">
                            <button
                                onClick={() => setView('usecase')}
                                className={`px-4 py-1.5 rounded-lg transition-all flex items-center gap-2 ${view === 'usecase' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
                            >
                                <User size={14} /> Use Case
                            </button>
                            <button
                                onClick={() => setView('activity')}
                                className={`px-4 py-1.5 rounded-lg transition-all flex items-center gap-2 ${view === 'activity' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
                            >
                                <Layout size={14} /> Activity
                            </button>
                        </div>
                    )}

                    <div className="flex-1 p-8 overflow-auto flex items-center justify-center">
                        <DiagramCanvas data={builderData} view={step === 3 ? view : 'usecase'} templateName={template.title} />
                    </div>
                </div>
            </div>

            {/* Footer Actions */}
            <div className="bg-white p-4 border-t border-slate-200 flex justify-between items-center z-20">
                <div className="flex gap-2">
                    {step === 3 && (
                        <button
                            onClick={() => setStep(2)}
                            className="btn-secondary px-6 py-2 rounded-lg border border-slate-200 font-semibold text-slate-600 hover:bg-slate-50"
                        >
                            <Settings size={18} className="inline mr-2" />
                            Edit Lagi
                        </button>
                    )}
                    {step < 3 && (
                        <button
                            onClick={step > 1 ? () => setStep(step - 1) : onBack}
                            className="px-6 py-2 rounded-lg font-semibold text-slate-500 hover:bg-slate-100 flex items-center gap-2"
                        >
                            <ArrowLeft size={18} />
                            {step === 1 ? 'Kembali Menu' : 'Sebelumnya'}
                        </button>
                    )}
                </div>

                <div className="flex gap-2">
                    {step === 3 ? (
                        <>
                            <button
                                onClick={downloadJSON}
                                className="px-6 py-2 bg-slate-800 text-white rounded-lg font-bold hover:bg-slate-900 flex items-center gap-2"
                            >
                                <Save size={18} /> Simpan JSON
                            </button>
                            <button
                                onClick={onBack}
                                className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 flex items-center gap-2"
                            >
                                Selesai <Check size={18} />
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => setStep(step + 1)}
                            className="px-8 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 flex items-center gap-2 shadow-lg hover:shadow-indigo-200"
                        >
                            Lanjut <ArrowRight size={18} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
