'use client';

import { useEffect, useState } from 'react';
import SectionHeading from '@/components/Helper/SectionHeading';
import { div } from 'framer-motion/client';

const GitHubIcon = ({ githubUrl }: { githubUrl: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-8 h-8 p-1.5 my-36 bg-orange-500/20 backdrop-blur-sm rounded-full text-orange-400 hover:bg-orange-500/30 transition-colors cursor-pointer border-2 border-black"
    fill="none"
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    onClick={() => window.open(githubUrl, '_blank')}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);


interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  className?: string;
}

const ProjectCard = ({ title, description, tags, image, githubUrl, className = '' }: ProjectCardProps) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = document.getElementById(title)?.getBoundingClientRect();
      if (rect && rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsInView(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [title]);

  return (
    <div 
      id={title}
      className={`rounded-xl bg-[#13151a] p-4 flex flex-col transition-all transform duration-700 ease-in-out 
      ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} 
      hover:scale-105 hover:shadow-lg hover:bg-[#1a1d25] ${className}`}
    >
      <div className="relative mb-4">
        <div className="absolute top-3 right-3 z-10">
          <GitHubIcon githubUrl={githubUrl} />
        </div>
        <img 
          src={image} 
          alt={title}
          className="w-full h-auto rounded-lg transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
      <h3 className="text-2xl font-bold text-bg mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className={`text-sm px-3 py-1 rounded-full ${
              tag.startsWith('#react') ? 'text-blue-300 bg-blue-900/30' :
              tag.startsWith('#mongodb') ? 'text-green-300 bg-green-900/30' :
              tag.startsWith('#tailwind') ? 'text-pink-300 bg-pink-900/30' :
              tag.startsWith('#express') ? 'text-green-300 bg-green-900/30' :
              tag.startsWith('#html') ? 'text-blue-300 bg-blue-900/30' :
              tag.startsWith('#JS') ? 'text-emerald-300 bg-emerald-900/30' :
              tag.startsWith('#css') ? 'text-pink-300 bg-pink-900/30' :
              'text-gray-300 bg-gray-700/30'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const Project = () => {
  const projects = [
    {
      title: 'Car Rent',
      description: 'Drive your journey with ease through our car rental website! Explore a wide range of vehicles to suit your needs, from budget-friendly options to luxury rides. Enjoy flexible booking, affordable rates, and exceptional customer service.',
      image: "/images/car_project.png",
      tags: ['#react', '#express', '#tailwind'],
      githubUrl: 'https://github.com/anshattri'
    },
    {
      title: 'Bookify',
      description: 'Discover a world of stories at our online bookstore! Browse a vast collection of books across genres, from thrilling novels to insightful non-fiction. Perfect for readers and authors, enjoy seamless purchasing, upload options, and personalized dashboards.',
      image: "/images/Bookify.png",
      tags: ['#react', '#mongodb', '#tailwind'],
      githubUrl: 'https://github.com/anshattri'
    },
    {
      title: 'E-Commerse',
      description: 'Welcome to Grocery Store, your one-stop destination for all your daily essentials! Shop fresh fruits, vegetables, pantry staples, and household items at unbeatable prices. Enjoy a seamless shopping experience with easy navigation, quick delivery, and exciting offers.',
      image: "/images/e_commerce.png",
      tags: ['#html', '#JS', '#css'],
      githubUrl: 'https://github.com/anshattri'
    }
  ];

  return (
    
    <div className="pt-16 pb-16 bg-[#050709]">
      <div className="container mx-auto px-4">
      <div id='projects'>
        <SectionHeading>Projects</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
    </div>
      </div>
    </div>
  );
};

export default Project;