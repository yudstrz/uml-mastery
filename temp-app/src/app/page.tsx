'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import WelcomeScreen from '../components/WelcomeScreen';
import LearningScreen from '../components/LearningScreen';
import QuizScreen from '../components/QuizScreen';
import KnowledgeScreen from '../components/KnowledgeScreen';
import VisualMenuScreen from '../components/VisualMenuScreen';
import VisualBuilder from '../components/VisualBuilder';

export default function Home() {
  const [screen, setScreen] = useState('welcome');
  const [activeScenario, setActiveScenario] = useState<string | null>(null);

  const handleNavigate = (target: string) => {
    setScreen(target);
    if (target !== 'visual-builder') setActiveScenario(null);
  };

  const handleStartBuilder = (id: string) => {
    setActiveScenario(id);
    setScreen('visual-builder');
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50 font-sans text-slate-900">
      <Header
        activeTab={screen === 'visual-builder' ? 'visual-menu' : screen}
        onNavigate={handleNavigate}
        show={screen !== 'welcome'}
      />

      <main className="flex-1 flex overflow-hidden relative">
        {screen === 'welcome' && <WelcomeScreen onStart={() => handleNavigate('learning')} />}

        {screen === 'learning' && (
          <LearningScreen onFinish={() => handleNavigate('quiz')} />
        )}

        {screen === 'quiz' && (
          <QuizScreen onFinish={() => handleNavigate('knowledge')} />
        )}

        {screen === 'knowledge' && (
          <KnowledgeScreen onNext={() => handleNavigate('visual-menu')} />
        )}

        {screen === 'visual-menu' && (
          <VisualMenuScreen
            onSelect={handleStartBuilder}
            onBack={() => handleNavigate('knowledge')}
          />
        )}

        {screen === 'visual-builder' && activeScenario && (
          <VisualBuilder
            scenarioId={activeScenario}
            onBack={() => handleNavigate('visual-menu')}
          />
        )}
      </main>
    </div>
  );
}
