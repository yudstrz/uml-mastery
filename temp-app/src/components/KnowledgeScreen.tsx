import React, { useState } from 'react';
import { umlComponents, UMLType } from '@/data/uml';

interface KnowledgeScreenProps {
    onNavigate: (screen: string) => void;
}

export default function KnowledgeScreen({ onNavigate }: KnowledgeScreenProps) {
    const [filter, setFilter] = useState<'all' | UMLType>('all');

    const filteredComponents = filter === 'all'
        ? umlComponents
        : umlComponents.filter(c => c.type === filter);

    return (
        <div id="screen-knowledge" className="app-screen active">
            <div className="hub-header">
                <div className="hub-title">Knowledge Hub</div>
                <div className="hub-subtitle">Kamus Visual Komponen UML</div>
            </div>

            <div className="filter-bar">
                <button
                    className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setFilter('all')}
                >
                    Semua
                </button>
                <button
                    className={`btn ${filter === 'usecase' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setFilter('usecase')}
                >
                    Use Case
                </button>
                <button
                    className={`btn ${filter === 'activity' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setFilter('activity')}
                >
                    Activity
                </button>
            </div>

            <div className="grid-container" id="knowledge-grid">
                {filteredComponents.map((item) => (
                    <div key={item.id} className="knowledge-card">
                        <div className="k-icon" dangerouslySetInnerHTML={{ __html: item.svg }} />
                        <div className="k-type">
                            {item.type}
                        </div>
                        <div className="k-name">
                            {item.name}
                        </div>
                        <div className="k-desc">
                            {item.desc}
                        </div>
                    </div>
                ))}
            </div>

            <div className="hub-footer">
                <button className="btn btn-primary" style={{ padding: '1rem 3rem' }} onClick={() => onNavigate('visual-menu')}>
                    Lanjut ke Tantangan Visual ⚡
                </button>
            </div>
        </div>
    );
}
