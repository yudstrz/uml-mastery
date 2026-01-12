"use client";
import React, { useEffect } from 'react';
import { UmlProvider, useUml } from './UmlContext';
import styles from './UmlBuilder.module.css';
import Toolbar from './Toolbar';
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import PropertiesPanel from './PropertiesPanel';

const UmlShortcuts = () => {
    const { deleteSelected, setTool } = useUml();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Avoid triggering shortcuts if typing in input
            if ((e.target as HTMLElement).tagName === 'INPUT' || (e.target as HTMLElement).tagName === 'TEXTAREA') return;

            if (e.key === 'Delete') deleteSelected();
            if (e.key.toLowerCase() === 'v') setTool('select');
            if (e.key.toLowerCase() === 'c') setTool('connect');
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [deleteSelected, setTool]);

    return null;
}

const UmlBuilderContent = () => {
    return (
        <div className={styles.container}>
            <UmlShortcuts />
            <Toolbar />
            <div className={styles.mainContainer}>
                <Sidebar />
                <Canvas />
                <PropertiesPanel />
            </div>
        </div>
    );
};

export default function UmlBuilder() {
    return (
        <UmlProvider>
            <UmlBuilderContent />
        </UmlProvider>
    );
};
