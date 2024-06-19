'use client';
import "./style.css";
import { ReactTyped } from "react-typed";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
export default function Lesson() {
  

  const ClickCounter = () => {
    const [clickCount, setClickCount] = useState(0);
  
    useEffect(() => {
      document.addEventListener('click', incrementClickCount);
      return () => {
        document.removeEventListener('click', incrementClickCount);
      };
    }, []);
  
    const incrementClickCount = () => {
      setClickCount((prevCount) => prevCount + 1);
    };
        
     return (
      <div>
      {clickCount>10 &&   <div>
        
<h1 className="type-effect">
<ReactTyped strings={[
  'DID YOU SEE WHAT YOU HAVE DONE?',
  'YOU HAVE GONE APESHIT FOR A MOMENT', 'OOGA BOOGA AM I RIGHT?',"I THINK I KNOW YOU ENOUGH",
  "YOU ARE A HUMAN",
  'AN ANIMAL THAT THINKS THAT ITS HOT SHIT',
  "THATS THE BASE OF OUR PROBLEM",''
  ,]} typeSpeed={50} backSpeed={30} startDelay={10} />
</h1>
  <DelayedButton clickCount={clickCount}/>
</div>}
      </div>
    );
  };

  type DelayedButtonProps = {
    clickCount: number;
  }
  
  const DelayedButton:React.FC<DelayedButtonProps> = ({clickCount}) => {
    const [showParagraph, setShowParagraph] = useState(false);

   
    useEffect(() => {
      const timer = setTimeout(() => {
        if (clickCount>10){
          setShowParagraph(true)
        }
      }, 200);
  //275000
      return () => clearTimeout(timer);
    }, );
  
    return (
      <div>
        {showParagraph && <div>
  
          <div className='button-div'>
       
       {<Link href="/illusion"><button className='unravel-button'>DIVE DEEPER</button></Link>} 
       {<Link href="/illusion"><button className='unravel-button'>DIVE DEEPER</button></Link>}
       {<Link href="/illusion"><button className='unravel-button'>DIVE DEEPER</button></Link>}
       {<Link href="/illusion"><button className='unravel-button'>DIVE DEEPER</button></Link>}
      
       </div>
  
  </div>}
      </div>
    );
  };


    return (
    <div>

      <h1 className="type-effect">
          HUMAN
      </h1>
<ClickCounter />


      </div>



      
    );
  }