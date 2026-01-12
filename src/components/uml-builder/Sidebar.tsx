"use client";
import React from 'react';
import styles from './UmlBuilder.module.css';
import { ElementType } from '../../types/uml-builder';
import {
    Square,
    Circle,
    User,
    StickyNote,
    Play,
    SquareDashed,
    Settings,
    MousePointer2,
    Columns,
    CircleDot,
    Spline,
    Diamond,
    Minus
} from 'lucide-react';

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
                    <div className={styles.componentIconPreview}><StickyNote size={20} /></div>
                    <span>Note</span>
                </div>

                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'process')}>
                    <div className={styles.componentIconPreview}><Square size={20} /></div>
                    <span>Class / Process</span>
                </div>

                <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#94a3b8', margin: '16px 0 8px', textTransform: 'uppercase' }}>Use Case</div>
                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'actor')}>
                    <div className={styles.componentIconPreview}><User size={20} /></div>
                    <span>Actor</span>
                </div>

                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'usecase')}>
                    <div className={styles.componentIconPreview} style={{ borderRadius: '50%' }}><Circle size={20} /></div>
                    <span>Use Case</span>
                </div>

                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'boundary')}>
                    <div className={styles.componentIconPreview}><SquareDashed size={20} /></div>
                    <span>System Boundary</span>
                </div>

                <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#94a3b8', margin: '16px 0 8px', textTransform: 'uppercase' }}>Activity / Flow</div>
                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'start')}>
                    <div className={styles.componentIconPreview} style={{ background: 'black', borderRadius: '50%', border: 'none' }}>
                        <Circle size={10} fill="white" stroke="none" />
                    </div>
                    <span>Start Node</span>
                </div>

                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'action')}>
                    <div className={styles.componentIconPreview} style={{ borderRadius: '8px' }}>
                        <Square size={20} style={{ borderRadius: '6px' }} />
                    </div>
                    <span>Action / Activity</span>
                </div>

                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'decision')}>
                    <div className={styles.componentIconPreview}>
                        <Diamond size={20} />
                    </div>
                    <span>Decision</span>
                </div>

                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'fork')}>
                    <div className={styles.componentIconPreview}>
                        <Minus size={20} strokeWidth={4} />
                    </div>
                    <span>Fork / Join</span>
                </div>

                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'swimlane')}>
                    <div className={styles.componentIconPreview}><Columns size={20} /></div>
                    <span>Swimlane</span>
                </div>

                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'end')}>
                    <div className={styles.componentIconPreview} style={{ borderRadius: '50%', border: '2px solid black' }}>
                        <CircleDot size={20} color="black" />
                    </div>
                    <span>End Node</span>
                </div>

            </div>
        </aside>
    );
}
