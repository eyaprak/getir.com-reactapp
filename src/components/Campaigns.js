import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Campaign from './Campaign';
import Banners from '../api/banners.json';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { useWindowWidth } from '@react-hook/window-size';

function NextBtn({ className, onClick }) {
  return (
    <button
      className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </button>
  );
}

function PrevBtn({ className, onClick }) {
  return (
    <button
      className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </button>
  );
}

const settings = {
  dots: false,
  arrow: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  nextArrow: <NextBtn />,
  prevArrow: <PrevBtn />,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        arrow: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrow: false,
      },
    },
  ],
};

const Campaigns = () => {
  const [banners, setBanners] = useState([]);
  const windowWith = useWindowWidth();
  useEffect(() => {
    setBanners(Banners);
  }, []);
  return (
    <div className='container mx-auto max-w-7xl md:py-8 overflow-x-hidden'>
      <div className='hidden md:block'>
        <h3 className='font-semibold text-sm py-4 px-4 md:px-0'>Kampanyalar</h3>
      </div>

      <Slider className='md:px-2' {...settings}>
        {banners.length &&
          banners.map((campaign) => (
            <Campaign key={campaign.id} {...campaign} />
          ))}
      </Slider>
    </div>
  );
};

export default Campaigns;
