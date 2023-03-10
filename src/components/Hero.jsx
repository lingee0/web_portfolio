import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import styles from '../style';
import textBuble from '../assets/textbuble.png';
import meme1 from '../assets/meme1.png';
import meme3 from '../assets/meme3.jpg';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Welcome,', 'Howdy!', 'Hi there!', 'Hello World!'], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex-row justify-between items-center w-full">
          <div>
            <span
              className="mt-12 flex-1 font-poppins font-semibold ss:text-[72px] text-[48px] text-white"
              ref={el}
            ></span>
          </div>

          <p className="flex-1 font-poppins font-semibold ss:text-[48px] text-[32px] text-white">
            My name is:
          </p>
          <p className="py-6 flex-1 font-poppins font-semibold ss:text-[72px] text-[48px] text-gradient">
            Linggar Nareswara <br /> Andaru
          </p>
          <p className="py-6 flex-1 font-poppins font-semibold ss:text-[32px] text-[22px] text-white">
            This is my website portfolio <br />
            Feel free to look around and <br />
            get to know more about me <br />
          </p>
        </div>
        <CustomLink
          to={`${'contactMe'}`}
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          }}
        >
          <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient cursor-pointer rounded-[10px] mb-2">
            <img
              src={textBuble}
              alt="textBuble"
              className="ss:h-[32px] h-[24px] mr-4"
            />
            <span className="text-white font-semibold ss:text-[25px] text-[14px]">
              Do not hesitate to contact me
            </span>
          </div>
        </CustomLink>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={meme3}
          alt="meme"
          className="ss:w-[80%] w-[60%] mr -10 relative z-[5]"
        />
      </div>
    </section>
  );
};

export default Hero;

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
