'use client';
import "./style.css";
import { ReactTyped } from "react-typed";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
export default function Embrace() {
  

const DelayedParagraph = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParagraph(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showParagraph && <div>

<h1 className="type-effect">
<ReactTyped strings={[
  "DID YOU EMBRACED THE DARKNESS?",
  "NO??",
  'WTF MAN',
  "you only just stared down the red thingy didnt you?",'uhhhhhhhh','look at your confused ass',
  'ok, here you go, another button',]} typeSpeed={50} backSpeed={30} startDelay={10} />
</h1>

</div>}
    </div>
  );
};


const DelayedButton = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParagraph(true);
    }, 42000);
//42000
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showParagraph && <div>

        <div className='button-div'>
     
     {<Link href="/human"><button className='unravel-button'>CLICK THIS THINGY</button></Link>} 
     {<Link href="/human"><button className='unravel-button'>CLICK THIS THINGY</button></Link>}
     {<Link href="/human"><button className='unravel-button'>CLICK THIS THINGY</button></Link>}
     {<Link href="/human"><button className='unravel-button'>CLICK THIS THINGY</button></Link>}
    
     </div>

</div>}
    </div>
  );
};




    return (
    <div>

      <h1 className="type-effect">
      <ReactTyped strings={[
        "EMBRACE THE DEATH",
        "EMBRACE THE THOUGHTS",
        "EMBRACE THE DARKNESS",'']} typeSpeed={200} backSpeed={30} startDelay={10} />
      </h1>
      <DelayedParagraph />
      <DelayedButton />
      </div>



      
    );
  }