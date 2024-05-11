import React from 'react'

const About = () => {
  return (
    <div name="about" className=' w-full h-screen bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... text-white ' >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>A little bit about me!</p>
            </div>

            <p className='text-xl mt-20'>
            HI! Myself Pratap Bhattacharjee, I completed my Master of Science degree in Computer Science 
            from Department of Computer Science And Engineering ,University Of Kalyani in 2023.
            My interest in Web & software Development,Artificial Intelligence,Machine Learning and new technology.
            Now I am seeking an opportunity where I can use my experience and education to help the 
            company meet and surpass its goals.


            </p>
                    
         </div>               
                      
    </div>
    
  );
}

export default About;