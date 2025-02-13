"use client";

import React, { useState } from 'react'
import Nav from './Nav'
import Mobile from './Mobile'

const responsive = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
    <div>
      <Nav openNav = {showNavHandler}/>
      <Mobile showNav = {showNav} closeNav = {closeNavHandler}/>
    </div>
  )
}

export default responsive
