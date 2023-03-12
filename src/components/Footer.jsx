import styles from '../style';
import { logo } from '../assets';
import { footerLinks } from '../constants';

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start">
        <img
          src={logo}
          alt="LNA"
          className="ss:w-[200px] w-[140px] object-contain"
        />
        <p
          className={`${styles.paragraph} mt-4 max-w-[260px] ss:text-[14px] text-[10px]`}
        >
          Designed and Developed by <br /> Linggar Nareswara Andaru
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.key}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
              <ul>
                {footerLink.links.map((Link, index) => (
                  <li
                    key={Link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}
                  >
                    <a href={Link.link} target="_blank">
                      {Link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
