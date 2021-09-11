import { useState } from 'react';
import Menu from './Menu';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BiGlobe } from 'react-icons/bi';
const Footer = () => {
  const menus = [
    {
      title: "Getir'i keşfedin",
      items: [
        {
          title: 'Hakkımızda',
        },
        {
          title: 'Kariyer',
        },
        {
          title: 'İletişim',
        },
        {
          title: 'Covid-19 Duyuru',
        },
        {
          title: 'Sosyal Sorumluluk Projesi',
        },
      ],
    },
    {
      title: 'Yardıma mı ihtiyacınız var?',
      items: [
        {
          title: 'Hakkımızda',
        },
        {
          title: 'Kariyer',
        },
        {
          title: 'İletişim',
        },
        {
          title: 'Covid-19 Duyuru',
        },
        {
          title: 'Sosyal Sorumluluk Projesi',
        },
      ],
    },
    {
      title: 'İş ortağımız olun',
      items: [
        {
          title: 'Hakkımızda',
        },
        {
          title: 'Kariyer',
        },
        {
          title: 'İletişim',
        },
        {
          title: 'Covid-19 Duyuru',
        },
        {
          title: 'Sosyal Sorumluluk Projesi',
        },
      ],
    },
  ];

  return (
    <div className='bg-white mt-10'>
      <div className='container mx-auto  max-w-7xl px-4 md:px-0'>
        <div className='grid md:grid-cols-2 gap-y-6 lg:grid-cols-4 md:pt-10 pt-4'>
          <section>
            <h6 className='text-primary-brand-color text-lg mb-4'>
              Getir'i İndirin!
            </h6>
            <nav className='grid gap-2 md:gap-4  gap-y-4'>
              <a href=''>
                <img
                  src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'
                  alt=''
                />
              </a>
              <a href=''>
                <img
                  src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'
                  alt=''
                />
              </a>
              <a href=''>
                <img
                  src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'
                  alt=''
                />
              </a>
            </nav>
          </section>
          {menus.map((menu, index) => (
            <Menu key={index} {...menu} />
          ))}
        </div>
        <div className='flex flex-col md:flex-row gap-y-4 justify-between items-center border-t border-gray-200 mt-6 py-6'>
          <div className='text-xs text-gray-700 flex gap-x-8'>
            &copy; 2021 Getir
            <a href='#!' className='text-primary-brand-color hover:underline'>
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <nav className='flex gap-x-3'>
            <a
              href=''
              className='w-8 h-8 rounded-lg text-gray-500  transition-colors hover:bg-primary-brand-color hover:text-primary-brand-color hover:bg-opacity-10 flex items-center justify-center'
            >
              <FaFacebook size={21} />
            </a>
            <a
              href=''
              className='w-8 h-8 rounded-lg text-gray-500  transition-colors hover:bg-primary-brand-color hover:text-primary-brand-color hover:bg-opacity-10 flex items-center justify-center'
            >
              <FaTwitter size={21} />
            </a>
            <a
              href=''
              className='w-8 h-8 rounded-lg text-gray-500  transition-colors hover:bg-primary-brand-color hover:text-primary-brand-color hover:bg-opacity-10 flex items-center justify-center'
            >
              <FaInstagram size={21} />
            </a>
            <a
              href=''
              className='h-8 flex items-center px-2 text-sm gap-x-2 rounded text-gray-500 border border-gray-100 transition-colors hover:bg-primary-brand-color hover:text-primary-brand-color hover:bg-opacity-10 hover:border-transparent'
            >
              <BiGlobe size={18} />
              Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
