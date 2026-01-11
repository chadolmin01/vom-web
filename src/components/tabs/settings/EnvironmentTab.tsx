'use client';

interface EnvironmentTabProps {
  onLogout: () => void;
}

export default function EnvironmentTab({ onLogout }: EnvironmentTabProps) {
  return (
    <div className="space-y-6">
      {/* 일반 설정 */}
      <div className="bg-white rounded-[16px] border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-base font-bold text-[#191F28]">일반 설정</h3>
        </div>
        <div className="divide-y divide-gray-100">
          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-[#191F28]">시스템 언어</h4>
              <p className="text-sm text-gray-400 mt-0.5">관리자 대시보드 언어 설정</p>
            </div>
            <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm">
              <option>한국어</option>
              <option>English</option>
            </select>
          </div>
          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-[#191F28]">시간대</h4>
              <p className="text-sm text-gray-400 mt-0.5">데이터 표시 시간대 설정</p>
            </div>
            <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm">
              <option>Asia/Seoul (UTC+9)</option>
              <option>UTC</option>
            </select>
          </div>
          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-[#191F28]">다크 모드</h4>
              <p className="text-sm text-gray-400 mt-0.5">어두운 테마 사용</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3182F6]"></div>
            </label>
          </div>
        </div>
      </div>

      {/* 알림 설정 */}
      <div className="bg-white rounded-[16px] border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-base font-bold text-[#191F28]">알림 설정</h3>
        </div>
        <div className="divide-y divide-gray-100">
          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-[#191F28]">이메일 알림</h4>
              <p className="text-sm text-gray-400 mt-0.5">중요 알림을 이메일로 수신</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3182F6]"></div>
            </label>
          </div>
          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-[#191F28]">브라우저 알림</h4>
              <p className="text-sm text-gray-400 mt-0.5">실시간 알림을 브라우저에서 수신</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3182F6]"></div>
            </label>
          </div>
          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-[#191F28]">긴급 알림 사운드</h4>
              <p className="text-sm text-gray-400 mt-0.5">긴급 알림 시 사운드 재생</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3182F6]"></div>
            </label>
          </div>
        </div>
      </div>

      {/* 데이터 설정 */}
      <div className="bg-white rounded-[16px] border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-base font-bold text-[#191F28]">데이터 설정</h3>
        </div>
        <div className="divide-y divide-gray-100">
          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-[#191F28]">자동 백업</h4>
              <p className="text-sm text-gray-400 mt-0.5">매일 자동으로 데이터 백업</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3182F6]"></div>
            </label>
          </div>
          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-[#191F28]">데이터 보관 기간</h4>
              <p className="text-sm text-gray-400 mt-0.5">오래된 데이터 자동 삭제 기간</p>
            </div>
            <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm">
              <option>1년</option>
              <option>2년</option>
              <option>3년</option>
              <option>영구 보관</option>
            </select>
          </div>
        </div>
      </div>

      {/* 위험 영역 */}
      <div className="bg-red-50 rounded-[16px] border border-red-200 p-6">
        <h3 className="text-base font-bold text-red-600 mb-4">위험 영역</h3>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-bold text-[#191F28]">로그아웃</h4>
            <p className="text-sm text-gray-500 mt-0.5">현재 세션에서 로그아웃합니다.</p>
          </div>
          <button
            onClick={onLogout}
            className="px-6 py-2.5 bg-red-500 text-white rounded-lg text-sm font-bold hover:bg-red-600 transition-colors"
          >
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
}
