import React from 'react'
import Header from './navbar'


const Hero = () => {
  return (
    
<div>
     
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/coffe4.avif)] bg-right' style={{
        backgroundSize:"35%", backgroundPosition:"right 20px top 70px " }}>
   


        <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='text-[100px] sm:text-[130px] font-bold leading-tight flex  justify-center items-center'>
          <div className="quote-container">
            <p>LIVE YOUR LIFE </p>
            <p>WITH</p>
            <p>SOME ENERY</p>
          </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Hero
