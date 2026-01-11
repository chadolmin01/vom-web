'use client';

import { SAMPLE_USERS } from '@/constants';

export default function UsersListTab() {
  return (
    <div className="space-y-6">
      {/* 검색 & 필터 */}
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="이름, 연락처로 검색..."
            className="w-80 px-4 py-2.5 border border-gray-200 rounded-[10px] text-sm focus:border-[#3182F6] outline-none"
          />
          <select className="px-4 py-2.5 border border-gray-200 rounded-[10px] text-sm text-gray-600 outline-none">
            <option>전체 유형</option>
            <option>다문화가정</option>
            <option>한부모가정</option>
            <option>경계선 지능</option>
          </select>
        </div>
        <button className="px-5 py-2.5 bg-[#3182F6] text-white rounded-[10px] text-sm font-bold hover:bg-[#1B64DA] transition-colors">
          + 신규 등록
        </button>
      </div>

      {/* 테이블 */}
      <div className="bg-white rounded-[16px] border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#F9FAFB] border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">대상자</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">유형</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">등록일</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">최근 접속</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">학습 진도</th>
              <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase">관리</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {SAMPLE_USERS.map((user, idx) => (
              <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#3182F6] font-bold">
                      {user.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-[#191F28]">{user}</p>
                      <p className="text-xs text-gray-400">010-****-1234</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-purple-50 text-purple-600 rounded-md text-xs font-bold">
                    {user.includes('다문화') ? '다문화가정' : user.includes('한부모') ? '한부모가정' : '일반'}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">2024.01.10</td>
                <td className="px-6 py-4 text-sm text-gray-500">10분 전</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#3182F6] rounded-full" style={{ width: `${70 + idx * 5}%` }}></div>
                    </div>
                    <span className="text-sm font-bold text-[#3182F6]">{70 + idx * 5}%</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="px-3 py-1.5 border border-gray-200 rounded-md text-xs font-bold text-gray-500 hover:bg-gray-50 mr-2">
                    상세
                  </button>
                  <button className="px-3 py-1.5 border border-blue-200 rounded-md text-xs font-bold text-[#3182F6] hover:bg-blue-50">
                    알림
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
