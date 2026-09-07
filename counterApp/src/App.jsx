import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex justify-center items-center min-h-screen bg-white-400">
      <div className=" text-center p-10 shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-2xl bg-red-100">
        <div className="text-4xl font-extrabold tracking-wide text-gray-800 drop-shadow-md">
          Counter App
        </div>

        <div
          className={`text-6xl font-bold m-10 ${count > 0 ? "text-green-600" : count < 0 ? "text-red-600" : "text-gray-600"}`}
        >
          {count}
        </div>

        <div className="flex gap-3 justify-center">
          <button
            className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            onClick={() => setCount(count - 1)}
          >
            Dec
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white-500 px-4 py-2 rounded-lg"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white-500 px-4 py-2 rounded-lg"
            onClick={() => setCount(count + 1)}
          >
            Inc
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
