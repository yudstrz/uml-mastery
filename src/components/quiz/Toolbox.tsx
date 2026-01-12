import React, { useMemo } from 'react';
import { umlData } from '@/data/uml-data';
import styles from './Quiz.module.css';

interface ToolboxProps {
    quizType: 'usecase' | 'activity' | 'userflow';
    onDragStart: (e: React.DragEvent, id: string) => void;
}

export const Toolbox: React.FC<ToolboxProps> = ({ quizType, onDragStart }) => {
    const groups = useMemo(() => {
        if (quizType === 'usecase') {
            return {
                'Actors': ['actor', 'actor_system'],
                'Nodes': ['usecase', 'boundary'],
                'Relations': ['assoc_solid', 'include', 'extend', 'generalization']
            };
        } else if (quizType === 'activity') {
            return {
                'Nodes': ['initial', 'final', 'action', 'decision'],
                'Flows': ['control_flow'],
                'Parallel': ['fork_h'],
                'Layout': ['partition_v']
            };
        } else {
            return {
                'Start/End': ['start_end'],
                'Screens': ['process'],
                'Flow': ['flow_arrow', 'decision_uf']
            };
        }
    }, [quizType]);

    return (
        <div className={styles.toolboxArea}>
            <div className={styles.toolboxHeader}>Komponen (Drag & Drop)</div>
            <div className={styles.toolboxContent}>
                {Object.entries(groups).map(([groupName, ids]) => (
                    <div key={groupName}>
                        <div className={styles.toolboxSectionTitle}>{groupName}</div>
                        <div className={styles.toolboxGrid}>
                            {ids.map((id: string) => {
                                const item = umlData.find(d => d.id === id);
                                if (!item) return null;
                                return (
                                    <div
                                        key={id}
                                        className={styles.toolItem}
                                        draggable
                                        onDragStart={(e) => onDragStart(e, id)}
                                    >
                                        <div dangerouslySetInnerHTML={{ __html: item.svg }} />
                                        <span>{item.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
