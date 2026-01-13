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
            <div className="hub-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div className="hub-title" style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--primary)' }}>Knowledge Hub</div>
                <div className="hub-subtitle" style={{ color: 'var(--secondary)' }}>Kamus Visual Komponen UML</div>
            </div>

            <div className="filter-bar" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
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

            <div className="grid-container" id="knowledge-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
                {filteredComponents.map((item) => (
                    <div key={item.id} className="knowledge-card">
                        <div className="k-icon" style={{ width: '80px', height: '80px', marginBottom: '1rem' }} dangerouslySetInnerHTML={{ __html: item.svg }} />
                        <div className="k-type" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--secondary)', marginBottom: '0.5rem' }}>
                            {item.type}
                        </div>
                        <div className="k-name" style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                            {item.name}
                        </div>
                        <div className="k-desc" style={{ fontSize: '0.9rem', color: 'var(--secondary)' }}>
                            {item.desc}
                        </div>
                    </div>
                ))}
            </div>

            <div className="hub-footer" style={{ textAlign: 'center', marginTop: '3rem', paddingBottom: '3rem' }}>
                <button className="btn btn-primary" style={{ padding: '1rem 3rem' }} onClick={() => onNavigate('visual-menu')}>
                    Lanjut ke Tantangan Visual ⚡
                </button>
            </div>
        </div>
    );
}
