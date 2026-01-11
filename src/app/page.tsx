'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

// Chart.js 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

// 타입 정의
interface LogEntry {
  id: string;
  time: string;
  user: string;
  card: {
    name: string;
    type: string;
    bgColor: string;
    textColor: string;
  };
  voice: string;
  status: 'received' | 'pending';
}

// [NEW] 콘텐츠 매핑 데이터 타입
interface ContentMap {
  id: string;
  nfcId: string;
  cardName: string; // 카드 이름 (예: 체온계)
  category: string; // 카테고리 (응급/위생)
  targetUrl: string; // 연결될 영상/음성 URL
  script: string; // TTS 스크립트
  lastUpdated: string;
  status: 'active' | 'inactive';
}

// 샘플 데이터 (로그용)
const users = ['김*미 (다문화)', '이*진 (한부모)', '박*수 (경계선)', '최*영', 'Nguyen (다문화)'];
const cards = [
  { name: '체온계', type: '응급', bgColor: 'bg-red-50', textColor: 'text-red-600' },
  { name: '양치질', type: '위생', bgColor: 'bg-blue-50', textColor: 'text-blue-600' },
  { name: '동화책', type: '정서', bgColor: 'bg-purple-50', textColor: 'text-purple-600' },
  { name: '손씻기', type: '위생', bgColor: 'bg-green-50', textColor: 'text-green-600' },
];
const voices = ['애가.. 아파요..', '치카치카..', '사랑해..', '엄마가.. 해줄게..', '(주변 소음 감지)'];

// [NEW] 콘텐츠 매핑 초기 데이터
const initialContents: ContentMap[] = [
  { id: '1', nfcId: 'NFC_TAG_001', cardName: '체온계', category: '응급', targetUrl: 'https://youtube.com/watch?v=fever_guide', script: '아이가 열이 나나요? 당황하지 마세요.', lastUpdated: '2026.01.10', status: 'active' },
  { id: '2', nfcId: 'NFC_TAG_002', cardName: '해열제', category: '응급', targetUrl: 'https://youtube.com/watch?v=med_guide', script: '빨간색 뚜껑 약병을 찾으세요.', lastUpdated: '2026.01.09', status: 'active' },
  { id: '3', nfcId: 'NFC_TAG_003', cardName: '양치질', category: '위생', targetUrl: 'https://youtube.com/watch?v=brushing', script: '치카치카! 위아래로 닦아주세요.', lastUpdated: '2026.01.05', status: 'active' },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginId, setLoginId] = useState('');
  const [loginPw, setLoginPw] = useState('');
  const [contents, setContents] = useState<ContentMap[]>(initialContents); // 콘텐츠 상태 관리

  const chartRef = useRef<any>(null);

  // 실시간 로그 시뮬레이션 (기존 코드 유지)
  useEffect(() => {
    if (!isLoggedIn) return;
    const addLog = () => {
      const newLog: LogEntry = {
        id: Date.now().toString(),
        time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        user: users[Math.floor(Math.random() * users.length)],
        card: cards[Math.floor(Math.random() * cards.length)],
        voice: voices[Math.floor(Math.random() * voices.length)],
        status: 'received',
      };
      setLogs(prev => [newLog, ...prev].slice(0, 6));
    };
    addLog();
    const interval = setInterval(addLog, 3000);
    return () => clearInterval(interval);
  }, [isLoggedIn]);

  // 차트 데이터
  const lineChartData = {
    labels: ['월', '화', '수', '목', '금', '토', '일'],
    datasets: [{
      label: '참여 가정',
      data: [12, 19, 25, 30, 42, 38, 45],
      borderColor: '#3B82F6',
      backgroundColor: (context: any) => {
        if (!context.chart.chartArea) return 'rgba(59, 130, 246, 0.2)';
        const { ctx, chartArea: { top, bottom } } = context.chart;
        const gradient = ctx.createLinearGradient(0, top, 0, bottom);
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.2)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        return gradient;
      },
      borderWidth: 3,
      tension: 0.4,
      fill: true,
    }],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#9CA3AF' } },
      y: { grid: { color: '#F3F4F6' }, ticks: { color: '#9CA3AF' }, beginAtZero: true }
    }
  };

  const doughnutChartData = {
    labels: ['따라 말하기', '단순 시청'],
    datasets: [{
      data: [72, 28],
      backgroundColor: ['#3B82F6', '#F3F4F6'],
      borderWidth: 0,
      hoverOffset: 4
    }]
  };

  const doughnutChartOptions = {
    cutout: '80%',
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } }
  };

  const handleLogin = () => { if (loginId || loginPw) setIsLoggedIn(true); };

  const [loginType, setLoginType] = useState<'center' | 'admin'>('center');
  const [userType, setUserType] = useState<'multicultural' | 'government'>('multicultural');

  if (!isLoggedIn) {
    return (
      <div className="flex h-screen bg-[#F2F4F6] font-sans text-[#191F28] items-center justify-center">
         <div className="bg-white p-10 rounded-3xl shadow-lg w-96 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="bg-blue-500 text-white rounded-lg w-10 h-10 flex items-center justify-center text-xl font-bold shadow-md">V</span>
              <h2 className="text-2xl font-bold text-gray-900">V.O.M Admin</h2>
            </div>
            <p className="text-gray-500 text-sm mb-6">관리자 대시보드에 로그인하세요</p>
            <input
              type="text"
              placeholder="아이디"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl mb-3 focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={loginPw}
              onChange={(e) => setLoginPw(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl mb-4 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={() => setIsLoggedIn(true)}
              className="w-full bg-blue-500 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors"
            >
              로그인
            </button>
            <p className="text-xs text-gray-400 mt-4">Demo: 아무 값이나 입력 후 로그인</p>
         </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#F2F4F6] font-sans text-[#191F28] overflow-hidden">
      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css');
        body { font-family: 'Pretendard', sans-serif; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* 사이드바 */}
      <aside className="w-[260px] bg-white flex flex-col z-20 border-r border-gray-100 flex-shrink-0 hidden md:flex">
        <div className="h-24 flex items-center px-8">
          <h1 className="text-2xl font-extrabold text-blue-500 tracking-tight flex items-center gap-2">
            <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-lg shadow-md">V</span>
            V.O.M
          </h1>
        </div>

        <nav className="flex-1 px-4 space-y-1.5 py-4">
          {['dashboard', 'users', 'contents', 'voice', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full flex items-center px-5 py-4 rounded-2xl font-bold text-[15px] transition-all ${
                activeTab === tab
                  ? 'bg-blue-50 text-blue-600 shadow-sm'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className="text-lg mr-3 w-6 text-center">
                {tab === 'dashboard' ? '📊' : tab === 'users' ? '👥' : tab === 'contents' ? '📱' : tab === 'voice' ? '🎤' : '⚙️'}
              </span>
              {tab === 'dashboard' ? '대시보드' : tab === 'users' ? '대상자 관리' : tab === 'contents' ? '콘텐츠 매핑' : tab === 'voice' ? '음성 데이터' : '설정'}
            </button>
          ))}
        </nav>

        <div className="p-6 mt-auto">
          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-3xl border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold shadow-sm text-lg">A</div>
            <div>
              <p className="text-sm font-bold text-gray-900">수원시 다문화센터</p>
              <p className="text-xs text-gray-500 font-medium">관리자</p>
            </div>
          </div>
        </div>
      </aside>

      {/* 메인 콘텐츠 */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <header className="h-20 min-h-[80px] flex justify-between items-center px-10 bg-[#F2F4F6] sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
              {activeTab === 'dashboard' ? '학습 현황' : activeTab === 'contents' ? '콘텐츠 매핑 (CMS)' : activeTab === 'users' ? '대상자 관리' : activeTab === 'voice' ? '음성 데이터' : '설정'}
            </h2>
            <p className="text-sm text-gray-500 font-medium mt-0.5">
              {activeTab === 'contents' ? '카드와 교육 내용을 연결합니다.' : '실시간 모니터링 중'}
            </p>
          </div>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="text-sm text-gray-500 hover:text-gray-700 font-medium"
          >
            로그아웃
          </button>
        </header>

        <div className="flex-1 overflow-x-hidden overflow-y-auto px-10 pb-12">

          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div className="animate-[fadeIn_0.4s_ease-out] space-y-8">
              {/* 통계 카드 */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-[24px] shadow-sm">
                  <p className="text-sm text-gray-500 font-medium mb-2">오늘 참여 가정</p>
                  <p className="text-3xl font-extrabold text-gray-900">45</p>
                  <p className="text-xs text-green-500 font-bold mt-1">↑ 12% 증가</p>
                </div>
                <div className="bg-white p-6 rounded-[24px] shadow-sm">
                  <p className="text-sm text-gray-500 font-medium mb-2">총 학습 횟수</p>
                  <p className="text-3xl font-extrabold text-gray-900">1,284</p>
                  <p className="text-xs text-green-500 font-bold mt-1">↑ 8% 증가</p>
                </div>
                <div className="bg-white p-6 rounded-[24px] shadow-sm">
                  <p className="text-sm text-gray-500 font-medium mb-2">음성 참여율</p>
                  <p className="text-3xl font-extrabold text-blue-500">72%</p>
                  <p className="text-xs text-gray-400 font-medium mt-1">목표: 80%</p>
                </div>
                <div className="bg-white p-6 rounded-[24px] shadow-sm">
                  <p className="text-sm text-gray-500 font-medium mb-2">위험 감지</p>
                  <p className="text-3xl font-extrabold text-red-500">3</p>
                  <p className="text-xs text-red-400 font-bold mt-1">즉시 확인 필요</p>
                </div>
              </div>

              {/* 차트 영역 */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-8 rounded-[32px] shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">주간 참여 추이</h3>
                  <div className="h-64">
                    <Line data={lineChartData} options={lineChartOptions} />
                  </div>
                </div>
                <div className="bg-white p-8 rounded-[32px] shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">참여 유형</h3>
                  <div className="h-48 relative">
                    <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-3xl font-extrabold text-blue-500">72%</p>
                        <p className="text-xs text-gray-500">따라 말하기</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 실시간 로그 */}
              <div className="bg-white p-8 rounded-[32px] shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-6">실시간 학습 로그</h3>
                <div className="space-y-3">
                  {logs.map((log) => (
                    <div key={log.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                      <span className="text-sm text-gray-400 font-mono w-20">{log.time}</span>
                      <span className="font-bold text-gray-900 w-32">{log.user}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${log.card.bgColor} ${log.card.textColor}`}>
                        {log.card.name}
                      </span>
                      <span className="text-gray-600 flex-1">"{log.voice}"</span>
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    </div>
                  ))}
                  {logs.length === 0 && (
                    <p className="text-center text-gray-400 py-8">로그를 수신 중입니다...</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Contents Mapping Tab */}
          {activeTab === 'contents' && (
            <div className="animate-[fadeIn_0.4s_ease-out] space-y-8">
              {/* Info Card */}
              <div className="bg-blue-500 text-white p-8 rounded-[32px] shadow-lg shadow-blue-500/20 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">카드 콘텐츠 관리</h3>
                  <p className="opacity-90">하드웨어 교체 없이, 연결된 교육 내용(영상/음성)만 실시간으로 변경할 수 있습니다.</p>
                </div>
                <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              </div>

              {/* Mapping List */}
              <div className="bg-white rounded-[32px] shadow-sm p-10">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-bold text-gray-900">등록된 카드 목록</h3>
                  <button className="px-5 py-2.5 bg-gray-900 text-white rounded-2xl text-sm font-bold hover:bg-gray-800 transition-all shadow-lg active:scale-95">
                    + 새 카드 등록
                  </button>
                </div>

                <div className="grid gap-4">
                  {contents.map((item) => (
                    <div key={item.id} className="group bg-gray-50 hover:bg-white border border-transparent hover:border-blue-100 p-6 rounded-[24px] transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-between">
                      {/* Left: Card Info */}
                      <div className="flex items-center gap-6">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm ${
                          item.category === '응급' ? 'bg-red-100 text-red-500' :
                          item.category === '위생' ? 'bg-blue-100 text-blue-500' : 'bg-green-100 text-green-500'
                        }`}>
                          {item.cardName === '체온계' ? '🌡️' : item.cardName === '해열제' ? '💊' : '🦷'}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-lg font-extrabold text-gray-900">{item.cardName}</h4>
                            <span className="text-[10px] bg-gray-200 text-gray-500 px-2 py-0.5 rounded-md font-mono">{item.nfcId}</span>
                          </div>
                          <p className="text-sm text-gray-500 font-medium truncate w-64">{item.script}</p>
                        </div>
                      </div>

                      {/* Middle: Connection Status */}
                      <div className="hidden md:flex flex-col items-center px-8 border-l border-r border-gray-200">
                        <div className="text-xs font-bold text-gray-400 mb-1">연결 상태</div>
                        <div className="flex items-center gap-2 text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full text-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Active
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex items-center gap-3">
                        <div className="text-right mr-4">
                          <p className="text-xs text-gray-400 font-bold">연결된 콘텐츠</p>
                          <a href={item.targetUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-blue-500 hover:underline">Youtube Link ↗</a>
                        </div>
                        <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-xl hover:text-blue-500 hover:border-blue-200 transition-colors text-sm font-medium">
                          수정
                        </button>
                        <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-xl hover:text-red-500 hover:border-red-200 transition-colors text-sm font-medium">
                          삭제
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Users Tab */}
          {activeTab === 'users' && (
            <div className="animate-[fadeIn_0.4s_ease-out] space-y-8">
              <div className="bg-white p-8 rounded-[32px] shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-6">대상자 목록</h3>
                <div className="space-y-3">
                  {users.map((user, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                        {user[0]}
                      </div>
                      <span className="font-bold text-gray-900 flex-1">{user}</span>
                      <span className="text-sm text-gray-500">최근 접속: 오늘</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Voice Tab */}
          {activeTab === 'voice' && (
            <div className="animate-[fadeIn_0.4s_ease-out] space-y-8">
              <div className="bg-white p-8 rounded-[32px] shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-6">음성 데이터 분석</h3>
                <p className="text-gray-500">음성 데이터 분석 기능은 준비 중입니다.</p>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="animate-[fadeIn_0.4s_ease-out] space-y-8">
              <div className="bg-white p-8 rounded-[32px] shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-6">설정</h3>
                <p className="text-gray-500">설정 페이지는 준비 중입니다.</p>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
