import { useEffect, useState } from 'react';
import Products from '../api/products.json';
import FavoriItem from './FavoriItem';
const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(Products);
  }, []);
  return (
    <div className='container mx-auto max-w-7xl'>
      <h3 className='text-sm font-semibold mb-3 py-4 px-4 md:px-0'>
        Favoriler
      </h3>

      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 gap-0.1  rounded-lg overflow-hidden'>
        {favorites &&
          favorites.map((favori) => <FavoriItem key={favori.id} {...favori} />)}
      </div>
    </div>
  );
};

export default Favorites;
