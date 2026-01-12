"use client";
import React from 'react';
import styles from './UmlBuilder.module.css';
import { ElementType } from '../../types/uml-builder';

export default function Sidebar() {
    const handleDragStart = (e: React.DragEvent, type: ElementType) => {
        e.dataTransfer.setData('type', type);
    };

    return (
        <aside className={styles.sidebarLeft}>
            <div className={styles.sidebarHeader}>Components</div>
            <div className={styles.componentsPanel}>

                <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#94a3b8', marginBottom: '8px', textTransform: 'uppercase' }}>Common</div>
                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'note')}>
                    <div className={styles.componentIconPreview}><i className="far fa-sticky-note"></i></div>
                    <span>Note</span>
                </div>

                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'process')}>
                    <div className={styles.componentIconPreview}><i className="far fa-square"></i></div>
                    <span>Class / Process</span>
                </div>

                <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#94a3b8', margin: '16px 0 8px', textTransform: 'uppercase' }}>Use Case</div>
                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'actor')}>
                    <div className={styles.componentIconPreview}><i className="fas fa-user"></i></div>
                    <span>Actor</span>
                </div>

                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'usecase')}>
                    <div className={styles.componentIconPreview} style={{ borderRadius: '50%' }}><i className="far fa-circle"></i></div>
                    <span>Use Case</span>
                </div>

                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'boundary')}>
                    <div className={styles.componentIconPreview}><i className="far fa-square"></i></div>
                    <span>System Boundary</span>
                </div>

                <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#94a3b8', margin: '16px 0 8px', textTransform: 'uppercase' }}>Activity / Flow</div>
                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'start')}>
                    <div className={styles.componentIconPreview} style={{ background: 'black', borderRadius: '50%' }}></div>
                    <span>Start Node</span>
                </div>

                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'action')}>
                    <div className={styles.componentIconPreview} style={{ borderRadius: '12px', border: '2px solid #cbd5e1' }}></div>
                    <span>Action / Activity</span>
                </div>

                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'decision')}>
                    <div className={styles.componentIconPreview} style={{ transform: 'rotate(45deg)', width: '20px', height: '20px', margin: '0 6px' }}></div>
                    <span>Decision</span>
                </div>

                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'fork')}>
                    <div className={styles.componentIconPreview}><div style={{ width: '80%', height: '4px', background: 'black' }}></div></div>
                    <span>Fork / Join</span>
                </div>

                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'swimlane')}>
                    <div className={styles.componentIconPreview}><i className="fas fa-columns"></i></div>
                    <span>Swimlane</span>
                </div>

                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'end')}>
                    <div className={styles.componentIconPreview} style={{ borderRadius: '50%', border: '3px solid black', width: '24px', height: '24px', background: 'transparent', boxSizing: 'border-box' }}>
                        <div style={{ width: '12px', height: '12px', background: 'black', borderRadius: '50%' }}></div>
                    </div>
                    <span>End Node</span>
                </div>

            </div>
        </aside>
    );
}
