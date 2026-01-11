'use client';

import { Icons } from '../Icons';
import { TabType } from '@/types';

interface SidebarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  onLogout: () => void;
}

const navItems = [
  { id: 'dashboard' as TabType, label: '대시보드', icon: Icons.Dashboard },
  { id: 'users' as TabType, label: '대상자 관리', icon: Icons.Users },
  { id: 'voice' as TabType, label: '음성 데이터', icon: Icons.Voice },
  { id: 'settings' as TabType, label: '설정', icon: Icons.Settings },
];

export default function Sidebar({ activeTab, onTabChange, onLogout }: SidebarProps) {
  return (
    <aside className="w-[260px] bg-[#1B1D25] text-white flex flex-col z-20 shrink-0 shadow-xl">
      {/* 로고 영역 */}
      <div className="h-[72px] flex items-center px-6 border-b border-gray-800/50">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 bg-[#3182F6] rounded-[8px] flex items-center justify-center text-white font-bold text-lg">
            V
          </span>
          <div>
            <h1 className="font-bold text-lg leading-none tracking-tight">V.O.M</h1>
            <span className="text-[10px] text-gray-500 font-medium tracking-wide">ADMIN CONSOLE</span>
          </div>
        </div>
      </div>

      {/* 네비게이션 */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`w-full flex items-center px-3 py-3 rounded-[8px] text-[14px] font-medium transition-all group ${
              activeTab === item.id
                ? 'bg-[#3182F6] text-white shadow-md shadow-blue-900/20'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <span className={`mr-3 transition-colors ${activeTab === item.id ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>
              <item.icon />
            </span>
            {item.label}
          </button>
        ))}
      </nav>

      {/* 하단 프로필 */}
      <div className="p-4 bg-[#14161C] border-t border-gray-800/50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center text-xs font-bold text-gray-300">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-gray-200 truncate">수원시 다문화센터</p>
            <p className="text-xs text-gray-500 truncate">관리자 권한</p>
          </div>
          <button
            onClick={onLogout}
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Icons.Logout />
          </button>
        </div>
      </div>
    </aside>
  );
}
