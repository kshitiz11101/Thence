import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Questions from '../components/Questions'
import SideImages from '../components/SideImages'

const Home = () => {
  return (
   <div>
   <Navbar/>
   <div className='flex items-center justify-center flex-col my-20'>
<h1 className='font-cbyf text-green text-4xl'>Success Stories</h1>
<h1 className='text-6xl text-center'>Every success journey <br/>we've encountered.</h1>
   </div>
   <div className='flex items-center'>
    <SideImages/>
    <Carousel/>
   </div>
    <Questions/>
    <Footer/>
    </div>
  )
}

export default Home