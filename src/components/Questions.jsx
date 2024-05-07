// For Displaying all the frequenlty asked question components

import React from 'react';
import Arrow from '../assets/Arrow.svg';
import Accordian from './Accordian';
const faqs=[
    {
        question: "Do you offer freelancers?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
		question: "What’s the guarantee that I will be satisfied with the hired talent?",
		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
	},
    {
		question: "Can I hire multiple talents at once?",
		answer: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
	},
	{
		question: "Why should I not go to an agency directly?",
		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
	},
	{
		question: "Who can help me pick a right skillset and duration for me?",
		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
	}
]
const Questions = () => {
  return (
    <div className='bg-[#E8EEE7] mx-6 rounded-[40px] py-20 my-[3.25rem] flex justify-between px-24 relative'>
      <div className=" w-1/2 ">
				<h1 className='font-cbyf text-[#9E9D9D] text-[2rem]'>What's on your mind</h1>
				<h1 className='text-[#1C1C1C] text-6xl'>
					Ask Questions
				</h1>

				<div className="absolute left-4 bottom-4">
					{Arrow && <img src={Arrow} alt="Arrow"/>}
				</div>

			</div>
            <div className="w-1/2">
				
			<Accordian items={faqs}/>
			</div>

    </div>
  )
}

export default Questions
