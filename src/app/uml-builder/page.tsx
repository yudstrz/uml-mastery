import React from 'react';
import UmlBuilder from '@/components/uml-builder/UmlBuilder';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'UML Diagram Builder',
    description: 'Professional UML Builder Tool',
};

export default function UmlBuilderPage() {
    return (
        <>
            <UmlBuilder />
        </>
    );
}
