'use client';

import { LogEntry } from '@/types';
import KPICards from '@/components/dashboard/KPICards';
import Charts from '@/components/dashboard/Charts';
import ActivityLog from '@/components/dashboard/ActivityLog';

interface OverviewTabProps {
  logs: LogEntry[];
}

export default function OverviewTab({ logs }: OverviewTabProps) {
  return (
    <div className="space-y-6">
      <KPICards />
      <Charts />
      <ActivityLog logs={logs} />
    </div>
  );
}
