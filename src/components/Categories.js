import { useState, useEffect } from 'react';
import categoriesData from '../api/categories.json';
import Category from './Category';
const Categories = () => {
  const [categories, setCategories] = useState(categoriesData);
  return (
    <div className='bg-white pt-4 '>
      <div className='container mx-auto max-w-7xl'>
        <h3 className='text-sm font-semibold mb-3 px-4 md:px-0'>Kategoriler</h3>
        <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12'>
          {categories &&
            categories.map((category, index) => (
              <Category key={index} {...category} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
