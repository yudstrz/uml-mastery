import React from 'react';
import { BookOpen, HelpCircle, LayoutGrid, Palette, Rocket } from 'lucide-react';

interface HeaderProps {
    activeTab: string;
    onNavigate: (tab: string) => void;
    show: boolean;
}

export default function Header({ activeTab, onNavigate, show }: HeaderProps) {
    if (!show) return null;

    const navItems = [
        { id: 'learning', label: 'Materi', icon: <BookOpen size={18} /> },
        { id: 'quiz', label: 'Kuis Teori', icon: <HelpCircle size={18} /> },
        { id: 'knowledge', label: 'Knowledge Hub', icon: <LayoutGrid size={18} /> },
        { id: 'visual-menu', label: 'Tantangan Visual', icon: <Palette size={18} /> },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-indigo-100 px-8 py-3 flex justify-between items-center shadow-sm">
            <div
                className="text-xl font-extrabold text-indigo-600 flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => onNavigate('welcome')}
            >
                <Rocket className="text-indigo-600" />
                <span>UML Mastery</span>
            </div>
            <nav className="flex gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        className={`
                            px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 transition-all duration-200
                            ${activeTab === item.id
                                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                                : 'text-slate-500 hover:text-indigo-600 hover:bg-white'}
                        `}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </button>
                ))}
            </nav>
        </header>
    );
}
