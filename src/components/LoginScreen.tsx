'use client';

import { useState } from 'react';
import { FONT_STYLE } from '@/constants';
import { LoginType, UserType } from '@/types';

interface LoginScreenProps {
  onLogin: () => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [loginId, setLoginId] = useState('');
  const [loginPw, setLoginPw] = useState('');
  const [loginType, setLoginType] = useState<LoginType>('center');
  const [userType, setUserType] = useState<UserType>('multicultural');

  const handleLogin = () => {
    if (loginId && loginPw) {
      onLogin();
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden" style={FONT_STYLE}>
      {/* 왼쪽: 브랜드 및 비주얼 (Dark Theme) */}
      <div className="hidden lg:flex w-5/12 bg-[#1B1D25] relative flex-col justify-center px-20">
        <div className="relative z-10">
          <div className="w-12 h-12 bg-[#3182F6] rounded-[14px] flex items-center justify-center text-white font-bold text-xl mb-8 shadow-lg shadow-blue-500/30">
            V
          </div>
          <h1 className="text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Voice of Mom<br />
            <span className="text-blue-500">Admin Portal</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            다문화 가정과 취약계층을 위한<br />
            지능형 언어 교육 통합 관리 시스템
          </p>

          {/* 신뢰 요소 */}
          <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Service Stable
            </span>
            <span className="w-px h-3 bg-gray-700"></span>
            <span>Secure Connection</span>
          </div>
        </div>

        {/* 배경 패턴 효과 */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600 rounded-full blur-[100px]"></div>
        </div>
      </div>

      {/* 오른쪽: 로그인 폼 (Light Theme) */}
      <div className="flex-1 flex items-center justify-center bg-white px-8">
        <div className="w-full max-w-[440px]">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#191F28] mb-2">로그인</h2>
            <p className="text-[#8B95A1]">관리자 계정 정보를 입력해주세요.</p>
          </div>

          {/* 탭 네비게이션 */}
          <div className="flex p-1 bg-[#F2F4F6] rounded-[12px] mb-8">
            <button
              onClick={() => setLoginType('center')}
              className={`flex-1 py-3 text-sm font-bold rounded-[8px] transition-all ${
                loginType === 'center'
                  ? 'bg-white text-[#191F28] shadow-sm'
                  : 'text-[#8B95A1] hover:text-[#6B7684]'
              }`}
            >
              센터 담당자
            </button>
            <button
              onClick={() => setLoginType('admin')}
              className={`flex-1 py-3 text-sm font-bold rounded-[8px] transition-all ${
                loginType === 'admin'
                  ? 'bg-white text-[#191F28] shadow-sm'
                  : 'text-[#8B95A1] hover:text-[#6B7684]'
              }`}
            >
              관리기관
            </button>
          </div>

          <div className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-[#4E5968]">아이디</label>
              <input
                type="text"
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
                className="w-full px-4 py-3.5 bg-white border border-[#E5E8EB] rounded-[12px] text-[#191F28] placeholder-[#B0B8C1] focus:border-[#3182F6] focus:ring-1 focus:ring-[#3182F6] outline-none transition-all"
                placeholder="admin"
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-[#4E5968]">비밀번호</label>
              <input
                type="password"
                value={loginPw}
                onChange={(e) => setLoginPw(e.target.value)}
                className="w-full px-4 py-3.5 bg-white border border-[#E5E8EB] rounded-[12px] text-[#191F28] placeholder-[#B0B8C1] focus:border-[#3182F6] focus:ring-1 focus:ring-[#3182F6] outline-none transition-all"
                placeholder="1234"
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>

            {/* 기관 선택 라디오 */}
            <div className="flex gap-6 py-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${userType === 'multicultural' ? 'border-[#3182F6]' : 'border-[#E5E8EB] group-hover:border-[#B0B8C1]'}`}>
                  {userType === 'multicultural' && <div className="w-2.5 h-2.5 rounded-full bg-[#3182F6]"></div>}
                </div>
                <input type="radio" name="type" className="hidden" onClick={() => setUserType('multicultural')} />
                <span className={`text-sm ${userType === 'multicultural' ? 'text-[#191F28] font-bold' : 'text-[#6B7684]'}`}>다문화센터</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${userType === 'government' ? 'border-[#3182F6]' : 'border-[#E5E8EB] group-hover:border-[#B0B8C1]'}`}>
                  {userType === 'government' && <div className="w-2.5 h-2.5 rounded-full bg-[#3182F6]"></div>}
                </div>
                <input type="radio" name="type" className="hidden" onClick={() => setUserType('government')} />
                <span className={`text-sm ${userType === 'government' ? 'text-[#191F28] font-bold' : 'text-[#6B7684]'}`}>협력기관</span>
              </label>
            </div>

            <button
              onClick={handleLogin}
              className="w-full mt-4 py-4 bg-[#3182F6] text-white rounded-[12px] font-bold text-base hover:bg-[#1B64DA] transition-colors shadow-lg shadow-blue-500/20 active:scale-[0.98]"
            >
              로그인
            </button>
          </div>

          <p className="mt-8 text-center text-xs text-[#8B95A1]">
            계정 관련 문의: help@vom.com
          </p>
        </div>
      </div>
    </div>
  );
}
