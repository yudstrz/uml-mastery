import React, { useEffect, useState } from 'react';
import { BuilderData, ViewType } from '../../data/visual';

interface DiagramCanvasProps {
    data: BuilderData;
    view: ViewType;
    templateName: string;
}

export default function DiagramCanvas({ data, view, templateName }: DiagramCanvasProps) {
    const [svgContent, setSvgContent] = useState('');

    useEffect(() => {
        if (view === 'activity') {
            setSvgContent(drawActivity(data));
        } else {
            setSvgContent(drawUseCase(data, templateName));
        }
    }, [data, view, templateName]);

    return (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-white rounded-xl border border-slate-200 overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>
            <div
                className="w-full h-full flex items-center justify-center p-4"
                dangerouslySetInnerHTML={{ __html: svgContent }}
            />
        </div>
    );
}

// Helper functions (ported from original JS)
function drawUseCase(data: BuilderData, title: string) {
    const actors = data.actors;
    const usecases = data.usecases;
    const h = Math.max(400, Math.max(actors.length, usecases.length) * 100);

    let svg = `<svg width="100%" height="${h}" viewBox="0 0 600 ${h}" xmlns="http://www.w3.org/2000/svg">`;
    svg += `<rect x="180" y="20" width="380" height="${h - 40}" fill="#fff" stroke="#4F46E5" stroke-width="3" rx="15"/>`;
    svg += `<text x="200" y="50" font-weight="900" fill="#4F46E5" font-size="14">SISTEM ${title.toUpperCase()}</text>`;

    const aPositions: { x: number, y: number }[] = [];
    const uPositions: { x: number, y: number }[] = [];

    // Draw Actors
    actors.forEach((a, i) => {
        const y = (h / (actors.length + 1)) * (i + 1);
        aPositions.push({ x: 100, y: y });
        svg += `
            <g transform="translate(70, ${y - 40})">
                <circle cx="30" cy="20" r="12" fill="none" stroke="#4F46E5" stroke-width="2.5"/>
                <line x1="30" y1="32" x2="30" y2="55" stroke="#4F46E5" stroke-width="2.5"/>
                <line x1="15" y1="40" x2="45" y2="40" stroke="#4F46E5" stroke-width="2.5"/>
                <line x1="30" y1="55" x2="15" y2="75" stroke="#4F46E5" stroke-width="2.5"/>
                <line x1="30" y1="55" x2="45" y2="75" stroke="#4F46E5" stroke-width="2.5"/>
                <text x="30" y="95" text-anchor="middle" font-weight="700" font-size="11" fill="#1E293B">${a}</text>
            </g>
        `;
    });

    // Draw Use Cases
    usecases.forEach((u, i) => {
        const y = (h / (usecases.length + 1)) * (i + 1);
        uPositions.push({ x: 240, y: y });
        svg += `
            <g transform="translate(240, ${y - 25})">
                <ellipse cx="120" cy="25" rx="100" ry="25" fill="#EEF2FF" stroke="#4F46E5" stroke-width="2"/>
                <text x="120" y="30" text-anchor="middle" font-weight="700" font-size="11" fill="#1E293B">${u}</text>
            </g>
        `;
    });

    // Draw Mappings (Actor -> Use Case)
    Object.keys(data.mappings).forEach(key => {
        const aIdx = parseInt(key);
        (data.mappings[aIdx] || []).forEach(uIdx => {
            const start = aPositions[aIdx];
            const end = uPositions[uIdx];
            if (start && end) {
                // Adjust connect points
                svg += `<line x1="${start.x}" y1="${start.y}" x2="${end.x}" y2="${end.y}" stroke="#94A3B8" stroke-width="1.5"/>`;
            }
        });
    });

    // Draw Relations
    data.relations.forEach(rel => {
        const s = uPositions[rel.source];
        const t = uPositions[rel.target];
        if (s && t) {
            svg += `
                <g>
                    <line x1="${s.x + 200}" y1="${s.y}" x2="${t.x + 200}" y2="${t.y}" stroke="#4F46E5" stroke-width="1.5" stroke-dasharray="4"/>
                    <text x="${(s.x + t.x) / 2 + 210}" y="${(s.y + t.y) / 2}" font-size="9" fill="#4F46E5" font-weight="bold">&lt;&lt;${rel.type}&gt;&gt;</text>
                </g>
            `;
        }
    });

    svg += `</svg>`;
    return svg;
}

function drawActivity(data: BuilderData) {
    const usecases = data.usecases;
    const h = (usecases.length + 2) * 100;

    let svg = `<svg width="100%" height="${h}" viewBox="0 0 400 ${h}" xmlns="http://www.w3.org/2000/svg">`;

    // Start Node
    svg += `<circle cx="200" cy="50" r="12" fill="#10B981"/>`;
    svg += `<line x1="200" y1="62" x2="200" y2="100" stroke="#4F46E5" stroke-width="2"/>`;

    usecases.forEach((u, i) => {
        const y = 100 + (i * 100);
        svg += `
            <g transform="translate(100, ${y})">
                <rect x="0" y="0" width="200" height="50" rx="10" fill="#EEF2FF" stroke="#4F46E5" stroke-width="2"/>
                <text x="100" y="30" text-anchor="middle" font-weight="700" font-size="12" fill="#1E293B">${u}</text>
            </g>
        `;
        // Arrow down
        if (i < usecases.length - 1) {
            svg += `<line x1="200" y1="${y + 50}" x2="200" y2="${y + 100}" stroke="#4F46E5" stroke-width="2"/>`;
            svg += `<path d="M200 ${y + 100} L195 ${y + 90} M200 ${y + 100} L205 ${y + 90}" stroke="#4F46E5" stroke-width="2" fill="none"/>`;
        }
    });

    // End Node
    const lastY = 100 + (usecases.length - 1) * 100 + 50;
    svg += `<line x1="200" y1="${lastY}" x2="200" y2="${lastY + 30}" stroke="#4F46E5" stroke-width="2"/>`;
    svg += `
        <g transform="translate(200, ${lastY + 30 + 20})">
            <circle cx="0" cy="0" r="15" fill="none" stroke="#EF4444" stroke-width="2"/>
            <circle cx="0" cy="0" r="8" fill="#EF4444"/>
        </g>
    `;

    svg += `</svg>`;
    return svg;
}
