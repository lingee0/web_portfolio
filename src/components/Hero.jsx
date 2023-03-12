import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import styles from '../style';
import textBuble from '../assets/textbuble.png';
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
      className={`flex md:flex-row flex-col ${styles.paddingY} mb-20`}
    >
      <meta
        name="description"
        content="This website is Linggar's personal web portfolio where people can see his previous works and experiences. It can also be used to know him as a person"
      ></meta>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex-row justify-between items-center w-full mt-10">
          <div>
            <span
              className="mt-12 flex-1 font-source_code_pro font-bold ss:text-[50px] text-[26px] text-white"
              ref={el}
            ></span>
          </div>

          <p className="flex-1 font-source_code_pro font-semibold ss:text-[48px] text-[32px] text-white">
            My name is:
          </p>
          <CustomLink
            to={`${'aboutMe'}`}
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
              });
            }}
          >
            <p className="mb-6 flex-1 font-poppins font-semibold ss:text-[72px] text-[48px] text-gradient">
              Linggar Nareswara Andaru
            </p>
          </CustomLink>
          <span>
            <p className="flex-1 font-source_code_pro font-semibold ss:text-[26px] text-[14px] text-white">
              I'm a student, software engineer, <br /> and web
              designer/developer. <br />
            </p>
            <p className="flex-1 font-source_code_pro font-semibold ss:text-[26px] text-[14px] text-white">
              <br />
              This is my website portfolio <br />
              Feel free to look around and <br />
              get to know more about me <br />
            </p>
          </span>
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
            <span className="text-white font-semibold font-poppins ss:text-[25px] text-[14px]">
              Do not hesitate to contact me
            </span>
          </div>
        </CustomLink>
      </div>
      <div
        className={`flex flex-col ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={meme3}
          alt="meme"
          className="ss:w-[80%] w-[60%] mr -10 relative z-[5]"
        />
        <a href="https://www.youtube.com/watch?v=5cNF8mTSRzM" target="_blank">
          <p className="text-white text-[10px]">[Meme Reference]</p>
        </a>
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
