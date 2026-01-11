export interface UmlComponent {
    id: string;
    type: 'usecase' | 'activity';
    name: string;
    desc: string;
    svg: string; // Storing SVG as string for now, will render safely
}

export interface QuizQuestion {
    scenario: string;
    instruction: string;
    targetSequence: string[]; // IDs of the components
    explanation: string;
    override?: boolean;
    layoutMode?: 'linear' | 'boundary' | 'swimlane';
    swimlaneHeaders?: string[]; // e.g. ['User', 'System']
    slotConfig?: { gridArea?: string; label?: string }[];
}
