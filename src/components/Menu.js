import { useState, useEffect } from 'react';
import { Collapse } from 'react-collapse';
import { useWindowWidth, useWindowWith } from '@react-hook/window-size';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Menu = ({ title, items }) => {
  const windowWidth = useWindowWidth();
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    if (windowWidth <= 786) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (isOpen && windowWidth <= 768) {
      setIsOpen(false);
    }
    if (!isOpen && windowWidth > 768) {
      setIsOpen(true);
    }
  }, [windowWidth]);

  return (
    <section>
      <nav className='grid gap-y-1 md:gap-y-4'>
        <h6
          className='text-lg text-primary-brand-color flex items-center justify-between'
          onClick={toggleCollapse}
        >
          {title}
          <button className='bg-purple-100  text-brand-color p-1 rounded transition-all md:hidden'>
            <span>
              <IoIosArrowDown
                size={15}
                className={`transition-all transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </span>
          </button>
        </h6>

        <nav>
          <Collapse isOpened={isOpen}>
            <ul className='grid gap-y-1 md:gap-y-2'>
              {items.map((item, key) => (
                <li key={key}>
                  <a href='#!' className='text-sm hover:text-brand-color'>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </Collapse>
        </nav>
      </nav>
    </section>
  );
};

export default Menu;
