// import { BaseInfo } from '@/Data/data'
// import React from 'react'
// import { FaDownload } from 'react-icons/fa'
// import Image from 'next/image'

// const Hero = () => {
//   return (
//     <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative'>
//         <div className='flex justify-center flex-col w-4/5 h-full mx-auto text-white'>
//             <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
//                 {/* CONTENT */}
//                 <div> 
//                         {/* Sub Heading */}
//                     <h1 className='text-2xl md:text-3xl lg:text-4xl mb-6 text-gray-300 font-semibold'>I am {BaseInfo.name}</h1>
//                         {/* Title */}
//                     <h1 className='text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white'>{BaseInfo.position}</h1>
//                         {/* Discription */}
//                     <p className='mt-6 text-sm md:text-base text-white text-opacity-60'>{BaseInfo.description}</p>
//                         {/* Button */}
//                     <button className='md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-400 hover:bg-blue-900 flex items-center space-x-2'>
//                         <span>Download CV</span>
//                         <FaDownload />
//                     </button>
//                 </div>
//                 {/* IMAGE CONTENT */}
//                 <div className='mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden'>
//                     <Image src={BaseInfo.profilePic} alt={BaseInfo.name} width={500} height={500}/>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Hero


























// import { BaseInfo } from '@/Data/data'
// import React from 'react'
// import { FaDownload } from 'react-icons/fa'
// import Image from 'next/image'

// const Hero = () => {
//   return (
//     <div 
//       className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative transform-gpu"
//       style={{
//         animation: 'rotate3D 10s infinite linear',
//       }}
//     >
//         <div className="flex justify-center flex-col w-4/5 h-full mx-auto text-white">
//             <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
//                 {/* CONTENT */}
//                 <div 
//                   className="animate__animated animate__fadeInUp"
//                   style={{
//                     animationDuration: '2s',
//                   }}
//                 >
//                         {/* Sub Heading */}
//                     <h1 className='text-2xl md:text-3xl lg:text-4xl mb-6 text-gray-300 font-semibold'>I am {BaseInfo.name}</h1>
//                         {/* Title */}
//                     <h1 className='text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white'>
//                       {BaseInfo.position}
//                     </h1>
//                         {/* Description */}
//                     <p className='mt-6 text-sm md:text-base text-white text-opacity-60'>
//                       {BaseInfo.description}
//                     </p>
//                         {/* Button */}
//                     <button className='md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-400 hover:bg-blue-900 flex items-center space-x-2'>
//                         <span>Download CV</span>
//                         <FaDownload />
//                     </button>
//                 </div>

//                 {/* IMAGE CONTENT */}
//                 <div 
//                   className='mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden animate__animated animate__fadeIn animate__delay-1s'
//                   style={{
//                     animationDuration: '2s',
//                     animationName: 'fadeIn',
//                   }}
//                 >
//                     <Image 
//                         src={BaseInfo.profilePic} 
//                         alt={BaseInfo.name} 
//                         width={500} 
//                         height={500} 
//                         className="transform transition-all duration-1000 hover:scale-105 hover:rotate-6 hover:translate-y-2 hover:shadow-lg"
//                     />
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Hero


















import { BaseInfo } from '@/Data/data'
import React from 'react'
import { FaDownload } from 'react-icons/fa'
import Image from 'next/image'

const Hero = () => {
  return (
    <div id='home'>
    <div 
      className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative transform-gpu"
      style={{
        animation: 'rotate3D 10s infinite linear',
      }}
    >
        <div className="flex justify-center flex-col w-4/5 h-full mx-auto text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                {/* CONTENT */}
                <div 
                  className="animate__animated animate__fadeInUp"
                  style={{
                    animationDuration: '2s',
                  }}
                >
                        {/* Sub Heading */}
                    <h1 className='text-2xl md:text-3xl lg:text-4xl mb-6 text-gray-300 font-semibold'>I am {BaseInfo.name}</h1>
                        {/* Title */}
                    <h1 className='text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white'>
                      {BaseInfo.position}
                    </h1>
                        {/* Description */}
                    <p className='mt-6 text-sm md:text-base text-white text-opacity-60'>
                      {BaseInfo.description}
                    </p>
                        {/* Button */}
                    <button className='md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-400 hover:bg-blue-900 flex items-center space-x-2'>
                        <span>Download CV</span>
                        <FaDownload />
                    </button>
                </div>

                {/* IMAGE CONTENT */}
                <div className="relative w-96 h-96 left-40 top-16">
                        <Image 
                            src={BaseInfo.profilePic} 
                            alt={BaseInfo.name} 
                            layout="intrinsic" // Adjust image layout to prevent overflow
                            width={500} 
                            height={500} 
                            className="rounded-3xl object-cover w-full h-full transform transition-all duration-1000 hover:scale-105 hover:rotate-6 hover:translate-y-2 hover:shadow-lg"
                        />
                    </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero