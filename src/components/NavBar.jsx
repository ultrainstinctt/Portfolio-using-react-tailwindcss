import React, { useState } from 'react'
import {FaBars,FaTimes}from "react-icons/fa";
import { Link } from 'react-scroll';
import { useTypewriter } from 'react-simple-typewriter';

const NavBar=()=> {
    const [nav,setnav]=useState(false);
    const [typeEffect] = useTypewriter({
        words:['Pratap Bhattacharjee  '],
        loop:true,
        typeSpeed:100,
        deleteSpeed:40
    })
    

    const links=[
        {
            id:1,
            link:'home'
            
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'portfolio'
        },
        {
            id:4,
           link:'experience'
        },
        {
           id:5,
            link:'gallery'
             
        },
        {
            id:6,
            link:'contact'
              
         },
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 px-5 text-white bg-gradient-to-r from-pink-400 to-yellow-500 bg-green-900 fixed z-10'>
        <div className=''>
            <h1 className='text-4xl font-signature ml-2 t'><span>{typeEffect}</span></h1>
        </div>

        <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
                    
                    <li key ={id} className=' # px-4 cursor-pointer capitalize font-medium text-white-500 hover:scale-105 duration-200'>
                       <Link to={link} smooth duration={500}>{link}</Link> 
                    </li>
            
                ))}
        </ul>

        <div onClick={()=>setnav(!nav)}className='cursor-pointer pr-4 z-10 text-white-500 md:hidden'>
            {nav ? <FaTimes size={30}/> :<FaBars size={30}/>}
        </div>


        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-red-800 to-green-800 text-white-500'>
               
               
            {links.map(({id,link})=>(
                    
                    <li key ={link.id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                  <Link onClick={()=>setnav(!nav)}to={link} smooth duration={500}>{link}</Link> 
                   
                    </li>
            
                ))}
               {/*<li className='px-4 cursor-pointer capitalize-py-6 text-4xl'>
                    home
            </li>*/}
                 
            </ul>
            )}

    </div>
  );
};

export default NavBar;