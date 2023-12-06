import React from 'react'
import OMID from '../assets/omid.jpg'

const Hero = () => {
  return (
    <div className='w-full flex justify-between relative'>
        <img className='w-[100%] h-[100%]' src={OMID} alt='bg'/>
        <div className="top-0 left-0 absolute">
            <ul className='flex  '>
                <li className=' text-white p-4 m-8'>Services</li>
                <li className=' text-white p-4 m-8'>Our Work</li>
                <li className=' text-white p-4 m-8'>Get in Touch</li>
            </ul>
        </div>
        <div className="top-[50px] left-[650px] absolute ">
            <span className='text-white p-4 text-xl'>OAKSOCIAL</span>
        </div>
        <div className="right absolute top-6 right-0">
             <input className="border-white m-3 border-2 w-44 rounded-lg bg-inherit"  type='text' placeholder=' Find us'/>
            <button className='text-white p-3 rounded-xl m-6 border-white border-2'>Get Started</button>
        </div>
        <div className="creative w-full absolute top-80 left-20 text-[110px] text-white flex flex-col">
            <span className='font-roboto'>Your Wildest</span>
            <span className='px-[180px] mb-24 font-roboto'>creative reality</span>
        </div>
    </div>
  )
}

export default Hero