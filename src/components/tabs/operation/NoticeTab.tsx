'use client';

const NOTICES = [
  { id: 1, title: '시스템 점검 안내', content: '1월 15일 오전 2시~4시 시스템 점검이 예정되어 있습니다.', type: '공지', date: '2025-01-12', views: 156, status: 'published' },
  { id: 2, title: '새해 첫 학습 이벤트', content: '1월 한 달간 매일 학습 시 추가 포인트를 드립니다.', type: '이벤트', date: '2025-01-01', views: 423, status: 'published' },
  { id: 3, title: '앱 업데이트 안내', content: '버전 2.1.0 업데이트가 출시되었습니다.', type: '업데이트', date: '2024-12-28', views: 289, status: 'published' },
  { id: 4, title: '설 연휴 운영 안내', content: '설 연휴 기간 고객센터 운영 시간 안내', type: '공지', date: '2025-01-20', views: 0, status: 'scheduled' },
];

const NOTIFICATIONS = [
  { id: 1, title: '학습 리마인더', target: '전체 대상자', type: 'push', scheduledAt: '매일 오전 9시', status: 'active' },
  { id: 2, title: '주간 리포트 알림', target: '보호자', type: 'email', scheduledAt: '매주 월요일 오전 10시', status: 'active' },
  { id: 3, title: '미접속 알림', target: '7일 미접속자', type: 'sms', scheduledAt: '자동', status: 'active' },
];

export default function NoticeTab() {
  return (
    <div className="space-y-6">
      {/* 공지사항 섹션 */}
      <div className="bg-white rounded-[16px] border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-base font-bold text-[#191F28]">공지사항 관리</h3>
          <button className="px-4 py-2 bg-[#3182F6] text-white rounded-lg text-sm font-bold hover:bg-[#1B64DA]">
            + 공지 작성
          </button>
        </div>
        <div className="divide-y divide-gray-100">
          {NOTICES.map((notice) => (
            <div key={notice.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center gap-4 flex-1">
                <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                  notice.type === '공지' ? 'bg-blue-50 text-blue-600' :
                  notice.type === '이벤트' ? 'bg-purple-50 text-purple-600' :
                  'bg-green-50 text-green-600'
                }`}>
                  {notice.type}
                </span>
                <div className="flex-1">
                  <h4 className="font-bold text-[#191F28]">{notice.title}</h4>
                  <p className="text-sm text-gray-400 mt-0.5 truncate max-w-[400px]">{notice.content}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-sm text-gray-400">{notice.date}</span>
                <span className="text-sm text-gray-500">{notice.views} 조회</span>
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                  notice.status === 'published' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'
                }`}>
                  {notice.status === 'published' ? '게시됨' : '예약됨'}
                </span>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 자동 알림 설정 */}
      <div className="bg-white rounded-[16px] border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <div>
            <h3 className="text-base font-bold text-[#191F28]">자동 알림 설정</h3>
            <p className="text-sm text-gray-400 mt-1">대상자에게 자동으로 발송되는 알림을 관리합니다.</p>
          </div>
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-50">
            + 알림 추가
          </button>
        </div>
        <div className="divide-y divide-gray-100">
          {NOTIFICATIONS.map((noti) => (
            <div key={noti.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center ${
                  noti.type === 'push' ? 'bg-blue-100 text-blue-600' :
                  noti.type === 'email' ? 'bg-purple-100 text-purple-600' :
                  'bg-green-100 text-green-600'
                }`}>
                  {noti.type === 'push' ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  ) : noti.type === 'email' ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-[#191F28]">{noti.title}</h4>
                  <p className="text-sm text-gray-400">{noti.target} · {noti.scheduledAt}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                  noti.status === 'active' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'
                }`}>
                  {noti.status === 'active' ? '활성' : '비활성'}
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked={noti.status === 'active'} />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3182F6]"></div>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
