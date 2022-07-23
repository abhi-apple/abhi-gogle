import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "🔎 All" },
  { url: "/image", text: "📱 Images" },
  { url: "/video", text: "📺 Videos" },
  { url: "/news", text: "📰 News" },
];
export const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-1 ml-18">
      {links.map(({ url, text }) => (
        <NavLink
          to={url}
          activeClassName="selected"
          className=" pl-5 flex flex-wrap dark:text-white m-10 mb-0 tracking-wide text-black border-blue-700 pb-3"
        >
          {/* <p className="rounded-full bg-white p-3 border-2 border-blue-500 bg-cyan-100 shadow-lg shadow-cyan-100/50 ">{text} </p> */}
          <p className="rounded-full  p-2    hover:bg-gradient-to-r from-cyan-500 to-blue-500  ">{text} </p>
        </NavLink>
      ))}
    </div>
  );
};
