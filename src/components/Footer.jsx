import React from "react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="text-center p-2 mt-10 border-t dark:border-gray-700 border-gray-400">
      <Link to="/">
        {/* <p className="text-3xl  dark:bg-gradient-to-r  dark:from-indigo-200 dark:via-red-200 dark:to-yellow-100 font-bold text-white py-2 px-3 rounded-full  dark:text-gray-900  bg-gradient-to-l from-slate-800 via-violet-600 to-rose-600    hover:bg-conic-to-tl hover:from-violet-800 hover:via-amber-500 hover:to-sky-900 hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 bg-blue-500 shadow-lg shadow-blue-500/50">
          Gogle ✯
        </p> */}
        <p className="text-center p-2 mt-10 hover:underline border-t dark:border-gray-700 border-gray-400">
        <h1>2022 Google, Inc.</h1>
        </p>
      </Link>
      {/* <h1>2022 Google, Inc.</h1> */}
    </div>
  );
};
