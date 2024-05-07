// Footer of the project
import React from 'react'
const Footer = () => {
  return (
    <div className='flex items-center justify-between mx-6 my-6 px-14 bg-white py-[3.75rem] rounded-[40px]'>
      <p className="text-lg">©  Talup 2023. All rights reserved</p>
			<div className="flex gap-14">
				<p className="text-lg underline cursor-pointer">Terms & Conditions</p>
				<p className="text-lg underline cursor-pointer">Privacy Policy</p>
			</div>
    </div>
  )
}

export default Footer
