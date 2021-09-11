const MobileApp = () => {
  return (
    <div className='container flex-col md:flex-row mx-auto flex justify-between items-center bg-primary-brand-color bg-mobile-app mt-6 md:rounded-lg text-white  max-w-7xl'>
      <div className='flex flex-col gap-y-3 p-10'>
        <h3 className='text-2xl font-bold tracking-tight'>Getir'i İndirin!</h3>
        <p className='font-semibold '>
          İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.
        </p>
        <nav className='mt-5 flex gap-x-2'>
          <a
            href='#!'
            className='transition-all transform hover:scale-105 md:h-8 lg:h-auto'
          >
            <img
              src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'
              alt='test'
            />
          </a>
          <a
            href='#!'
            className='transition-all transform hover:scale-105 md:h-8 lg:h-auto'
          >
            <img
              src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'
              alt='test'
            />
          </a>
          <a
            href='#!'
            className='transition-all transform hover:scale-105 md:h-8 lg:h-auto'
          >
            <img
              src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'
              alt='test'
            />
          </a>
        </nav>
      </div>
      <picture className='hidden md:block md:pt-6'>
        <img
          src='https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png'
          alt=''
        />
      </picture>
    </div>
  );
};

export default MobileApp;
