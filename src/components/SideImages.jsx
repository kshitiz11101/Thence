import React from 'react'
import Demo from '../assets/Demo.png';
import Rocket from '../assets/Rocket.svg';
const SideImages = () => {
  return (
    <div className='relative mx-20 my-28'>
			<img className='rounded-[2.5rem] mx-24' alt='Hero Image' src={Demo}/>
			<div className="bg-white shadow-2xl w-60 p-6 rounded-3xl absolute top-[7rem]">
				<h1 className='text-[4rem] font-bold font-Sil'>40%</h1>
				<p className=''>Achieved reduction in project execution time by optimising team availability</p>
			</div>
			<div className='flex gap-4 p-4 rounded-full absolute bg-white bottom-10 shadow-2xl' >
				<div>
					<img src={Rocket} alt='Rocket'/>
				</div>
				<div>
					<h1 className='text-2xl font-bold'>10 DAYS</h1>
					<p className='text-[#828282]'>Staff Deployment</p>
				</div>
			</div>			
			<div className='p-8 bg-[#002E18] w-80 rounded-3xl absolute bottom-[-3rem] left-[24rem] shadow-2xl'>
				<h1 className='text-[4rem] text-white'>$0.5 <span className='text-2xl text-[#A6A3A0]'>MILLION</span>
				</h1>
				<p className='text-[#CCCCCC]'>Reduced client expenses by saving on hiring and employee costs.</p>
			</div>


		</div>
  )
}

export default SideImages
