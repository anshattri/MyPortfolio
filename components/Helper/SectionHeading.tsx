import React, { ReactNode } from 'react'

        //define props type
type Props = {
    children: ReactNode
}
const SectionHeading = ({children}: Props) => {
    return (
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-400 uppercase animate-custom-combo hover:rotate-0 hover:scale-110 hover:shadow-xl hover:ring-4 hover:ring-blue-950 transition-all duration-500 ease-in-out">
            {children}
        </h1>
    );
}

export default SectionHeading
