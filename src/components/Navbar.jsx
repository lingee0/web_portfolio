import { useState } from 'react';

import { logo, menu } from '../assets';
// import menu from '../assets/menu.jpg';
import close from '../assets/close.svg';

import { navLinks } from '../constants';

import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import resume from '../assets/Linggar_Resume.pdf';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="bg-primary w-full flex py-6 ss:ml-0 ml-6 justify-between items-center navbar">
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
        <img src={logo} alt="LNA" className="h-[32px]" />
      </CustomLink>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] mr-10`}
        ></li>
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
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white ml-10`}
        >
          <a href={resume} target="_blank">
            <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Resume
            </button>
          </a>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center mr-10">
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
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
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
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white mt-4`}
            >
              <a href={resume} target="_blank">
                <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Resume
                </button>
              </a>
            </li>
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
