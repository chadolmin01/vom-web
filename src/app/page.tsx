'use client';

import { useState, useEffect } from 'react';
import { LogEntry, TabType } from '@/types';
import { FONT_STYLE, SAMPLE_USERS, SAMPLE_CARDS, SAMPLE_VOICES } from '@/constants';

// Components
import LoginScreen from '@/components/LoginScreen';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import DashboardTab from '@/components/dashboard';
import UsersTab from '@/components/tabs/UsersTab';
import VoiceTab from '@/components/tabs/VoiceTab';
import SettingsTab from '@/components/tabs/SettingsTab';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 실시간 로그 시뮬레이션
  useEffect(() => {
    if (!isLoggedIn) return;

    const addLog = () => {
      const newLog: LogEntry = {
        id: Date.now().toString(),
        time: new Date().toLocaleTimeString('ko-KR', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }),
        user: SAMPLE_USERS[Math.floor(Math.random() * SAMPLE_USERS.length)],
        card: SAMPLE_CARDS[Math.floor(Math.random() * SAMPLE_CARDS.length)],
        voice: SAMPLE_VOICES[Math.floor(Math.random() * SAMPLE_VOICES.length)],
        status: 'received',
      };
      setLogs((prev) => [newLog, ...prev].slice(0, 10));
    };

    addLog();
    setTimeout(addLog, 100);
    setTimeout(addLog, 200);

    const interval = setInterval(addLog, 3000);
    return () => clearInterval(interval);
  }, [isLoggedIn]);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  // 로그인 전 화면
  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  // 로그인 후 대시보드
  return (
    <div className="flex h-screen bg-[#F2F4F6]" style={FONT_STYLE}>
      <Sidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onLogout={handleLogout}
      />

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#F2F4F6]">
        <Header activeTab={activeTab} />

        <div className="flex-1 overflow-y-auto overflow-x-hidden p-8 scroll-smooth">
          <div className="w-full space-y-6">
            {activeTab === 'dashboard' && <DashboardTab logs={logs} />}
            {activeTab === 'users' && <UsersTab />}
            {activeTab === 'voice' && <VoiceTab />}
            {activeTab === 'settings' && <SettingsTab onLogout={handleLogout} />}
          </div>
        </div>
      </main>
    </div>
  );
}
