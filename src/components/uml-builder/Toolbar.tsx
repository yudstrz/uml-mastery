"use client";
import React from 'react';
import styles from './UmlBuilder.module.css';
import { useUml } from './UmlContext';
import { FilePlus, Save, Image, Share2, Network } from 'lucide-react';

export default function Toolbar() {
    const { clearBoard, saveToLocal } = useUml();

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <div className={styles.logoIcon}><Network size={20} /></div>
                UML Builder
            </div>
            <div className={styles.toolbar}>
                <button className={styles.toolbarBtn} onClick={clearBoard}>
                    <FilePlus size={16} /> New
                </button>
                <button className={styles.toolbarBtn} onClick={saveToLocal}>
                    <Save size={16} /> Save
                </button>
                <button className={styles.toolbarBtn} onClick={() => alert('Export Image coming soon!')}>
                    <Image size={16} /> Export PNG
                </button>
                <button className={`${styles.toolbarBtn} ${styles.primary}`} onClick={() => alert('Feature coming soon')}>
                    <Share2 size={16} /> Share
                </button>
            </div>
        </header>
    );
}
