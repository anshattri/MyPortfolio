import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { navLinks } from '@/constant/constant'
import { HiBars3BottomRight } from 'react-icons/hi2'

        {/* define props type */}
type Props =  {
    openNav: () => void;
}

const Nav = ({openNav}: Props) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if(window.scrollY >= 90){
                setNavBg(true);
            }
            if(window.scrollY < 90){
                setNavBg(false);
            }
        };

        window.addEventListener("scroll", handler);

        return () => {
            window.removeEventListener("scroll", handler);
        }
    }, []);

  return (
    <div className={`fixed ${navBg ? 'bg-[#240b39]' : 'fixed'} h-[12vh] z-[10] bg-[#0f0715] w-full transition-all duration-200`}>
        <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>
            {/* LOGO */}
            <Image src="/images/pic3.jpg" alt="LOGO" width={70} height={170} className=" rounded-2xl ml-[-1.5rem] sm:ml-0 animate-pulse transition-transform duration-500 hover:scale-110 hover:rotate-6 hover:shadow-xl" />

            {/*Nav Links */}
            <div className='flex items-center space-x-10'>
                <div className='hidden lg:flex items-center space-x-8'>
                    {navLinks.map((navlink) => {
                        return <Link key={navlink.id} href={navlink.url}>
                            <p className='nav__link'>{navlink.label}</p>
                            </Link>
                    })}
                </div>
            {/* BURGER */}
                    <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
            </div>
        </div>
    </div>
  )
}

export default Nav
