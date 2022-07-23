// import React from 'react'
// import {   Redirect } from 'react-router-dom';
// import { Results } from './Results';
// import { Router,  Route, Routes } from 'react-router-dom'

// export const Routes = () => {
//   return (
//     <div className='p-4'>
//         <Routes>
//           <Route path='/'>
//             <Redirect to="/search"/>
//           </Route>
//           <Route path='/search' element={<Results/>}/>
//           <Route path='/images' element={<Results/>}/>
//           <Route path='/news' element={<Results/>}/>
//           <Route path='/videos' element={<Results/>}/>
//           <Route path='/search' element={<Results/>}/>
//         </Routes>
//     </div>
//   )
// }

import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Results } from "./Results";

export const Routers = () => (
  <div className="p-4">
    {/* <Switch>
      <Route exact path="/">
        <Redirect to="/search" />
      </Route>
      <Route exact path="/search">
        <Results />
      </Route>
      <Route path="/images">
        <Results />
      </Route>
      <Route path="/news">
        <Results />
      </Route>
      <Route path="/videos">
        <Results />
      </Route>

    </Switch> */}
    <Routes>
      <Route exact path="/" element={<Results />} />
      <Route exact path="/search" element={<Results />} />
      <Route exact path="/image" element={<Results />} />
      <Route exact path="/news" element={<Results />} />
      <Route exact path="/video" element={<Results />} />
    </Routes>
  </div>
);
