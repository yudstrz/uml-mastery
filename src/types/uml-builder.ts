export type ElementType = 'process' | 'usecase' | 'actor' | 'note' | 'start' | 'end';

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
