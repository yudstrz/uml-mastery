"use client";

import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { UmlElement, UmlConnection, ToolType, ElementType } from '../../types/uml-builder';

interface UmlContextType {
    elements: UmlElement[];
    connections: UmlConnection[];
    selectedId: string | null;
    tool: ToolType;
    connectSource: string | null;
    setTool: (tool: ToolType) => void;
    addElement: (type: ElementType, x: number, y: number) => void;
    updateElement: (id: string, updates: Partial<UmlElement>) => void;
    selectElement: (id: string) => void;
    deselectAll: () => void;
    deleteSelected: () => void;
    startConnection: (id: string) => void;
    completeConnection: (targetId: string) => void;
    clearBoard: () => void;
    saveToLocal: () => void;
    // Context Actions
    duplicateElement: () => void;
    sendToBack: () => void;
}

const UmlContext = createContext<UmlContextType | undefined>(undefined);

export const UmlProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [elements, setElements] = useState<UmlElement[]>([]);
    const [connections, setConnections] = useState<UmlConnection[]>([]);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [tool, setTool] = useState<ToolType>('select');
    const [connectSource, setConnectSource] = useState<string | null>(null);
    const nextId = useRef(1);

    const duplicateElement = useCallback(() => {
        if (!selectedId) return;
        const el = elements.find(e => e.id === selectedId);
        if (!el) return;

        const newId = `el-${nextId.current++}`;
        const newEl: UmlElement = {
            ...el,
            id: newId,
            x: el.x + 20,
            y: el.y + 20
        };
        setElements(prev => [...prev, newEl]);
        setSelectedId(newId);
    }, [selectedId, elements]);

    const sendToBack = useCallback(() => {
        if (!selectedId) return;
        setElements(prev => {
            const el = prev.find(e => e.id === selectedId);
            if (!el) return prev;
            const others = prev.filter(e => e.id !== selectedId);
            return [el, ...others]; // Move to front of array (rendered first = behind)
        });
    }, [selectedId]);

    const addElement = useCallback((type: ElementType, x: number, y: number) => {
        const id = `el-${nextId.current++}`;
        const newElement: UmlElement = {
            id,
            type,
            x,
            y,
            text: type === 'note' ? 'Note...' : type.charAt(0).toUpperCase() + type.slice(1),
            bgColor: '#ffffff',
            fontSize: 14,
            width: type === 'process' ? 120 : (type === 'usecase' ? 140 : 100),
            height: type === 'process' ? 60 : (type === 'usecase' ? 80 : 100)
        };
        setElements(prev => [...prev, newElement]);
        setSelectedId(id);
    }, []);

    const updateElement = useCallback((id: string, updates: Partial<UmlElement>) => {
        setElements(prev => prev.map(el => el.id === id ? { ...el, ...updates } : el));
    }, []);

    const selectElement = useCallback((id: string) => {
        setSelectedId(id);
    }, []);

    const deselectAll = useCallback(() => {
        setSelectedId(null);
        setConnectSource(null);
    }, []);

    const deleteSelected = useCallback(() => {
        if (!selectedId) return;
        setElements(prev => prev.filter(e => e.id !== selectedId));
        setConnections(prev => prev.filter(c => c.from !== selectedId && c.to !== selectedId));
        setSelectedId(null);
        setConnectSource(null);
    }, [selectedId]);

    const startConnection = useCallback((id: string) => {
        if (tool === 'connect') {
            setConnectSource(id);
        }
    }, [tool]);

    const completeConnection = useCallback((targetId: string) => {
        if (tool === 'connect' && connectSource && connectSource !== targetId) {
            // Check if connection already exists
            const exists = connections.some(
                c => c.from === connectSource && c.to === targetId
            );
            if (!exists) {
                setConnections(prev => [...prev, {
                    id: `conn-${Date.now()}`,
                    from: connectSource,
                    to: targetId
                }]);
            }
            setConnectSource(null);
            setTool('select');
        }
    }, [tool, connectSource, connections]);

    const clearBoard = useCallback(() => {
        if (window.confirm("Clear all?")) {
            setElements([]);
            setConnections([]);
            setSelectedId(null);
            setConnectSource(null);
            nextId.current = 1;
        }
    }, []);

    const saveToLocal = useCallback(() => {
        const data = { elements, connections };
        localStorage.setItem('uml_save_data', JSON.stringify(data));
        alert('Saved to local storage!');
    }, [elements, connections]);

    return (
        <UmlContext.Provider value={{
            elements,
            connections,
            selectedId,
            tool,
            connectSource,
            setTool,
            addElement,
            updateElement,
            selectElement,
            deselectAll,
            deleteSelected,
            startConnection,
            completeConnection,
            clearBoard,
            saveToLocal,
            duplicateElement,
            sendToBack
        }}>
            {children}
        </UmlContext.Provider>
    );
};

export const useUml = () => {
    const context = useContext(UmlContext);
    if (context === undefined) {
        throw new Error('useUml must be used within a UmlProvider');
    }
    return context;
};
