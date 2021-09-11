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

import { useWindowWidth } from '@react-hook/window-size';
function App() {
  const windowWidth = useWindowWidth();
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
