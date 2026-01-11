'use client';

const DEVICES = [
  { id: 1, name: 'VOM-001', type: 'NFC 리더기', location: '수원시 A센터', status: 'online', battery: 95, lastSync: '방금 전' },
  { id: 2, name: 'VOM-002', type: 'NFC 리더기', location: '수원시 B센터', status: 'online', battery: 78, lastSync: '5분 전' },
  { id: 3, name: 'VOM-003', type: 'NFC 리더기', location: '화성시 C센터', status: 'offline', battery: 12, lastSync: '3시간 전' },
  { id: 4, name: 'VOM-004', type: 'NFC 리더기', location: '용인시 D센터', status: 'online', battery: 100, lastSync: '1분 전' },
  { id: 5, name: 'VOM-005', type: 'NFC 리더기', location: '수원시 A센터', status: 'maintenance', battery: 45, lastSync: '1일 전' },
];

export default function DeviceTab() {
  return (
    <div className="space-y-6">
      {/* 기기 상태 요약 */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-[16px] border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm font-bold text-gray-500">온라인</span>
          </div>
          <p className="text-3xl font-extrabold text-green-600">24</p>
        </div>
        <div className="bg-white rounded-[16px] border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-sm font-bold text-gray-500">오프라인</span>
          </div>
          <p className="text-3xl font-extrabold text-red-600">3</p>
        </div>
        <div className="bg-white rounded-[16px] border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-sm font-bold text-gray-500">점검 중</span>
          </div>
          <p className="text-3xl font-extrabold text-yellow-600">2</p>
        </div>
        <div className="bg-white rounded-[16px] border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-sm font-bold text-gray-500">배터리 부족</span>
          </div>
          <p className="text-3xl font-extrabold text-orange-600">4</p>
        </div>
      </div>

      {/* 기기 목록 */}
      <div className="bg-white rounded-[16px] border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-base font-bold text-[#191F28]">IoT 기기 목록</h3>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-50">
              전체 동기화
            </button>
            <button className="px-4 py-2 bg-[#3182F6] text-white rounded-lg text-sm font-bold hover:bg-[#1B64DA]">
              + 기기 등록
            </button>
          </div>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500">기기명</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500">유형</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500">설치 위치</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500">상태</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500">배터리</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500">마지막 동기화</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500">관리</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {DEVICES.map((device) => (
              <tr key={device.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[10px] bg-blue-50 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#3182F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <span className="font-bold text-[#191F28]">{device.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{device.type}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{device.location}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                    device.status === 'online' ? 'bg-green-50 text-green-600' :
                    device.status === 'offline' ? 'bg-red-50 text-red-600' :
                    'bg-yellow-50 text-yellow-600'
                  }`}>
                    {device.status === 'online' ? '온라인' :
                     device.status === 'offline' ? '오프라인' : '점검 중'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          device.battery >= 50 ? 'bg-green-500' :
                          device.battery >= 20 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${device.battery}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600">{device.battery}%</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{device.lastSync}</td>
                <td className="px-6 py-4">
                  <button className="text-[#3182F6] text-sm font-bold hover:underline">
                    상세보기
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
