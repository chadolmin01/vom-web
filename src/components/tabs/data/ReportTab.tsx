'use client';

import { useState } from 'react';
import AlertModal from '@/components/widgets/AlertModal';

const REPORTS = [
  { id: 1, title: '주간 학습 리포트', period: '2025.01.06 ~ 01.12', type: '주간', status: 'ready', users: 45 },
  { id: 2, title: '월간 종합 리포트', period: '2024.12.01 ~ 12.31', type: '월간', status: 'ready', users: 52 },
  { id: 3, title: '개인별 상세 리포트', period: '2025.01.01 ~ 01.12', type: '개인', status: 'generating', users: 1 },
  { id: 4, title: '그룹 비교 리포트', period: '2025.01.01 ~ 01.12', type: '그룹', status: 'ready', users: 28 },
];

export default function ReportTab() {
  const [showAlert, setShowAlert] = useState(false);

  const handleNotImplemented = () => setShowAlert(true);

  return (
    <>
      <div className="space-y-6">
        {/* 리포트 생성 섹션 */}
        <div className="bg-gradient-to-r from-[#3182F6] to-[#1B64DA] rounded-[16px] p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">새 리포트 생성</h3>
              <p className="text-blue-100 text-sm">대상자별, 기간별 학습 리포트를 생성하고 관리하세요.</p>
            </div>
            <button
              onClick={handleNotImplemented}
              className="px-6 py-3 bg-white text-[#3182F6] rounded-[10px] font-bold hover:bg-blue-50 transition-colors"
            >
              + 리포트 생성
            </button>
          </div>
        </div>

        {/* 리포트 통계 */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-[16px] border border-gray-200 p-6 shadow-sm">
            <p className="text-sm font-bold text-gray-500 mb-2">생성된 리포트</p>
            <p className="text-3xl font-extrabold text-[#191F28]">156</p>
            <p className="text-xs text-gray-400 mt-1">누적 기준</p>
          </div>
          <div className="bg-white rounded-[16px] border border-gray-200 p-6 shadow-sm">
            <p className="text-sm font-bold text-gray-500 mb-2">이번 주 생성</p>
            <p className="text-3xl font-extrabold text-[#3182F6]">12</p>
            <p className="text-xs text-green-500 mt-1">+4 전주 대비</p>
          </div>
          <div className="bg-white rounded-[16px] border border-gray-200 p-6 shadow-sm">
            <p className="text-sm font-bold text-gray-500 mb-2">다운로드 수</p>
            <p className="text-3xl font-extrabold text-green-500">89</p>
            <p className="text-xs text-gray-400 mt-1">이번 달</p>
          </div>
        </div>

        {/* 리포트 목록 */}
        <div className="bg-white rounded-[16px] border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-base font-bold text-[#191F28]">리포트 목록</h3>
            <div className="flex gap-2">
              <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm">
                <option>전체 유형</option>
                <option>주간</option>
                <option>월간</option>
                <option>개인</option>
                <option>그룹</option>
              </select>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {REPORTS.map((report) => (
              <div key={report.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-[12px] flex items-center justify-center ${
                    report.type === '주간' ? 'bg-blue-100 text-blue-600' :
                    report.type === '월간' ? 'bg-purple-100 text-purple-600' :
                    report.type === '개인' ? 'bg-green-100 text-green-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#191F28]">{report.title}</h4>
                    <p className="text-sm text-gray-400 mt-0.5">{report.period}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">{report.users}명 대상</span>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                    report.status === 'ready' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'
                  }`}>
                    {report.status === 'ready' ? '완료' : '생성 중'}
                  </span>
                  {report.status === 'ready' && (
                    <button
                      onClick={handleNotImplemented}
                      className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-50"
                    >
                      다운로드
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AlertModal
        isOpen={showAlert}
        type="info"
        title="준비 중인 기능입니다"
        description="해당 기능은 현재 개발 중입니다.\n빠른 시일 내에 제공될 예정입니다."
        onClose={() => setShowAlert(false)}
        confirmText="확인"
      />
    </>
  );
}
