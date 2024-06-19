'use client';
import "./style.css";
import { ReactTyped } from "react-typed";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import stickman from '@/app/stickman.svg'
import Image from 'next/image';
export default function Illusion() {

  const TempImage = () => {
    const [showImage, setShowImage] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowImage(false);
      }, 20000);

      return () => clearTimeout(timer);
    }, []);

    return (
      <div>
        {showImage && (
          <div>
            <Image src={stickman} alt="stickman" color="white" className="stickman" />
          </div>
        )}
      </div>
    );
  };

  const DelayedParagraph = () => {

  
    return (
      <div>
       
  
  <h3 className="type-effect">
  <ReactTyped strings={[
    "This is AMIR ARSALAN, a nice boy from Iran",
    "A simple boy, living a simple life",
    'He has his own dreams',
    "Let me show you another picture of Amir arsalan",
    'There you go',
    'Im not trying to fuck with you, I just got this photo of him only 1 lightyear away from him',
    'Arsalan cannot be seen, nor anybody',
    'WELCOME TO UNIVERSE, WHERE EVERYTHING IS EQUALLY NOTHING, EVEN THE GOOD OLD AMIR ARSALAN',
    'NOW FIND AMIR ARSALAN',]}
     typeSpeed={50} backSpeed={30} startDelay={10} />
  </h3>
  
  
      </div>
    );
  };

    return (
<div>
  <div className="teleprompter">
    <DelayedParagraph />
  </div>
      
<TempImage />
</div>
 );
  
}