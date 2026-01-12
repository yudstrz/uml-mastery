"use client";
import React from 'react';
import styles from './UmlBuilder.module.css';
import { useUml } from './UmlContext';

export default function Toolbar() {
    const { clearBoard, saveToLocal } = useUml();

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <div className={styles.logoIcon}><i className="fas fa-project-diagram"></i></div>
                UML Builder
            </div>
            <div className={styles.toolbar}>
                <button className={styles.toolbarBtn} onClick={clearBoard}>
                    <i className="fas fa-file"></i> New
                </button>
                <button className={styles.toolbarBtn} onClick={saveToLocal}>
                    <i className="fas fa-save"></i> Save
                </button>
                <button className={styles.toolbarBtn} onClick={() => alert('Export Image coming soon!')}>
                    <i className="fas fa-image"></i> Export PNG
                </button>
                <button className={`${styles.toolbarBtn} ${styles.primary}`} onClick={() => alert('Feature coming soon')}>
                    <i className="fas fa-share-alt"></i> Share
                </button>
            </div>
        </header>
    );
}
