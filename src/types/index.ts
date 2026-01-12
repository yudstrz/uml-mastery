export interface UmlComponent {
    id: string;
    type: 'usecase' | 'activity' | 'userflow';
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
    layoutMode?: 'linear' | 'boundary' | 'swimlane' | 'gofood' | 'activity_gofood' | 'userflow_horizontal' | 'userflow_branch';
    swimlaneHeaders?: string[]; // e.g. ['User', 'System']
    slotMapping?: number[]; // [0, 0, 1] -> Item 0 to Col 0, Item 1 to Col 0, Item 2 to Col 1
    slotConfig?: { gridArea?: string; label?: string }[];
}
