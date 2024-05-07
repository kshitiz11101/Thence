
import React, { useState } from 'react'

const AccordianItem=({ question, answer, isActive, Toggle })=>{
    return(
        <div className="border-b border-[#D7D7D7] border-gray-300">
            <button className='flex justify-between items-center w-full py-4 px-6 text-left' onClick={Toggle}>
            <span className='font-semibold text-black text-xl w-3/5 my-6'>{question}</span>
            <span className="text-2xl">{isActive ? '-' : '+'}</span>
            </button>
            {
                isActive &&(
                    <div className='pb-4 px-6'>
                        <p className='text-gray-700'>{answer}</p>
                    </div>
                )
            }
        </div>
    )
}
const Accordian = ({items}) => {
    const [currentIndex,setCurrentIndex]=useState(null);
    const handleToggle=(index)=>{
        setCurrentIndex(currentIndex===index?null:index);
    }

  return (
    <div className='w-full mt-10'>
      {
        items.map((item,index)=>(
            <AccordianItem
            key={index}
            question={item.question}
            answer={item.answer}
            isActive={index===currentIndex}
            Toggle={()=>handleToggle(index)}
            />
        ))
      }
    </div>

  )
}


export default Accordian
