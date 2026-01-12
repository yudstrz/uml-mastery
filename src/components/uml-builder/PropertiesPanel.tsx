"use client";
import React from 'react';
import styles from './UmlBuilder.module.css';
import { useUml } from './UmlContext';

export default function PropertiesPanel() {
    const { selectedId, elements, updateElement, deleteSelected } = useUml();

    const selectedElement = elements.find(el => el.id === selectedId);

    if (!selectedElement) {
        return (
            <aside className={styles.sidebarRight}>
                <div className={styles.sidebarHeader}>Properties</div>
                <div className={styles.propertiesContent}>
                    <div className={styles.noSelectionMsg}>
                        Select an element to edit properties
                    </div>
                </div>
            </aside>
        );
    }

    return (
        <aside className={`${styles.sidebarRight} ${styles.active}`}>
            <div className={styles.sidebarHeader}>Properties</div>
            <div className={styles.propertiesContent}>

                <div className={styles.formGroup}>
                    <label>Label Text</label>
                    <input
                        type="text"
                        className={styles.formInput}
                        value={selectedElement.text}
                        onChange={(e) => updateElement(selectedId!, { text: e.target.value })}
                    />
                </div>

                {selectedElement.type !== 'actor' && selectedElement.type !== 'start' && selectedElement.type !== 'end' && (
                    <div className={styles.formGroup}>
                        <label>Background Color</label>
                        <input
                            type="color"
                            className={styles.formInput}
                            style={{ height: '40px' }}
                            value={selectedElement.bgColor}
                            onChange={(e) => updateElement(selectedId!, { bgColor: e.target.value })}
                        />
                    </div>
                )}

                <div className={styles.formGroup}>
                    <label>Font Size (px)</label>
                    <input
                        type="number"
                        min="10"
                        max="48"
                        className={styles.formInput}
                        value={selectedElement.fontSize}
                        onChange={(e) => updateElement(selectedId!, { fontSize: parseInt(e.target.value) || 14 })}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Width (px)</label>
                    <input
                        type="number"
                        min="20"
                        className={styles.formInput}
                        value={selectedElement.width}
                        onChange={(e) => updateElement(selectedId!, { width: parseInt(e.target.value) || 100 })}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Height (px)</label>
                    <input
                        type="number"
                        min="20"
                        className={styles.formInput}
                        value={selectedElement.height}
                        onChange={(e) => updateElement(selectedId!, { height: parseInt(e.target.value) || 100 })}
                    />
                </div>

                <button className={styles.deleteBtn} onClick={deleteSelected}>
                    Delete Element
                </button>
            </div>
        </aside>
    );
}
