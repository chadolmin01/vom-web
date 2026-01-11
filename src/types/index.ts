// 공통 타입 정의
export interface LogEntry {
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

export interface KPIItem {
  title: string;
  value: string;
  unit: string;
  change: string;
  isUp: boolean;
  alert?: boolean;
}

export interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType;
}

export type TabType = 'dashboard' | 'users' | 'voice' | 'settings';
export type LoginType = 'center' | 'admin';
export type UserType = 'multicultural' | 'government';
