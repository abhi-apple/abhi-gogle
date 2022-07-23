import React from "react";
// import Loader from 'react-loader-spinner';
// export const Loading = () => {
//   return (
//     <div className='flex justify-center items-center'>
//         <Loader type="Puff" color="#00BFFF" height={550} width={80} />
//     </div>
//   )
// }

import { Audio, BallTriangle, Bars, CradleLoader, Circles, CirclesWithBar, Grid, Hearts, LineWave, MutatingDots, Oval, Plane, Puff, RevolvingDot, RotatingSquare, Rings, TailSpin, ThreeDots, ThreeCircles, Triangle, Watch } from "react-loader-spinner";

export const Loading = () => (
  <div className="flex flex-wrap justify-between items-center hover:py-8 p-8">

    <Puff color="#00BFFF" height={80} width={80} />
    <Oval color="#00BFFF" height={80} width={80} />

    <Circles color="#00BFFF" height={80} width={80} />

    <BallTriangle color="#00BFFF" height={80} width={80} />
    <MutatingDots color="#00BFFF" height={80} width={80} />
    <LineWave color="#00BFFF" height={80} width={80} />
    <RotatingSquare color="#00BFFF" height={80} width={80} />
    <TailSpin color="#00BFFF" height={80} width={80} />
    <ThreeDots color="#00BFFF" height={80} width={80} />
    <ThreeCircles color="#00BFFF" height={80} width={80} />
    <Watch color="#00BFFF" height={80} width={80} />
  </div>
);
