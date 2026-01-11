'use client';

import { useState } from 'react';
import AlertModal from '@/components/widgets/AlertModal';

const GROUPS = [
  { id: 1, name: '수원시 A그룹', members: 12, type: '다문화가정', status: 'active' },
  { id: 2, name: '수원시 B그룹', members: 8, type: '한부모가정', status: 'active' },
  { id: 3, name: '화성시 C그룹', members: 15, type: '경계선 지능', status: 'active' },
  { id: 4, name: '용인시 D그룹', members: 6, type: '다문화가정', status: 'inactive' },
];

export default function UsersGroupTab() {
  const [showAlert, setShowAlert] = useState(false);

  const handleNotImplemented = () => setShowAlert(true);

  return (
    <>
      <div className="space-y-6">
        {/* 헤더 */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-[#191F28]">그룹 관리</h3>
            <p className="text-sm text-gray-500 mt-1">대상자를 그룹별로 묶어 효율적으로 관리하세요.</p>
          </div>
          <button
            onClick={handleNotImplemented}
            className="px-5 py-2.5 bg-[#3182F6] text-white rounded-[10px] text-sm font-bold hover:bg-[#1B64DA] transition-colors"
          >
            + 그룹 생성
          </button>
        </div>

        {/* 그룹 카드 그리드 */}
        <div className="grid grid-cols-2 gap-4">
          {GROUPS.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-[16px] border border-gray-200 p-6 hover:border-[#3182F6] hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold text-[#191F28] text-lg">{group.name}</h4>
                  <p className="text-sm text-gray-400 mt-1">{group.type}</p>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                  group.status === 'active'
                    ? 'bg-green-50 text-green-600'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {group.status === 'active' ? '활성' : '비활성'}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-2">
                  {[...Array(Math.min(group.members, 4))].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-[#3182F6]">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                  {group.members > 4 && (
                    <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500">
                      +{group.members - 4}
                    </div>
                  )}
                </div>
                <span className="text-sm text-gray-500">{group.members}명</span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleNotImplemented}
                  className="flex-1 py-2 border border-gray-200 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50"
                >
                  멤버 관리
                </button>
                <button
                  onClick={handleNotImplemented}
                  className="flex-1 py-2 bg-blue-50 rounded-lg text-xs font-bold text-[#3182F6] hover:bg-blue-100"
                >
                  일괄 알림
                </button>
              </div>
            </div>
          ))}
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
