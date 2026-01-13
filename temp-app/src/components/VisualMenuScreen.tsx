import React from 'react';

interface VisualMenuScreenProps {
    onStartBuilder: (templateId: string) => void;
    onBack: () => void;
}

export default function VisualMenuScreen({ onStartBuilder, onBack }: VisualMenuScreenProps) {
    return (
        <div id="screen-visual-menu" className="app-screen active">
            <div className="hub-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 className="hub-title" style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.5rem' }}>
                    Tantangan Visual
                </h1>
                <p className="hub-subtitle" style={{ fontSize: '1.1rem', color: 'var(--secondary)' }}>
                    Pilih topik dan susun diagram berdasarkan skenario nyata.
                </p>
            </div>

            <div className="menu-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                {/* GO FOOD */}
                <div className="menu-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: 'var(--shadow)', border: '1px solid var(--border)', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => onStartBuilder('gofood')}>
                    <span className="menu-icon" style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🍔</span>
                    <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: 'bold' }}>Go-Food Flow</h3>
                    <p style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }}>Simulasi pesan makanan online.</p>
                    <button className="btn btn-primary" style={{ width: '100%' }}>Mulai Misi</button>
                </div>

                {/* ATM SYSTEM */}
                <div className="menu-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: 'var(--shadow)', border: '1px solid var(--border)', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => onStartBuilder('atm')}>
                    <span className="menu-icon" style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🏧</span>
                    <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: 'bold' }}>ATM System</h3>
                    <p style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }}>Simulasi tarik tunai & cek saldo.</p>
                    <button className="btn btn-primary" style={{ width: '100%' }}>Mulai Misi</button>
                </div>
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <button className="btn btn-ghost" onClick={onBack}>
                    ← Kembali ke Knowledge Hub
                </button>
            </div>
        </div>
    );
}
