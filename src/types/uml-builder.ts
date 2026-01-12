export type ElementType = 'process' | 'usecase' | 'actor' | 'note' | 'start' | 'end' | 'action' | 'decision' | 'fork' | 'boundary' | 'swimlane';

export interface UmlElement {
    id: string;
    type: ElementType;
    x: number;
    y: number;
    text: string;
    bgColor: string;
    fontSize: number;
    width: number;
    height: number;
}

export interface UmlConnection {
    id: string;
    from: string;
    to: string;
}

export type ToolType = 'select' | 'connect';
