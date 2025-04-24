export default function StatsBar({ hunger, energy }) {
    return (
      <div className="w-full max-w-sm p-4 bg-white rounded shadow-md">
        <div className="mb-2 font-semibold text-sm">Hunger</div>
        <div className="w-full bg-red-200 rounded-full h-4 mb-2">
          <div className="bg-red-500 h-full transition-all" style={{ width: `${hunger}%` }} />
        </div>
  
        <div className="mb-2 font-semibold text-sm">Energy</div>
        <div className="w-full bg-blue-200 rounded-full h-4">
          <div className="bg-blue-500 h-full transition-all" style={{ width: `${energy}%` }} />
        </div>
      </div>
    );
  }
  