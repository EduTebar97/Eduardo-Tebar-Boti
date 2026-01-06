interface StatsCardProps {
  title: string;
  value: string | number;
  icon: string;
  color: 'green' | 'yellow' | 'purple';
}

export const StatsCard = ({ title, value, icon, color }: StatsCardProps) => {
  const colorClasses = {
    green: 'bg-green-50 text-green-600',
    yellow: 'bg-yellow-50 text-yellow-600',
    purple: 'bg-purple-50 text-purple-600',
  };

  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      <div>
        <p className="mb-1 text-sm font-medium text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
      </div>
      <div
        className={`flex size-10 items-center justify-center rounded-lg ${colorClasses[color]}`}
      >
        <span className="material-symbols-outlined">{icon}</span>
      </div>
    </div>
  );
};
