'use client';

import { LogEntry } from '@/types';

interface LiveMonitorTabProps {
  logs: LogEntry[];
}

export default function LiveMonitorTab({ logs }: LiveMonitorTabProps) {
  return (
    <div className="space-y-6">
      {/* 실시간 상태 카드 */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-[16px] border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold text-gray-500">실시간 접속자</span>
          </div>
          <p className="text-4xl font-extrabold text-[#191F28]">42</p>
          <p className="text-sm text-gray-400 mt-2">현재 활성 세션</p>
        </div>
        <div className="bg-white rounded-[16px] border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold text-gray-500">금일 발화 수집</span>
          </div>
          <p className="text-4xl font-extrabold text-[#3182F6]">156</p>
          <p className="text-sm text-gray-400 mt-2">오늘 누적 건수</p>
        </div>
        <div className="bg-white rounded-[16px] border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold text-gray-500">알림 대기</span>
          </div>
          <p className="text-4xl font-extrabold text-orange-500">3</p>
          <p className="text-sm text-gray-400 mt-2">확인 필요</p>
        </div>
      </div>

      {/* 실시간 로그 스트림 */}
      <div className="bg-white rounded-[16px] border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-[#F9FAFB]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <h3 className="text-base font-bold text-[#191F28]">실시간 활동 스트림</h3>
          </div>
          <span className="text-xs text-gray-400">자동 갱신 중</span>
        </div>
        <div className="divide-y divide-gray-50 max-h-[500px] overflow-y-auto">
          {logs.map((log) => (
            <div key={log.id} className="px-6 py-4 flex items-center gap-4 hover:bg-blue-50/30 transition-colors">
              <span className="text-sm font-mono text-gray-400 w-20">{log.time}</span>
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xs">
                {log.user.charAt(0)}
              </div>
              <span className="font-bold text-[#191F28] flex-1">{log.user}</span>
              <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${log.card.bgColor} ${log.card.textColor}`}>
                {log.card.name}
              </span>
              <span className="text-sm text-gray-500 max-w-[200px] truncate">&quot;{log.voice}&quot;</span>
              <span className="text-xs text-green-600 font-bold">● LIVE</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
