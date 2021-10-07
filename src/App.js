import {
  Header,
  Campaigns,
  Cards,
  Categories,
  Favorites,
  Footer,
  HeroSection,
  MobileApp,
} from './components';
import { useEffect } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
function App() {
  const windowWidth = useWindowWidth();

  useEffect(() => {
    document.title = 'Getir App';
  }, []);
  return (
    <>
      <Header />
      {windowWidth <= 768 && <Campaigns />}
      <HeroSection />
      <Categories />
      {windowWidth > 768 && <Campaigns />}

      <Favorites />
      <MobileApp />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
