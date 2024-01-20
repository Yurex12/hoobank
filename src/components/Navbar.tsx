import { useState } from 'react';
import { close, menu, logo } from '../assets';

import { navLinks } from '../constants';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='logo' className='w-[124px] h-[32px] shrink-0' />

      <ul className='hidden justify-end flex-1 items-center space-x-10 sm:flex'>
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className='font-poppins font-normal cursor-pointer text-[16px] text-white '
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='flex flex-1 justify-end items-center sm:hidden'>
        <img
          src={isOpen ? close : menu}
          alt='menu'
          className='flex-shrink-0 w-5 h-5 object-contain'
          onClick={() => setIsOpen((prev) => !prev)}
        />

        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='justify-end items-start space-y-3 flex flex-col'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className='font-poppins font-normal cursor-pointer text-[16px] text-white '
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
