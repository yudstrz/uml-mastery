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

                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'process')}>
                    <div className={styles.componentIconPreview}><i className="far fa-square"></i></div>
                    <span>Process / Class</span>
                </div>

                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'usecase')}>
                    <div className={styles.componentIconPreview} style={{ borderRadius: '50%' }}><i className="far fa-circle"></i></div>
                    <span>Use Case</span>
                </div>

                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'actor')}>
                    <div className={styles.componentIconPreview}><i className="fas fa-user"></i></div>
                    <span>Actor</span>
                </div>

                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'note')}>
                    <div className={styles.componentIconPreview}><i className="far fa-sticky-note"></i></div>
                    <span>Note</span>
                </div>

                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'start')}>
                    <div className={styles.componentIconPreview} style={{ background: 'black', borderRadius: '50%' }}></div>
                    <span>Start Node</span>
                </div>

                <div className={styles.componentItem} draggable onDragStart={(e) => handleDragStart(e, 'end')}>
                    <div className={styles.componentIconPreview} style={{ borderRadius: '50%', border: '3px solid black' }}></div>
                    <span>End Node</span>
                </div>

            </div>
        </aside>
    );
}
