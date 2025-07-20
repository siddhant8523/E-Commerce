import React from 'react'
import PropTypes from 'prop-types';

function SectionHeading({title}) {
  return (
    <div className=' flex flex-wrap px-10 my-5 flex items-center mb-1'>
        <div className='text-5xl w-2 h-14 mr-5 bg-blue-800 rounded-2xl border-blue-800 font-extrabold border-2'>
            
        </div>
        <p className='text-4xl font-semibold'>{title}</p>
    </div>
  ) 

}

SectionHeading.defaultProps = {
  title: 'Default Heading',
};

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
};
export default SectionHeading