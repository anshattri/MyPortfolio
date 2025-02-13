// import SectionHeading from '@/components/Helper/SectionHeading'
// import { aboutInfo } from '@/Data/data'
// import React from 'react'
// import { FaCheck } from 'react-icons/fa'

// const About = () => {
//   return (
//     <div className='pt-16 pb-16 bg-[#050709]'>
//         {/* Section Heading */}
//         <SectionHeading>About Me</SectionHeading>
//         <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20'>
//                 {/* Text Content */}
//             <div>
//                 <h1 className='text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font bold text-gray-200'>{aboutInfo.title}</h1>
//                 <p className='mt-6 text-base text-gray-500'>{aboutInfo.description}</p>

//                 <div className='mt-8'>
//                     <div className='flex items-center space-x-2 mb-6'>
//                         <div className='w-7 h-7 bg-blue-800 flex flex-col items-center justify-center'>
//                             <FaCheck className='text-white' />
//                         </div>
//                         <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>Frontent Development</p>
//                     </div>
//                 </div>

//                 <div className='mt-8'>
//                     <div className='flex items-center space-x-2 mb-6'>
//                         <div className='w-7 h-7 bg-orange-800 flex flex-col items-center justify-center'>
//                             <FaCheck className='text-white' />
//                         </div>
//                         <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>Backend Development</p>
//                     </div>
//                 </div>

//                 <div className='mt-8'>
//                     <div className='flex items-center space-x-2 mb-6'>
//                         <div className='w-7 h-7 bg-green-800 flex flex-col items-center justify-center'>
//                             <FaCheck className='text-white' />
//                         </div>
//                         <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>Full Stack Development</p>
//                     </div>
//                 </div>
//             </div>

//                 {/* Start Content */}
//             <div className="w-full h-64 flex justify-center items-center">
//                 <div className="w-24 h-24 rounded-full bg-blue-500 group hover:stroke-pink-50">JS</div>
//             </div>

//         </div>
//     </div>
//   )
// }

// export default About




















'use client';

import SectionHeading from '@/components/Helper/SectionHeading';
import { aboutInfo } from '@/Data/data';
import { div } from 'framer-motion/client';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

const About = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]' >
      {/* Section Heading */}
      <div id='about'>
      <SectionHeading>About Me</SectionHeading>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20'>
        {/* Text Content */}
        <div>
          <h1 className='text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200'>{aboutInfo.title}</h1>
          <p className='mt-6 text-base text-gray-500'>{aboutInfo.description}</p>

          <div className='mt-8'>
            <div className='flex items-center space-x-2 mb-6'>
              <div className='w-7 h-7 bg-blue-800 flex flex-col items-center justify-center'>
                <FaCheck className='text-white' />
              </div>
              <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>Frontend Development</p>
            </div>
          </div>

          <div className='mt-8'>
            <div className='flex items-center space-x-2 mb-6'>
              <div className='w-7 h-7 bg-orange-800 flex flex-col items-center justify-center'>
                <FaCheck className='text-white' />
              </div>
              <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>Backend Development</p>
            </div>
          </div>

          <div className='mt-8'>
            <div className='flex items-center space-x-2 mb-6'>
              <div className='w-7 h-7 bg-green-800 flex flex-col items-center justify-center'>
                <FaCheck className='text-white' />
              </div>
              <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>Full Stack Development</p>
            </div>
          </div>
        </div>

        {/* Circle Balls Content */}
        <div className="w-full grid grid-cols-3 gap-14 mt-2 mx-14 my-32">
          {/* Circle Ball 1 */}
          <div className="w-24 h-24 rounded-full bg-blue-500 group overflow-hidden flex justify-center items-center">
            <span className="text-white font-bold text-lg">JS</span>
          </div>

          {/* Circle Ball 2 */}
          <div className="w-24 h-24 rounded-full bg-green-500 group overflow-hidden flex justify-center items-center">
            <span className="text-white font-bold text-lg">React</span>
          </div>

          {/* Circle Ball 3 */}
          <div className="w-24 h-24 rounded-full bg-red-500 group overflow-hidden flex justify-center items-center">
            <span className="text-white font-bold text-lg">Node</span>
          </div>

          {/* Circle Ball 4 */}
          <div className="w-24 h-24 rounded-full bg-yellow-500 group overflow-hidden flex justify-center items-center">
            <span className="text-white font-bold text-lg">Express</span>
          </div>

          {/* Circle Ball 5 */}
          <div className="w-24 h-24 rounded-full bg-purple-500 group overflow-hidden flex justify-center items-center">
            <span className="text-white font-bold text-lg">MongoDB</span>
          </div>

          {/* Circle Ball 6 */}
          <div className="w-24 h-24 rounded-full bg-indigo-500 group overflow-hidden flex justify-center items-center">
            <span className="text-white font-bold text-lg">TS</span>
          </div>
        </div>
      </div>

      {/* Custom CSS for spinning behavior */}
      <style jsx>{`
        /* Define the reverse spin animation */
        @keyframes spinBackward {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg); /* Negative value for counterclockwise spin */
          }
        }

        /* Apply the animation only when hovered */
        .group:hover {
          animation: spinBackward 2s linear forwards; /* Spin counterclockwise for 2 seconds */
        }

        /* Ensure text stays inside the circle and is centered */
        .group {
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        /* Restrict the text size within the circle */
        .group span {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      `}</style>
      </div>
    </div>
  );
};

export default About;