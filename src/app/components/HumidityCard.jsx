import React from "react";

export default function HumidityCard({ value }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center justify-center text-center">
      <h3 className="text-sm font-semibold text-gray-700 mb-2">Humidity</h3>
      <div className="text-3xl font-bold text-blue-500 mb-2">{value}%</div>
      <div className="flex items-center justify-center space-x-1 text-xs text-gray-500">
        <div className="text-center">
          <div className="w-2 h-2 rounded-full bg-blue-400 mx-auto mb-1"></div>
          <span>1H</span>
        </div>
        <div className="text-center">
          <div className="w-2 h-2 rounded-full bg-blue-400 mx-auto mb-1"></div>
          <span>1D</span>
        </div>
        <div className="text-center">
          <div className="w-2 h-2 rounded-full bg-blue-400 mx-auto mb-1"></div>
          <span>1W</span>
        </div>
        <div className="text-center">
          <div className="w-2 h-2 rounded-full bg-blue-400 mx-auto mb-1"></div>
          <span>1M</span>
        </div>
      </div>
    </div>
  );
}
