// Carousel Component to display all three slides

import { useState,useEffect } from "react"
import React from 'react'

const Carousel = () => {
    const slides=[
        "Enhance fortune 50 company’s insights teams research capabilities",
		"Accelerate innovation with cutting-edge technology",
		"Drive strategic growth with data-driven decisions"
    ]
    const [slide,setSlide]=useState(0);
    useEffect(()=>{
        const timer=setTimeout(() => {
            setSlide((prevslide)=>
            prevslide===slides.length-1?0:prevslide+1)
        }, 3000);
        return()=>clearTimeout(timer);
    },[slide]);

  return (
    <div className="mx-20">
      <p className="text-[2.8rem] w-[400px] font-semibold">{slides[slide]}</p>
      <div className="flex gap-4 my-20">
        {
            slides.map((_,index)=>(
                <div key={index} className={`w-3 h-3 rounded-full ${index === slide ? 'bg-green' : 'bg-[#E4E3E3]'}`}>
                </div>
            ))
        }
      </div>
      <button
				className='px-10 py-8 bg-black text-white rounded-full flex gap-4 hover:bg-[#4E4E4E]'
				onClick={() => setSlide((slide + 1) % slides.length)}
			>
				Explore More
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M16.1716 10.9999L4 10.9999L4 12.9999L16.1716 12.9999L10.8076 18.3638L12.2218 19.778L20 11.9999L12.2218 4.22168L10.8076 5.63589L16.1716 10.9999Z"
						fill="white"/>
				</svg>
			</button>
    </div>
  )
}

export default Carousel
