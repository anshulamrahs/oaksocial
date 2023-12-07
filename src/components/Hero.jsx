import React from 'react'
import OMID from '../assets/omid.jpg'
import DOWN from '../assets/downwhite.svg'

const Hero = () => {
  return (
    <div className='w-full h-full flex justify-between relative'>
        <img className='w-full h-full object-contain' src={OMID} alt='bg'/>
        <div className="top-0 left-0 fixed">
            <ul className='flex  '>
                <li className=' text-white text-lg   p-4 m-8'>Services</li>
                <li className=' text-white text-lg  p-4 m-8'>Our Work</li>
                <li className=' text-white text-lg  p-4 m-8'>Get in Touch</li>
            </ul>
        </div>
        <div className="top-[50px] left-[650px] absolute ">
            <span className='text-white  text-2xl fixed'>OAKSOCIAL</span>
        </div>
        <div className="right fixed top-6 right-0">
             {/* <input className="border-white m-3 border-2 w-44  top-2 rounded-lg bg-inherit"  type='text' placeholder=' Find us'/> */}
            <button className='text-white p-2 rounded-xl mx-10 my-6 border-white border-2'>Get Started</button>
        </div>
        <div className="creative w-full absolute top-[450px] left-36 text-[110px] text-white flex flex-col">
            <span className='font-roboto'>Your Wildest</span>
            <span className='px-[180px] mb-24 font-roboto'>creative reality</span>
        </div>
        <img className='absolute w-20 text-white bottom-[200px] left-8 hover:animate-wiggle' src={DOWN} alt='down'/>
    </div>
  )
}

export default Hero