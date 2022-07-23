import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";
// import {Link} from 'react-router-dom'
export const Navbar = ({ darktheme, setdarktheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center border-b dark:border-gray-700 border:gray-900 ">
      <div className="flex justify-between items-center spcae-x-5 w-screen">
        <Link to="/">
          <p className="text-3xl  dark:bg-gradient-to-r  dark:from-indigo-200 dark:via-red-200 dark:to-yellow-100 font-bold text-white py-2 px-3 rounded-full  dark:text-gray-900  bg-gradient-to-l from-slate-800 via-violet-600 to-rose-600    hover:bg-conic-to-tl hover:from-violet-800 hover:via-amber-500 hover:to-sky-900 hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 bg-blue-500 shadow-lg shadow-blue-500/50">
            Gogle ✯
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setdarktheme(!darktheme)}
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white  rounded-full px-6 py-1 hover:shadow-lg"
        >
          {darktheme ? "🌝Light" : "Dark🌚"}{" "}
        </button>
      </div>
      <Search />
    </div>
  );
};
