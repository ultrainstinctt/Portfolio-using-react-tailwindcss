import React from "react";
import p from "../assets/portfolio/p.png";
import ocs from "../assets/portfolio/ocs.png";
import todo from "../assets/portfolio/todo.png";
import Screenshotmap from"../assets/portfolio/Screenshotmap.png";
import Screenshotcrud from"../assets/portfolio/Screenshotcrud.png";
//import navbar from "../assets/portfolio/navbar.jpg";
//import reactParallax from "../assets/portfolio/reactParallax.jpg";
//import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
//import reactWeather from "../assets/portfolio/reactWeather.jpg";

import usn from "../assets/portfolio/usn.jpg"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: p,
      demo:'https://pratapb-e308a.web.app/',
      code:'https://github.com/ultrainstinctt/Online-Classroom-System',
      
    },
    {
      id: 2,
      src: ocs,
      demo:'https://pratapb-e308a.web.app/',
      code:'https://pratapb-e308a.web.app/',
    },
    {
      id: 3,
      src: todo,
      demo:'https://pratapb-e308a.web.app/',
      code:'https://pratapb-e308a.web.app/',
    },
    {
      id: 4,
      src: Screenshotmap,
      demo:'https://realtime-tracking-device-7ou3.onrender.com',
      code:'https://github.com/ultrainstinctt/Online-Classroom-System',

    },
    {
      id: 5,
      src: Screenshotcrud,
      demo:'https://crud-using-node-uk4y.onrender.com',
      code:'https://pratapb-e308a.web.app/',
    },
    {
      id: 6,
      src: usn,
      demo:'https://pratapb-e308a.web.app/',
      code:'https://pratapb-e308a.web.app/',
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-2">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 py -2px-12 sm:px-0">
          {portfolios.map(({ id, src,demo,code}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo}><button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button></a>
                <a href={code}><button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button></a>  
              </div>
            
            </div>
          ))}
         
        </div>
        {/* <h1>  ....more</h1> */}
      </div>
    </div>
  );
};

export default Portfolio;