'use client';

import { LogEntry } from '@/types';

interface ActivityLogProps {
  logs: LogEntry[];
}

export default function ActivityLog({ logs }: ActivityLogProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="px-7 py-5 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold text-[#191F28]">실시간 활동 로그</h3>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        </div>
        <button className="text-sm font-bold text-[#8B95A1] hover:text-[#191F28] transition-colors">
          전체 내역 보기 &gt;
        </button>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#F9FAFB] border-b border-gray-200">
            <th className="px-7 py-3 text-xs font-bold text-[#8B95A1] uppercase w-[15%]">시간</th>
            <th className="px-6 py-3 text-xs font-bold text-[#8B95A1] uppercase w-[15%]">대상자</th>
            <th className="px-6 py-3 text-xs font-bold text-[#8B95A1] uppercase w-[15%]">학습 카드</th>
            <th className="px-6 py-3 text-xs font-bold text-[#8B95A1] uppercase w-[40%]">발화 데이터</th>
            <th className="px-6 py-3 text-xs font-bold text-[#8B95A1] uppercase w-[15%] text-right">상태</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {logs.map((log) => (
            <tr key={log.id} className="hover:bg-blue-50/30 transition-colors group">
              <td className="px-7 py-4 text-sm font-medium text-[#6B7684] tabular-nums">{log.time}</td>
              <td className="px-6 py-4 text-sm font-bold text-[#191F28]">{log.user}</td>
              <td className="px-6 py-4">
                <span className={`inline-flex items-center px-2.5 py-1 rounded-[6px] text-xs font-bold ${log.card.bgColor} ${log.card.textColor}`}>
                  {log.card.name}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-[#4E5968] font-medium">
                &quot;{log.voice}&quot;
              </td>
              <td className="px-6 py-4 text-right">
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">수신됨</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
