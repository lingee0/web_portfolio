import { useState } from 'react';

import { logo, menu } from '../assets';
// import menu from '../assets/menu.jpg';
import close from '../assets/close.svg';

import { navLinks } from '../constants';

import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="bg-primary w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="LNA" className="h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`}
        >
          <Link to="https://drive.google.com/uc?export=download&id=16CsD6cRwAg6a261q9t1XQYn_DmUUE8KM">
            <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Resume
            </button>
          </Link>
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] mr-10`}
        >
          <CustomLink
            to="/"
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
              });
            }}
            className="text-white hover:text-secondary active:text-blue-500"
          >
            Home
          </CustomLink>
        </li>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-white hover:text-secondary active:text-blue-500`}
          >
            <CustomLink
              to={`${nav.id}`}
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                });
              }}
            >
              {nav.title}
            </CustomLink>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="h-[32px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 z-[60] bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-4`}
            >
              <Link to="https://drive.google.com/uc?export=download&id=16CsD6cRwAg6a261q9t1XQYn_DmUUE8KM">
                <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Resume
                </button>
              </Link>
            </li>
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white active:text-blue-500 mb-4`}
            >
              <CustomLink
                to="/"
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                Home
              </CustomLink>
            </li>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                } text-white active:text-blue-500`}
              >
                <CustomLink
                  to={`${nav.id}`}
                  onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: 'smooth',
                    });
                  }}
                >
                  {nav.title}
                </CustomLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
