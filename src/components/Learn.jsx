import React from "react";

const Learn = () => {
  const levels = Array.from({ length: 8 }, (_, i) => `Level ${i + 1}`);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {levels.map((level) => (
        <div
          key={level}
          className="bg-blue-200 text-blue-700 rounded-xl flex items-center justify-center h-40 font-bold text-xl select-none"
        >
          {level}
        </div>
      ))}
    </div>
  );
};

export default Learn;
