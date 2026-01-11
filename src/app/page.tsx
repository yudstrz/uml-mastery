"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { KnowledgeGrid } from "@/components/knowledge/KnowledgeGrid";
import { QuizMenu } from "@/components/quiz/QuizMenu";
import { QuizInterface } from "@/components/quiz/QuizInterface";
import { useQuiz } from "@/hooks/useQuiz";

export default function Home() {
  const [activeTab, setActiveTab] = useState<'knowledge' | 'quiz'>('knowledge');
  const quizHook = useQuiz();

  const handleTabChange = (tab: 'knowledge' | 'quiz') => {
    setActiveTab(tab);
    if (tab === 'quiz') {
      quizHook.exitQuiz();
    }
  };

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
