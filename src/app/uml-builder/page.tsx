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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            <UmlBuilder />
        </>
    );
}
