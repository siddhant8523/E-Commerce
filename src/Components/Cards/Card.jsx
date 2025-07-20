import React from 'react'

function Card({imageSrc,imageTitle}) {
  return (
    <div className='flex p-8 items-center  flex-col '>
        <img className="h-100 w-90 ms-7 rounded-2xl transition-transform duration-300 ease-in-out hover:scale-103" src={imageSrc} alt='jeans'/>
        <p className='text-3xl p-4'>{imageTitle}</p>
    </div>
    
  )
}

export default Card