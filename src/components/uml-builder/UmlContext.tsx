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

        let width = 100;
        let height = 60;
        let text = type.charAt(0).toUpperCase() + type.slice(1);

        if (type === 'process') { width = 120; height = 60; }
        else if (type === 'usecase') { width = 140; height = 80; }
        else if (type === 'actor') { width = 60; height = 80; }
        else if (type === 'start' || type === 'end') { width = 30; height = 30; text = ''; }
        else if (type === 'note') { width = 120; height = 100; text = 'Note...'; }
        else if (type === 'decision') { width = 60; height = 60; text = ''; }
        else if (type === 'action') { width = 120; height = 50; }
        else if (type === 'fork') { width = 150; height = 6; text = ''; }
        else if (type === 'boundary') { width = 300; height = 400; text = 'System'; }
        else if (type === 'swimlane') { width = 250; height = 500; text = 'Lane'; }

        const newElement: UmlElement = {
            id,
            type,
            x,
            y,
            text,
            bgColor: '#ffffff',
            fontSize: 14,
            width,
            height
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

    const handleSetTool = useCallback((newTool: ToolType) => {
        setTool(newTool);
        setConnectSource(null); // Always clear connection source when switching tools
        if (newTool !== 'select') {
            setSelectedId(null); // Deselect if switching to a creation tool
        }
    }, []);

    const startConnection = useCallback((id: string) => {
        if (tool === 'connect') {
            setConnectSource(id);
        }
    }, [tool]);

    const completeConnection = useCallback((targetId: string) => {
        if (tool === 'connect' && connectSource) {
            if (connectSource !== targetId) {
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
            }
            setConnectSource(null);
            // Optional: keep tool active for chain connecting? 
            // setTool('select'); // Let's keep it active for better UX, user can press V or click Select to stop
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
            setTool: handleSetTool,
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
