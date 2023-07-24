"use client"

import { useEffect, useState } from "react";

export default function ScrollBar({ color } : { color? : "bg-indigo-500" | "bg-emerald-500" }){

    const [PourcentageScroll, setPourcentageScroll] = useState(0)
    const [heightBar, setHeightBar] = useState(4)
    
    const handleScroll = () => {
        const newPourcentageScroll = Math.round((document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100)
        setPourcentageScroll(newPourcentageScroll)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        setPourcentageScroll(Math.round((document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100))
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
    return <div style={{width: `${PourcentageScroll}%`, height: `${heightBar}px`, bottom: `-${Math.floor(heightBar/2)+1}px`}} className={`absolute bottom-[-3px] left-0 ${color}`}/>
}