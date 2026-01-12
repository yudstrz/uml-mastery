"use client";
import React, { useRef, useState, useEffect } from 'react';
import styles from './UmlBuilder.module.css';
import { useUml } from './UmlContext';
import { ElementType, UmlElement } from '../../types/uml-builder';
import { MousePointer2, Link, Undo2, Trash2, Copy, Layers } from 'lucide-react';

export default function Canvas() {
    const {
        elements,
        connections,
        selectedId,
        addElement,
        selectElement,
        updateElement,
        tool,
        setTool,
        startConnection,
        completeConnection,
        deleteSelected,
        duplicateElement,
        sendToBack,
        connectSource
    } = useUml();

    const canvasRef = useRef<HTMLDivElement>(null);
    const [dragState, setDragState] = useState<{ id: string; offsetX: number; offsetY: number } | null>(null);
    const [contextMenu, setContextMenu] = useState<{ x: number; y: number; visible: boolean } | null>(null);

    // --- Drag & Drop from Sidebar ---
    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const type = e.dataTransfer.getData('type') as ElementType;
        if (!type || !canvasRef.current) return;

        const rect = canvasRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        addElement(type, x, y);
    };

    // --- Element Interaction ---
    const handleMouseDown = (e: React.MouseEvent, id: string, elX: number, elY: number) => {
        // If connecting, do NOT start dragging.
        // We handle connection in onClick to be cleaner, but we need to stop propagation here
        // so we don't drag the canvas or element.
        if (tool === 'connect') {
            e.stopPropagation();
            return;
        }

        // Select tool: Start dragging
        e.stopPropagation();
        selectElement(id);

        // Calculate offset relative to the element's top-left
        const rect = canvasRef.current!.getBoundingClientRect();
        // Mouse pos relative to canvas
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        setDragState({
            id,
            offsetX: mouseX - elX,
            offsetY: mouseY - elY
        });
    };

    const handleElementClick = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        if (tool === 'connect') {
            if (!connectSource) {
                startConnection(id);
            } else {
                completeConnection(id);
            }
        }
    };

    const handleContextMenu = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        e.stopPropagation();
        selectElement(id);
        setContextMenu({ x: e.clientX, y: e.clientY, visible: true });
    };

    const handleCanvasClick = (e: React.MouseEvent) => {
        setContextMenu(null);
        // If clicking empty canvas
        if (e.target === canvasRef.current) {
            if (tool === 'connect') {
                // If clicking canvas while connecting, maybe cancel?
                // For now, doing nothing or selecting nothing is fine.
                // We can reset connectSource via selectElement(null) implicitly?
                // Actually currently valid: selectElement(null)
            }
            selectElement(''); // Deselect
        }
    };

    // Global Mouse Move / Up handling for smooth dragging
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!dragState || !canvasRef.current) return;

            const rect = canvasRef.current.getBoundingClientRect();
            let newX = e.clientX - rect.left - dragState.offsetX;
            let newY = e.clientY - rect.top - dragState.offsetY;

            // Optional: Grid snap
            newX = Math.round(newX / 10) * 10;
            newY = Math.round(newY / 10) * 10;

            updateElement(dragState.id, { x: newX, y: newY });
        };

        const handleMouseUp = () => {
            setDragState(null);
        };

        if (dragState) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [dragState, updateElement]);


    // --- Rendering Helpers ---
    const renderElementContent = (el: UmlElement) => {
        switch (el.type) {
            case 'process':
                return (
                    <>
                        <div className={styles.umlClassHeader}>Class</div>
                        <div className={styles.umlClassBody}>{el.text}</div>
                    </>
                );
            case 'actor':
                return (
                    <>
                        <i className={`fas fa-user ${styles.umlActorIcon}`}></i>
                        <div style={{ marginTop: '5px' }}>{el.text}</div>
                    </>
                );
            case 'usecase':
                return <div>{el.text}</div>;
            case 'note':
                return <div>{el.text}</div>;
            case 'start':
            case 'end':
                return null;
            case 'action':
                return <div style={{ textAlign: 'center' }}>{el.text}</div>;
            case 'decision':
                return (
                    <div style={{
                        width: '100%', height: '100%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transform: 'rotate(-45deg)' // Counter rotate text
                    }}>{el.text}</div>
                );
            case 'fork':
                return null; // Just a black bar
            case 'boundary':
                return (
                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <div style={{
                            position: 'absolute', top: '-12px', left: '10px',
                            background: 'white', padding: '0 5px', fontWeight: 'bold',
                            color: '#2563EB'
                        }}>
                            {el.text}
                        </div>
                    </div>
                );
            case 'swimlane':
                return (
                    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <div style={{
                            padding: '8px', fontWeight: 'bold', textAlign: 'center',
                            borderBottom: '1px solid black', background: '#f1f5f9'
                        }}>
                            {el.text}
                        </div>
                        <div style={{ flex: 1 }}></div>
                    </div>
                );
            default:
                return <div>{el.text}</div>;
        }
    };

    const getElementCenter = (id: string) => {
        const el = elements.find(e => e.id === id);
        if (!el) return { x: 0, y: 0 };
        return {
            x: el.x + el.width / 2,
            y: el.y + el.height / 2
        };
    };

    return (
        <main
            className={styles.canvasContainer}
            ref={canvasRef}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleCanvasClick}
            style={{ cursor: tool === 'connect' ? 'crosshair' : 'default' }}
        >
            <div className={styles.canvasGrid}></div>

            {/* SVG Layer */}
            <svg className={styles.connectionsLayer}>
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
                    </marker>
                </defs>
                {connections.map(conn => {
                    const fromPos = getElementCenter(conn.from);
                    const toPos = getElementCenter(conn.to);
                    return (
                        <line
                            key={conn.id}
                            x1={fromPos.x} y1={fromPos.y}
                            x2={toPos.x} y2={toPos.y}
                            className={styles.connectionPath}
                            markerEnd="url(#arrowhead)"
                        />
                    );
                })}
                {/* Temporary Line for Connection Creation */}
                {tool === 'connect' && connectSource && dragState === null && (
                    // We could add a line following mouse here if we tracked mouse pos in state
                    // For now, simpler: Just show we are in connect mode via cursor
                    null
                )}
            </svg>

            {/* Elements Layer */}
            {elements.map(el => {
                const zIndex = (el.type === 'boundary' || el.type === 'swimlane') ? 1 : 2;
                const isConnectSource = connectSource === el.id;

                return (
                    <div
                        key={el.id}
                        className={`
                        ${styles.canvasElement} 
                        ${el.type === 'process' ? styles.umlClass : ''}
                        ${el.type === 'actor' ? styles.umlActor : ''}
                        ${el.type === 'usecase' ? styles.umlUsecase : ''}
                        ${el.type === 'start' ? styles.umlStart : ''}
                        ${el.type === 'end' ? styles.umlEnd : ''}
                        ${el.type === 'note' ? styles.umlNote : ''}
                        ${el.type === 'action' ? styles.umlAction : ''}
                        ${el.type === 'decision' ? styles.umlDecision : ''}
                        ${el.type === 'fork' ? styles.umlFork : ''}
                        ${el.type === 'boundary' ? styles.umlBoundary : ''}
                        ${el.type === 'swimlane' ? styles.umlSwimlane : ''}
                        ${selectedId === el.id ? styles.selected : ''}
                    `}
                        style={{
                            left: el.x,
                            top: el.y,
                            width: el.width,
                            height: el.height,
                            backgroundColor: (el.type !== 'actor' && el.type !== 'start' && el.type !== 'end' && el.type !== 'fork' && el.type !== 'boundary' && el.type !== 'swimlane') ? el.bgColor : undefined,
                            fontSize: el.fontSize,
                            zIndex: zIndex,
                            // Visual feedback for connection source
                            outline: isConnectSource ? '2px dashed #ef4444' : undefined,
                            boxShadow: isConnectSource ? '0 0 10px rgba(239, 68, 68, 0.5)' : undefined
                        }}
                        onMouseDown={(e) => handleMouseDown(e, el.id, el.x, el.y)}
                        onClick={(e) => handleElementClick(e, el.id)}
                        onContextMenu={(e) => handleContextMenu(e, el.id)}
                    >
                        {renderElementContent(el)}
                    </div>
                )
            })}

            {/* Context Menu */}
            {contextMenu && contextMenu.visible && (
                <div
                    className={styles.contextMenu}
                    style={{ left: contextMenu.x, top: contextMenu.y }}
                >
                    <div className={styles.contextItem} onClick={duplicateElement}>
                        <Copy size={14} /> Duplicate
                    </div>
                    <div className={styles.contextItem} onClick={sendToBack}>
                        <Layers size={14} /> Send to Back
                    </div>
                    <div className={`${styles.contextItem} ${styles.danger}`} onClick={deleteSelected}>
                        <Trash2 size={14} /> Delete
                    </div>
                </div>
            )}

            {/* Floating Controls */}
            <div className={styles.floatingControls}>
                <button
                    className={`${styles.controlBtn} ${tool === 'select' ? styles.active : ''}`}
                    onClick={() => setTool('select')}
                    title="Select Tool (V)"
                >
                    <MousePointer2 size={20} />
                </button>
                <button
                    className={`${styles.controlBtn} ${tool === 'connect' ? styles.active : ''}`}
                    onClick={() => setTool('connect')}
                    title="Connect Tool (C)"
                >
                    <Link size={20} />
                </button>
                <div className={styles.controlSeparator}></div>
                <button className={styles.controlBtn} onClick={() => alert("Undo unimplemented in React version yet")} title="Undo (Ctrl+Z)">
                    <Undo2 size={20} />
                </button>
                <button className={styles.controlBtn} onClick={deleteSelected} title="Delete (Del)">
                    <Trash2 size={20} />
                </button>
            </div>
        </main>
    );
}
