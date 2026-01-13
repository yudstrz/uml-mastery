export type UMLType = 'usecase' | 'activity';

export interface UMLComponent {
    id: string;
    type: UMLType;
    name: string;
    svg: string;
    desc: string;
}

export const umlComponents: UMLComponent[] = [
    // Use Case
    {
        id: 'actor', type: 'usecase', name: 'Actor (User)', svg: '<svg viewBox="0 0 50 50" fill="none" stroke="#4F46E5" stroke-width="2"><circle cx="25" cy="15" r="8"/><path d="M25 23 L25 38 M10 28 L40 28 M15 50 L25 38 L35 50"/></svg>', desc: 'Pengguna sistem (Manusia).'
    },
    {
        id: 'actor_sys', type: 'usecase', name: 'System Actor', svg: '<svg viewBox="0 0 50 50" fill="none" stroke="#4F46E5" stroke-width="2"><rect x="10" y="10" width="30" height="30" rx="4"/><text x="13" y="30" font-size="8" fill="#4F46E5" stroke="none">SYS</text></svg>', desc: 'Sistem eksternal / API.'
    },
    {
        id: 'usecase', type: 'usecase', name: 'Use Case', svg: '<svg viewBox="0 0 80 40" fill="#EEF2FF" stroke="#4F46E5" stroke-width="2"><ellipse cx="40" cy="20" rx="35" ry="15"/></svg>', desc: 'Fungsionalitas / Fitur.'
    },
    {
        id: 'boundary', type: 'usecase', name: 'Boundary', svg: '<svg viewBox="0 0 50 50" fill="none" stroke="#4F46E5" stroke-width="2"><rect x="5" y="5" width="40" height="40"/></svg>', desc: 'Batasan sistem.'
    },
    {
        id: 'assoc', type: 'usecase', name: 'Association', svg: '<svg viewBox="0 0 50 20" stroke="#4F46E5" stroke-width="2"><line x1="0" y1="10" x2="50" y2="10"/></svg>', desc: 'Garis komunikasi.'
    },
    {
        id: 'include', type: 'usecase', name: 'Include', svg: '<svg viewBox="0 0 60 20" fill="none" stroke="#4F46E5" stroke-width="2"><path d="M0 10 L50 10" stroke-dasharray="4"/><path d="M50 10 L40 5 M50 10 L40 15"/></svg>', desc: 'Relasi Wajib.'
    },
    {
        id: 'extend', type: 'usecase', name: 'Extend', svg: '<svg viewBox="0 0 60 20" fill="none" stroke="#4F46E5" stroke-width="2"><path d="M0 10 L50 10" stroke-dasharray="4"/><path d="M50 10 L40 5 M50 10 L40 15"/><text x="10" y="5" font-size="6" stroke="none" fill="#4F46E5">&lt;&lt;extend&gt;&gt;</text></svg>', desc: 'Relasi Opsional.'
    },

    // Activity
    {
        id: 'start', type: 'activity', name: 'Start', svg: '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="12" fill="#10B981"/></svg>', desc: 'Titik Mulai.'
    },
    {
        id: 'end', type: 'activity', name: 'End', svg: '<svg viewBox="0 0 40 40" fill="none" stroke="#EF4444" stroke-width="3"><circle cx="20" cy="20" r="12"/><circle cx="20" cy="20" r="6" fill="#EF4444" stroke="none"/></svg>', desc: 'Titik Akhir.'
    },
    {
        id: 'action', type: 'activity', name: 'Action', svg: '<svg viewBox="0 0 80 40" fill="#EEF2FF" stroke="#4F46E5" stroke-width="2"><rect x="2" y="2" width="76" height="36" rx="8"/></svg>', desc: 'Aktivitas / Proses.'
    },
    {
        id: 'decision', type: 'activity', name: 'Decision', svg: '<svg viewBox="0 0 50 50" fill="#FFFBEB" stroke="#F59E0B" stroke-width="2"><path d="M25 2 L48 25 L25 48 L2 25 Z"/></svg>', desc: 'Percabangan / Kondisi.'
    },
    {
        id: 'fork', type: 'activity', name: 'Fork/Join', svg: '<svg viewBox="0 0 60 20"><rect x="5" y="8" width="50" height="6" fill="#1E293B"/></svg>', desc: 'Split / Gabung Paralel.'
    },
    {
        id: 'flow', type: 'activity', name: 'Control Flow', svg: '<svg viewBox="0 0 50 20" stroke="#4F46E5" stroke-width="2" fill="none"><line x1="0" y1="10" x2="40" y2="10"/><path d="M40 10 L35 5 M40 10 L35 15"/></svg>', desc: 'Arah Alur.'
    }
];
