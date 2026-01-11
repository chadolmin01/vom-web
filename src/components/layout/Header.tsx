'use client';

import { TabType } from '@/types';

interface HeaderProps {
  activeTab: TabType;
}

const tabTitles: Record<TabType, string> = {
  // Dashboard
  dashboard_overview: '종합 현황',
  dashboard_live: '실시간 모니터링',

  // Users
  users_list: '전체 대상자',
  users_group: '그룹 관리',

  // Data
  data_voice: '음성 데이터 분석',
  data_report: '학습 리포트',
  data_device: 'IoT 기기 현황',

  // Operation
  op_notice: '공지 및 알림',
  op_content: '콘텐츠 관리',

  // Settings
  set_admin: '관리자 계정',
  set_env: '환경 설정',
};

export default function Header({ activeTab }: HeaderProps) {
  const today = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="h-[76px] bg-white border-b border-gray-200 flex justify-between items-center px-8 shrink-0 z-10">
      <h2 className="text-[22px] font-bold text-[#191F28]">
        {tabTitles[activeTab]}
      </h2>
      <div className="flex gap-3">
        <div className="h-10 px-4 flex items-center bg-[#F9FAFB] border border-[#E5E8EB] rounded-[10px] text-[15px] text-[#8B95A1]">
          <span className="mr-2">📅</span> {today}
        </div>
        <button className="h-10 px-5 bg-[#3182F6] text-white rounded-[10px] text-[15px] font-bold hover:bg-[#1B64DA] transition-colors shadow-sm">
          리포트 생성
        </button>
      </div>
    </header>
  );
}
