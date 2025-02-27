import React from 'react';
import {FaGithub,FaLinkedin} from"react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi';
import {BsFilePersonFill}from'react-icons/bs';
 
const SocialLinks = () => {
    const links=[
        {
            id:1,
            child:(<>Linkedin<FaLinkedin size={30}/></>),
            href:'https://www.linkedin.com/in/pratap-bhattacharjee-657496260',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(<>github<FaGithub size={30}/></>),
            href:'https://github.com/ultrainstinctt',
            
        },
        {
            id:3,
            child:(<>Email<HiOutlineMail size={30}/></>),
            href:'mailto:cse.pratap69@gmail.com',
        
        },
        {
            id:4,
            child:(<>Resume<BsFilePersonFill size={30}/></>),
            href:'./Pratap Bhattacharjee.pdf',
            style:'rounded-br-md',
            download: true
        },
        ];



  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

            {links.map(({id,child,href,style,download})=>(
            <li
             key={id} 
             className={
                "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[10px] hover:rounded-md duration-300 bg-#a2abba-800"+
                " "+ 
                style
                 }
              >
            <a href={href} 
            className='flex justify-between items-center w-full text-white'
            download={download} 
            target="_blank"
                rel="noreferrer"
            >
            {child}
            </a>
            </li>
            ))}
           
        </ul>
    </div>
  );
};

export default SocialLinks;