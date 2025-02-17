import React from 'react'

const About = () => {
  return (
    <div name="about" className=' w-full h-screen bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... text-white ' >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>A little bit about me!</p>
            </div>

            <p className='text-xl mt-20'>
            I am from <b>Santipur</b>, Dist: Nadia,West Bengal,741404.I completed my schooling from <b>Santipur Municipal High School </b>for secondary & Higher secondary.
            I graduated with a Bachelor of Science in  Computer Science (Honours) from <b>Kanchrapara College</b>, Kanchrapara, West Bengal under the <b>University of Kalyani</b>, Kalyani, West Bengal. I did a Master of Science in Computer Science from the<b> Department of Computer Science and Engineering of University of Kalyani</b>, Nadia, West Bengal.
            I cleared the 26th Wbset exam which is conducted by West Bengal College service commission .

            </p>
                    
         </div>               
                      
    </div>
    
  );
}

export default About;