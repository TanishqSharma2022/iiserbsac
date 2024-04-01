'use client';
import React from 'react'
import { WavyBackground } from "../effects/WavyBackground";
import localFont from 'next/font/local'
const JoystickFont = localFont({ src: './joystix monospace.otf' })

function Hero() {
  return (
    <WavyBackground className=" sm-48 mx-auto pb-40">
      <p style={{ textShadow: '5px 9px 2px #3b82f5' }} className={JoystickFont.className +" sm-text-2xl md:text-6xl lg:text-9xl text-white font-bold inter-var text-center tracking-wider "}>
        Armageddon
        <br/>
        <span>2024</span>
      </p>
    </WavyBackground>
   
  )
}

export default Hero