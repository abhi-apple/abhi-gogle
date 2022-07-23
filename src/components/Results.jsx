import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../contexts/ResultContextProvider";
import { Loading } from "./Loading";
export const Results = () => {
  const { getresult, results, searchterm, setsearchterm, isLoading } =
    useResultContext();
  const location = useLocation();
  useEffect(() => {
    if (searchterm) {
      if (location.pathname === "/image") {
        getresult(`${location.pathname}/q=${searchterm}`);
      } else if (location.pathname === "/video") {
        getresult(`${location.pathname}/q=${searchterm}`);
      } else if (location.pathname === "/news") {
        getresult(`${location.pathname}/q=${searchterm}`);
      } else if (location.pathname === "/search") {
        getresult(`${location.pathname}/q=${searchterm}&num=40`);
      }
    }
    // image/q=tesla
    // console.log(results?.image_results)
  }, [searchterm, location.pathname]);
  // console.log(results?.results[2]?.)
  if (isLoading) return <Loading />;
  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.results?.map(({ link, title, description }, index) => (
            <div key={index} className="md:w-2/5 w-full ">
              <a href={link} target="_blank" rel="noreferrer">
                {/* <p className="text-sm">
                {link.length>30 ? link.substring(0,30):link}
              </p> */}
                <p className="text-lg hover:underline hover:font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 dark:text-blue-300 text-blue-700">
                  {title}{" "}
                </p>
                <p className="text-sm dark:text-white-300 ">{description} </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/video":
      return (
        <div className="flex flex-wrap ml-24 pl-5 sm:pl-2 justify-between space-y-6 items-center">
          {results?.results?.map((video, index) => (
            <div key={index} className="p-2">
              <a
                href={video?.additional_links[0]?.href}
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-lg hover:underline hover:font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 dark:text-blue-300 text-blue-700 dark:text-blue-300 text-blue-700">
                {" "}{video.title}
                </p>
              </a>
              {video?.additional_links[0]?.href && (
                <ReactPlayer
                  url={video?.additional_links[0]?.href}
                  controls
                  width="355px"
                  height="200px"
                  className="hover:shadow-2xl"
                />
              )}
            </div>
          ))}
        </div>
      );
    case "/news":
      return (
        <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
          {results?.entries?.map(({ id, links, source, title }) => (
            <div className="md:w-2/5 w-full" key={id}>
              <a
                href={links[0]?.href}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <p className="text-lg dark:text-blue-300 hover:underline hover:font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 text-blue-700">
                  {" "}
                  {title}
                </p>
              </a>
              <div className="flex gap-4">
                <a
                  href={source?.href}
                  target="_blank"
                  className="hover:underline hover:font-semibold hover:text-transparent hover:bg-clip-text   hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500"
                >
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    case "/image":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.image_results?.map(
            ({ image, link: { href, title } }, index) => (
              <a
                className="sm:p-1 p-9"
                href={href}
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                <img  src={image?.src} alt={title} className="hover:shadow-2xl" loading="lazy" />
                <p className="w-36 break-words hover:underline hover:underline hover:font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 text-sm mt-2">
                  {title}
                </p>
              </a>
            )
          )}
        </div>
      );

    default:
      return "";
  }
};
