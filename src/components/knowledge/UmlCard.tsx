import React from 'react';
import { UmlComponent } from '@/types';
import styles from './KnowledgeGrid.module.css';

interface UmlCardProps {
    item: UmlComponent;
}

export const UmlCard: React.FC<UmlCardProps> = ({ item }) => {
    return (
        <div className={styles.knowledgeCard}>
            <div
                className={styles.cardIconArea}
                dangerouslySetInnerHTML={{ __html: item.svg }}
            />
            <div className={styles.cardType}>
                {item.type === 'usecase' ? 'Use Case' : 'Activity'} Diagram
            </div>
            <div className={styles.cardTitle}>{item.name}</div>
            <div className={styles.cardDesc}>{item.desc}</div>
        </div>
    );
};
