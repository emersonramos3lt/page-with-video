"use client";

import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const words = ['Speed', 'Race', 'Drift', 'Victory'];



export default function Home() {

  useEffect(() => {
    const typewriter = document.getElementById("typewriter");
    if (typewriter) {

      let mainTimeline = gsap.timeline({
        repeat: -1
      });

      words.forEach((word) => {

        let textTimeline = gsap.timeline({
          repeat: 1,
          yoyo: true,
          repeatDelay: 2
        });

        textTimeline.to("#typewriter", {
          text: word,
          duration: 2
        });

        mainTimeline.add(textTimeline);
      });
    }
  });

  return (
   <main>

      <div className="video-container w-full h-screen top-0 left-0">
        <video muted autoPlay loop className="w-full h-full object-cover absolute right-0 bottom-0 z-[-1]">
        <source src="/background.mp4" type="video/mp4" />
        <p>Your browser does not support MP4 video</p>
        </video>

        <div className="flex justify-center items-center h-full text-white">
          <h1 className="h1-typewriter text-[11rem] font-bold">
            <span id="typewriter"></span><span className="cursor">_</span>
          </h1>
        </div>

       <div>

       <div className="button-container">
       <button className="button absolute right-[2%] bottom-[4%] p-[1.2rem] inline-flex items-center justify-between bg-orange-600 rounded-br-2xl w-[200px]">
          ENTER 
          <Image 
          src="/arrows.svg" 
          alt="Arrows"
          width={15}
          height={15}/>
        </button>
       </div>

        <div className="address absolute bottom-[4%] left-[2%] text-white font-normal">
            TEXAS, USA, 12345
        </div>
       </div>


      </div>


   </main>
  )
}
