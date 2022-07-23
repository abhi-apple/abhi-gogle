import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseurl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setresults] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const [searchterm, setsearchterm] = useState("");

  const getresult = async (type) => {
    setisLoading(true);

    const resp = await fetch(`${baseurl}${type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Key": "ce222f844dmshe102f93562134c4p184e64jsn78b106510366",
      },
    });

    const data=await resp.json();
    console.log(data);
    setresults(data);
    setisLoading(false);

  };

  return (
      <ResultContext.Provider value={{getresult,results,searchterm,setsearchterm,isLoading}}>
          {children}
      </ResultContext.Provider>
  )
};

export const useResultContext=()=>useContext(ResultContext);
