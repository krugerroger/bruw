export default function SummaryRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <div className="w-5 flex-shrink-0">{icon}</div>
      <p className="text-gray-400 text-sm w-24 flex-shrink-0">{label}</p>
      <p className="text-white text-sm flex-1">{value}</p>
    </div>
  );
}
