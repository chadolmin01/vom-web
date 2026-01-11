'use client';

import { KPI_DATA } from '@/constants';

export default function KPICards() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {KPI_DATA.map((item, i) => (
        <div
          key={i}
          className={`bg-white p-6 rounded-[16px] border ${
            item.alert ? 'border-red-100 bg-red-50/20' : 'border-gray-200'
          } shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:translate-y-[-2px] transition-transform duration-200`}
        >
          <p className="text-sm font-bold text-[#6B7684] mb-3">{item.title}</p>
          <div className="flex items-baseline gap-1">
            <h3 className={`text-4xl font-extrabold ${item.alert ? 'text-red-600' : 'text-[#191F28]'}`}>
              {item.value}
            </h3>
            <span className="text-base font-medium text-[#8B95A1]">{item.unit}</span>
          </div>
          <div className={`mt-3 text-sm font-bold ${item.isUp ? 'text-blue-500' : 'text-red-500'} flex items-center`}>
            {item.change}
          </div>
        </div>
      ))}
    </div>
  );
}
