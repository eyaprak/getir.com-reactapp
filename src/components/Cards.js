import { useState, useEffect } from 'react';
import cardsData from '../api/cards.json';
const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);

  return (
    <div className='container mx-auto mt-6 grid md:grid-cols-3 md:gap-x-4 gap-y-4 rounded-lg  max-w-7xl'>
      {cards.length &&
        cards.map((card) => (
          <div className='bg-white md:p-14 p-5 shadow flex flex-col justify-center items-center text-center gap-y-2 '>
            <img className='w-[150px] h-[150px]' src={card.image} alt='test' />
            <h6 className='text-primary-brand-color text-lg font-semibold leading-6'>
              {card.title}
            </h6>
            <p className='text-sm text-gray-600'>{card.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Cards;
