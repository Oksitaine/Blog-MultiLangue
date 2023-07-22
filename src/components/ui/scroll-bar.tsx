"use client"

import { useEffect, useState } from "react";

const heightBar = 7

export default function ScrollBar({ color } : { color? : "bg-indigo-500" | "bg-emerald-500" }){

    const [PourcentageScroll, setPourcentageScroll] = useState(0)
    
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
      
    return <div style={{width: `${PourcentageScroll}%`}} className={`absolute bottom-[-3px] left-0 h-[7px] ${color}`}/>
}