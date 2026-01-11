import React, { useState } from 'react';
import { umlData } from '@/data/uml-data';
import { UmlCard } from './UmlCard';
import styles from './KnowledgeGrid.module.css';

export const KnowledgeGrid: React.FC = () => {
    const [filter, setFilter] = useState<'all' | 'usecase' | 'activity'>('all');

    const filteredData = filter === 'all'
        ? umlData
        : umlData.filter(item => item.type === filter);

    return (
        <section className={styles.sectionActive}>
            <div className={styles.filterBar}>
                <button
                    className={`${styles.btnFilter} ${filter === 'all' ? styles.active : ''}`}
                    onClick={() => setFilter('all')}
                >
                    Semua
                </button>
                <button
                    className={`${styles.btnFilter} ${filter === 'usecase' ? styles.active : ''}`}
                    onClick={() => setFilter('usecase')}
                >
                    Use Case
                </button>
                <button
                    className={`${styles.btnFilter} ${filter === 'activity' ? styles.active : ''}`}
                    onClick={() => setFilter('activity')}
                >
                    Activity
                </button>
            </div>

            <div className={styles.gridContainer}>
                {filteredData.map(item => (
                    <UmlCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};
