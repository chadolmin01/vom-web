'use client';

import { useState } from 'react';
import AlertModal from '@/components/widgets/AlertModal';

const VOICE_DATA = [
  { id: 1, user: '김민수', date: '2025-01-12', duration: '2분 34초', words: 156, emotion: '긍정', accuracy: 92 },
  { id: 2, user: '이영희', date: '2025-01-12', duration: '1분 48초', words: 98, emotion: '중립', accuracy: 88 },
  { id: 3, user: '박철수', date: '2025-01-11', duration: '3분 12초', words: 203, emotion: '긍정', accuracy: 95 },
  { id: 4, user: '정수진', date: '2025-01-11', duration: '2분 05초', words: 134, emotion: '부정', accuracy: 78 },
  { id: 5, user: '최동현', date: '2025-01-10', duration: '1분 22초', words: 67, emotion: '긍정', accuracy: 91 },
];

export default function VoiceDataTab() {
  const [showAlert, setShowAlert] = useState(false);

  const handleNotImplemented = () => setShowAlert(true);

  return (
    <>
      <div className="space-y-6">
        {/* 통계 카드 */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white rounded-[16px] border border-gray-200 p-6 shadow-sm">
            <p className="text-sm font-bold text-gray-500 mb-2">총 음성 데이터</p>
            <p className="text-3xl font-extrabold text-[#191F28]">1,234</p>
            <p className="text-xs text-green-500 mt-1">+12% 전월 대비</p>
          </div>
          <div className="bg-white rounded-[16px] border border-gray-200 p-6 shadow-sm">
            <p className="text-sm font-bold text-gray-500 mb-2">평균 발화 시간</p>
            <p className="text-3xl font-extrabold text-[#3182F6]">2분 15초</p>
            <p className="text-xs text-gray-400 mt-1">세션당 평균</p>
          </div>
          <div className="bg-white rounded-[16px] border border-gray-200 p-6 shadow-sm">
            <p className="text-sm font-bold text-gray-500 mb-2">평균 정확도</p>
            <p className="text-3xl font-extrabold text-green-500">89%</p>
            <p className="text-xs text-green-500 mt-1">+3% 향상</p>
          </div>
          <div className="bg-white rounded-[16px] border border-gray-200 p-6 shadow-sm">
            <p className="text-sm font-bold text-gray-500 mb-2">긍정 발화 비율</p>
            <p className="text-3xl font-extrabold text-orange-500">72%</p>
            <p className="text-xs text-gray-400 mt-1">전체 발화 기준</p>
          </div>
        </div>

        {/* 음성 데이터 테이블 */}
        <div className="bg-white rounded-[16px] border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-base font-bold text-[#191F28]">음성 데이터 목록</h3>
            <div className="flex gap-2">
              <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm">
                <option>전체 감정</option>
                <option>긍정</option>
                <option>중립</option>
                <option>부정</option>
              </select>
              <button
                onClick={handleNotImplemented}
                className="px-4 py-2 bg-[#3182F6] text-white rounded-lg text-sm font-bold hover:bg-[#1B64DA]"
              >
                데이터 내보내기
              </button>
            </div>
          </div>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500">대상자</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500">날짜</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500">발화 시간</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500">단어 수</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500">감정 분석</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500">정확도</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500">작업</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {VOICE_DATA.map((data) => (
                <tr key={data.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm font-bold text-[#3182F6]">
                        {data.user.charAt(0)}
                      </div>
                      <span className="font-bold text-[#191F28]">{data.user}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{data.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{data.duration}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{data.words}개</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      data.emotion === '긍정' ? 'bg-green-50 text-green-600' :
                      data.emotion === '부정' ? 'bg-red-50 text-red-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {data.emotion}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            data.accuracy >= 90 ? 'bg-green-500' :
                            data.accuracy >= 80 ? 'bg-blue-500' :
                            'bg-orange-500'
                          }`}
                          style={{ width: `${data.accuracy}%` }}
                        />
                      </div>
                      <span className="text-sm font-bold text-gray-600">{data.accuracy}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={handleNotImplemented}
                      className="text-[#3182F6] text-sm font-bold hover:underline"
                    >
                      재생
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
