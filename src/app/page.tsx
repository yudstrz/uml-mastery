"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { KnowledgeGrid } from "@/components/knowledge/KnowledgeGrid";
import { QuizMenu } from "@/components/quiz/QuizMenu";
import { QuizInterface } from "@/components/quiz/QuizInterface";
import { useQuiz } from "@/hooks/useQuiz";

import UmlBuilder from "@/components/uml-builder/UmlBuilder";

export default function Home() {
  const [activeTab, setActiveTab] = useState<'knowledge' | 'quiz' | 'builder'>('knowledge');
  const quizHook = useQuiz();

  const handleTabChange = (tab: 'knowledge' | 'quiz' | 'builder') => {
    setActiveTab(tab);
    if (tab === 'quiz') {
      quizHook.exitQuiz();
    }
  };

  if (activeTab === 'builder') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
        <Header activeTab={activeTab} onTabChange={handleTabChange} />
        <div style={{ flex: 1, position: 'relative' }}>
          <UmlBuilder />
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header activeTab={activeTab} onTabChange={handleTabChange} />

      <main style={{
        flex: 1,
        padding: '2rem',
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%'
      }}>
        {activeTab === 'knowledge' ? (
          <KnowledgeGrid />
        ) : (
          <>
            {!quizHook.activeQuizType ? (
              <QuizMenu onStartQuiz={quizHook.startQuiz} />
            ) : (
              <QuizInterface quizHook={quizHook} />
            )}
          </>
        )}
      </main>
    </div>
  );
}
