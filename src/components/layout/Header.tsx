'use client';

import { TabType } from '@/types';

interface HeaderProps {
  activeTab: TabType;
}

const tabTitles: Record<TabType, string> = {
  dashboard: '대시보드',
  users: '대상자 목록',
  voice: '음성 데이터 분석',
  settings: '환경 설정',
};

export default function Header({ activeTab }: HeaderProps) {
  const today = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="h-[72px] bg-white border-b border-gray-200 flex justify-between items-center px-8 shrink-0 z-10">
      <h2 className="text-xl font-bold text-[#191F28]">
        {tabTitles[activeTab]}
      </h2>
      <div className="flex gap-3">
        <div className="h-9 px-4 flex items-center bg-[#F9FAFB] border border-[#E5E8EB] rounded-[8px] text-sm text-[#8B95A1]">
          <span className="mr-2">📅</span> {today}
        </div>
        <button className="h-9 px-4 bg-[#3182F6] text-white rounded-[8px] text-sm font-bold hover:bg-[#1B64DA] transition-colors shadow-sm">
          리포트 생성
        </button>
      </div>
    </header>
  );
}
