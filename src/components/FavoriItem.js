import React from 'react';
import { FiPlus } from 'react-icons/fi';

const FavoriItem = ({ title, image, price, alt }) => {
  return (
    <div className='flex flex-col items-center relative bg-white px-3 py-2'>
      <img src={image} alt={title} className='w-32 h-32' />
      <div className='leading-5 text-brand-color font-semibold text-sm m-2'>
        ₺{price}
      </div>
      <div className='mb-2 font-semibold text-sm text-center text-gray-900'>
        {title}
      </div>
      <div className='text-gray-500 leading-5 text-sm'>{alt}</div>
      <button className='w-8 h-8 bg-white shadow text-brand-color flex items-center justify-center absolute top-2 right-4 z-10 rounded-lg hover:bg-brand-color hover:text-brand-yellow transition-all'>
        <FiPlus size={16} />
      </button>
    </div>
  );
};

export default FavoriItem;
