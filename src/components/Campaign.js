import React from 'react';

const Campaign = ({ image }) => {
  return (
    <div className='container mx-auto md:px-2'>
      <img className='w-full object-cover md:rounded-xl' src={image} alt='' />
    </div>
  );
};

export default Campaign;
