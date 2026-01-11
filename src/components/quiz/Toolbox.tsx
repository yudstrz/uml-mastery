import React, { useMemo } from 'react';
import { umlData } from '@/data/uml-data';
import styles from './Quiz.module.css';

interface ToolboxProps {
    quizType: 'usecase' | 'activity';
    onDragStart: (e: React.DragEvent, id: string) => void;
}

export const Toolbox: React.FC<ToolboxProps> = ({ quizType, onDragStart }) => {
    const groups = useMemo(() => {
        if (quizType === 'usecase') {
            return {
                'Actors': ['actor', 'actor_system', 'actor_db', 'actor_service', 'actor_hardware'],
                'Nodes': ['usecase', 'usecase_abstract', 'boundary', 'note'],
                'Relations': ['assoc_solid', 'assoc_arrow', 'include', 'extend', 'generalization', 'dependency', 'note_link']
            };
        } else {
            return {
                'Nodes': ['initial', 'final', 'flow_final', 'action', 'decision', 'merge', 'loop_node', 'call_behavior'],
                'Flows': ['control_flow', 'object_flow', 'exception_handler'],
                'Events': ['send_signal', 'time_event'],
                'Data': ['object_node', 'expansion_region', 'partition_v'],
                'Forks': ['fork_h', 'join_h', 'fork_v', 'join_v']
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
