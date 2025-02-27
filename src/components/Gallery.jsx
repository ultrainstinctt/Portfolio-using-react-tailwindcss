import React from 'react'


import holi from "../assets/portfolio/holi.jpg";
import voyage from "../assets/portfolio/voyage.jpg";
import deptcse from "../assets/portfolio/deptcse.jpg";
import picnic1 from "../assets/portfolio/picnic1.jpg";
import picnic from "../assets/portfolio/picnic.jpg";
import dcss from "../assets/portfolio/dcss.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Gallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    autoPlay:true,
    
  
  };
  return (
    <div   name="gallery" className="w-full h-screen bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... p-4 text-white">
        <div className='max-w-screen-lg p-4 mt-12 mx-auto flex flex-col justify-center w-full h-full'>
          <div className="pb-4">
            <p className="text-4xl font-bold inline border-b-4  border-gray-500">
              Gallery
            </p>
            <p className="py-2 ">Check out some of my Picture here</p>
          </div>
        <div className='justify-center items-center w-full'>
              <Slider {...settings}>
                {Data.map(({name,name1,img})=>(
                  <div className=' text-black rounded-xl'>
                    <div className='rounded-2xl py-1'>
                      <img src={img} alt={name1}className=' rounded-2xl mx-auto md:w-full h-50 duration-200 hover:scale-105'/>
                    </div>

                    <div className='pb-2'>
                      <p className='mt-1 text-2xl flex justify-center text-white items-center font-signature '>{name}</p>
                      {/*<button>readmore</button>*/}
                    
                    </div>
                  </div>
                ))}
        </Slider>

  </div>

        </div>

    </div>
  );
};
const Data=[

  {
    name:`Previous Holi celebration`,
    name1:``,
    img:holi,},
  {
    name:`Voyage`,
    img:voyage,
    name1:``,
  },
   
  {
    name:`KUCSE`,
    img:deptcse,
    name1:``,
  },
  {
    name:`Picnic`,
    img:picnic1,
    name1:``,
  },
  {
    name:`College Friend Picnic`,
    img:picnic,
    name1:``,
  },
  {
    name:`KUCSE`,
    img:dcss,
    name1:``,
  },
]

export default Gallery;

