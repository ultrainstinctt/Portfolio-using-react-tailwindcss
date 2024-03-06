import React from "react";
import p from "../assets/portfolio/p.png";
//import installNode from "../assets/portfolio/installNode.jpg";
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
      src: usn,
      demo:'https://pratapb-e308a.web.app/',
      code:'https://pratapb-e308a.web.app/',
    },
    {
      id: 3,
      src: usn,
      demo:'https://pratapb-e308a.web.app/',
      code:'https://pratapb-e308a.web.app/',
    },
    {
      id: 4,
      src: usn,
      demo:'https://pratapb-e308a.web.app/',
      code:'https://github.com/ultrainstinctt/Online-Classroom-System',

    },
    {
      id: 5,
      src: usn,
      demo:'https://pratapb-e308a.web.app/',
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
      className="bg-gradient-to-b from-green-800 to-red-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
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
      </div>
    </div>
  );
};

export default Portfolio;