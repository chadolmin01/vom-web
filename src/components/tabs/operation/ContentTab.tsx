'use client';

import { useState } from 'react';
import AlertModal from '@/components/widgets/AlertModal';

const CONTENTS = [
  { id: 1, title: '기초 발음 연습 1', category: '발음', level: '초급', duration: '5분', usage: 234, status: 'active' },
  { id: 2, title: '일상 대화 시나리오', category: '대화', level: '중급', duration: '10분', usage: 189, status: 'active' },
  { id: 3, title: '감정 표현 학습', category: '표현', level: '초급', duration: '7분', usage: 156, status: 'active' },
  { id: 4, title: '읽기 연습 동화', category: '읽기', level: '초급', duration: '15분', usage: 312, status: 'active' },
  { id: 5, title: '고급 토론 연습', category: '대화', level: '고급', duration: '20분', usage: 45, status: 'draft' },
];

const CATEGORIES = [
  { name: '발음', count: 24, color: 'bg-blue-500' },
  { name: '대화', count: 18, color: 'bg-purple-500' },
  { name: '표현', count: 15, color: 'bg-green-500' },
  { name: '읽기', count: 12, color: 'bg-orange-500' },
];

export default function ContentTab() {
  const [showAlert, setShowAlert] = useState(false);

  const handleNotImplemented = () => setShowAlert(true);

  return (
    <>
      <div className="space-y-6">
        {/* 콘텐츠 통계 */}
        <div className="grid grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <div key={cat.name} className="bg-white rounded-[16px] border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-3 h-3 ${cat.color} rounded-full`}></div>
                <span className="text-sm font-bold text-gray-500">{cat.name}</span>
              </div>
              <p className="text-3xl font-extrabold text-[#191F28]">{cat.count}</p>
              <p className="text-xs text-gray-400 mt-1">등록된 콘텐츠</p>
            </div>
          ))}
        </div>

        {/* 콘텐츠 목록 */}
        <div className="bg-white rounded-[16px] border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-base font-bold text-[#191F28]">학습 콘텐츠 관리</h3>
            <div className="flex gap-2">
              <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm">
                <option>전체 카테고리</option>
                <option>발음</option>
                <option>대화</option>
                <option>표현</option>
                <option>읽기</option>
              </select>
              <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm">
                <option>전체 레벨</option>
                <option>초급</option>
                <option>중급</option>
                <option>고급</option>
              </select>
              <button
                onClick={handleNotImplemented}
                className="px-4 py-2 bg-[#3182F6] text-white rounded-lg text-sm font-bold hover:bg-[#1B64DA]"
              >
                + 콘텐츠 추가
              </button>
            </div>
          </div>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500">콘텐츠명</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500">카테고리</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500">난이도</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500">소요 시간</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500">이용 횟수</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500">상태</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {CONTENTS.map((content) => (
                <tr key={content.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#3182F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="font-bold text-[#191F28]">{content.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                      content.category === '발음' ? 'bg-blue-50 text-blue-600' :
                      content.category === '대화' ? 'bg-purple-50 text-purple-600' :
                      content.category === '표현' ? 'bg-green-50 text-green-600' :
                      'bg-orange-50 text-orange-600'
                    }`}>
                      {content.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      content.level === '초급' ? 'bg-green-50 text-green-600' :
                      content.level === '중급' ? 'bg-yellow-50 text-yellow-600' :
                      'bg-red-50 text-red-600'
                    }`}>
                      {content.level}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{content.duration}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{content.usage}회</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      content.status === 'active' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {content.status === 'active' ? '활성' : '초안'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={handleNotImplemented}
                        className="text-[#3182F6] text-sm font-bold hover:underline"
                      >
                        수정
                      </button>
                      <button
                        onClick={handleNotImplemented}
                        className="text-gray-400 text-sm font-bold hover:underline"
                      >
                        삭제
                      </button>
                    </div>
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
