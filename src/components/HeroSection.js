import ReactFlagsSelect from 'react-flags-select';
import { useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useWindowWidth } from '@react-hook/window-size';

const HeroSection = () => {
  const [selected, setSelected] = useState('TR');

  const windowWidth = useWindowWidth();

  const phones = {
    US: '+1',
    DE: '+50',
    TR: '+90',
    IT: '+7',
    IND: '+15',
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const onTest = (e) => {
    console.log(e.target);
  };
  return (
    <div className='relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10 '>
      {windowWidth >= 768 && (
        <Slider {...settings}>
          <div>
            <img
              className='w-full h-[500px] object-cover'
              src='https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              className='w-full h-[500px] object-cover'
              src='https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg'
              alt=''
            />
          </div>
        </Slider>
      )}
      <div className='md:flex container justify-between items-center relative md:absolute top-0  left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20 max-w-7xl'>
        <div className='hidden md:block'>
          <img
            src='https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg'
            alt=''
          />
          <h3 className=' text-2xl  mt-8 font-semibold text-white'>
            Dakikalar içinde <br />
            kapınızda
          </h3>
        </div>
        <div className='w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6'>
          <h4 className='text-primary-brand-color text-center font-semibold mb-3'>
            Giriş yap veya kayıt ol
          </h4>
          <div className='grid gap-y-3'>
            <div className='flex justify-content-start align-items-center gap-x-2'>
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                selected={selected}
                onSelect={(data) => setSelected(data)}
                placeholder='Select Language'
                fullWidth={false}
                className='flag-select'
              />
              <label className='flex-1 relative block group'>
                <input
                  type='input'
                  required
                  className='h-14 px-4 border-2 rounded border-gray-200 w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color
                active:!border-primary-brand-color peer text-sm pt-1'
                />
                <span className='absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-6 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:text-primary-brand-color peer-valid:text-xs peer-valid:h-6'>
                  Telefon Numarası
                </span>
              </label>
            </div>
            <button className='bg-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow'>
              Telefon numarası ile devam et
            </button>
            <hr className='h-[1px] bg-gray-300 my-2' />
            <button className='bg-blue-700 bg-opacity-10 h-12 flex items-center  rounded-md w-full text-sm font-semibold text-blue-700 text-opacity-80 transition-colors hover:bg-blue-700 hover:text-white pl-6'>
              <FaFacebook size={24} />
              <span className='mx-auto'>Facebook ile devam et</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
