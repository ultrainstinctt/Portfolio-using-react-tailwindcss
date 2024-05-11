
import React from "react";
import php from "../assets/php.png"
import c from "../assets/c.png"
import sql from "../assets/sql.png"
import python from "../assets/python.png"
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import java from "../assets/java.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import R from "../assets/R.png";
import prolog from "../assets/prolog.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: java,
      title: "Java",
      style: "shadow-red-400",
    },
    {
      id: 8,
      src: python,
      title: "Python",
      style: "shadow-blue-400",
    },
    {
      id: 9,
      src: sql,
      title: "Sql",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: php,
      title: "php",
      style: "shadow-gray-400",
    },
    {
      id: 11,
      src: c,
      title: "C/C++",
      style: "shadow-gray-400",
    },
    {
      id: 12,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 13,
      src: R,
      title: "R",
      style: "shadow-gray-400",
    },
    {
      id: 14,
      src: prolog,
      title: "Prolog",
      style: "shadow-gray-400",
    },

  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4  border-gray-500">
            Experience
          </p>
          <p className="py-2 my-3">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-7 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;