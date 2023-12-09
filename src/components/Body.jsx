import React from 'react'
import CRD from '../assets/card.jpg'

const Body = () => {
  return (
    <div className='flex bg-[#457B9D] justify-center align-center h-[800px]'>
      <div className="work flex flex-col mt-20 ">
      <span className="text-8xl text-white absolute font-roboto">Creativity</span>
      <span className='text-8xl text-white p-8 mx-10 absolute my-12 font-roboto'>Powered</span>
      </div>
        <div className='flex mt-[200px] mx-4 rounded-lg bg-transparent w-full h-full'>
          <img className="w-[450px] h-[300px] rounded-xl px-2 ml-[100px] object-contain" src={CRD} alt=''/>
          <img className="w-[300px] h-[300px] mt-[80px] ml-[420px] rounded-xl px-4 object-cover absolute" src={CRD} alt=''/>
        
        </div>
        <div className='mt-[320px] mx-4 rounded-lg bg-transparent w-[400px] h-[300px]'>
        <img className="w-full h-full rounded-xl px-4 object-contain" src={CRD} alt=''/>
        </div>
        <div className='mt-[350px] mx-4 rounded-lg bg-transparent w-[400px] h-[300px]'>
        <img className="w-full h-full rounded-xl px-4 object-contain" src={CRD} alt=''/>
        </div>
    </div>
  )
}

export default Body