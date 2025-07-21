import React from 'react'
import ArrowIcon from '../common/ArrowIcon'

function Card({imageSrc,imageTitle,description,actionArrow}) {
  return (
    <div className='flex p-8 items-center  flex-col '>
        <img className="h-[290px] w-[200px] ms-7 rounded-2xl transition-transform duration-300 ease-in-out hover:scale-103" src={imageSrc} alt='jeans'/>
        <div className='flex justify-center ml-7 '>
          <div className='flex flex-col justify-around mt-2'>
            <p className='text-2xl mr-7'>{imageTitle}</p>
            {description && <p className='text-2xl text-gray-500'>{description}</p>}
          </div>
          {actionArrow && <div className='flex items-center justify-center ml-0 text-lg text-gray-500'><ArrowIcon/></div>}
        </div>
    </div>
    
  )
}

export default Card