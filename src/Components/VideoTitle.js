import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    
    <div className='w-screen aspect-video py-[12%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black '>
        <h1 className='text-2xl md:text-5xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-5 text-md w-1/4'>{overview}</p>
        <div className='my-4 md:m-0'>
            <button className='bg-white  shadow-lg p-y md:py-2 px-2 md:px-4  rounded-md text-lg hover:bg-opacity-80 text-black font-medium'> ▶ Play</button>
            <button className='hidden md:inline-block bg-gray-700 shadow-lg text-white p-2 px-4 bg-opacity-90 rounded-lg text-lg mx-3'>More button</button>
        </div>
    </div>
  )
}

export default VideoTitle