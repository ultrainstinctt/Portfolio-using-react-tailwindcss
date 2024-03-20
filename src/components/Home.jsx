import React from 'react';
import me from '../assets/me.jpg';
import {MdKeyboardArrowRight} from"react-icons/md";
import {Link} from 'react-scroll';
 const Home=()=> {

 
  return (
    <div  name="home" 
    className='h-screen w-full bg-gradient-to-b from-green-800 to-red-800'>
      
        <div  className='max-w-screen-lg mx-auto flex flex-col 
        items-center justify-center h-full px-4 md:flex-row'>

            <div className='flex flex-col justify-center h-full'>
                <h6 className='text-2xl sm:text-4xl  text-white'>
                HI,its me
                </h6>
                <h3 className='text-4xl sm:text-7xl font-bold text-white'>PRATAP BHATTACHARJEE</h3>
           
                <p className=' text-white text-2xl sm:text-2xl  py-4 max-w-md '>
                I’m a hard-working, passionate person who believes in the importance of education and accessibility to technological advancements.
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 
                    flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer' >
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdKeyboardArrowRight size={30} className='ml-1' />
                        </span>
                       
                    </Link>
                </div>
            </div>
            <div>
            <img src={me} alt="My profile" className='rounded-2xl mx-auto w-2/3 md:w-full duration-200 hover:scale-105'/>
            
            </div>

        </div>
    </div>
  );
};

export default Home;