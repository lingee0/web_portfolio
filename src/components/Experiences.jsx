import React from 'react';
import styles from '../style';
import singPink from '../assets/singpinkconcert.jpg';
import wsc from '../assets/wsc.jpg';
import practera from '../assets/practera_icon.png';
import lombok from '../assets/lombok_volunteer.jpg';
import { arrowUp } from '../assets';

const Experiences = () => (
  <section id="projects" className="py-6 mt-10 xl:px-0 sm:px-16 px-6">
    <h1 className="font-source_code_pro text-white flexCenter text-white font-bold ss:text-[36px] text-[20px] ss:mt-10 mt-5">
      My past experiences
    </h1>
    <h2 className="hidden lg:block font-source_code_pro text-white flexCenter text-white ss:text-[16px] text-[12px]">
      Hover over the images to see more details
    </h2>
    <h2 className="ss:hidden font-source_code_pro text-white flexCenter text-white font-bold ss:text-[24px] text-[10px] ss:mt-10 mt-5">
      Click on the images to see more details
    </h2>
    <div className="relative">
      <div
        className={`flex md:flex-row flex-col justify-between ${styles.paddingY} md:${styles.paddingX} ml-3 mr-3`}
      >
        <div className="mb-10">
          <div className="flex-row justify-between items-center w-full group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <div className={`flex-1 flex ${styles.flexCenter} relative`}>
              <img
                src={singPink}
                alt="singPink logo"
                className="group-hover:scale-125 transition-all duration-500 ss:w-[500px] w-[300px] object-contain"
              />
            </div>
            <div className="hidden lg:block md:px-14 px-10">
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50">
                <span className="font-poppins font-semibold text-gradient">
                  Charity Concert Organizer
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <a
                  href="https://www.instagram.com/singpinkconcert/"
                  target="_blank"
                >
                  <div className="flex flex-row items-center ">
                    <span className="text-2xl font-source_code_pro font-bold text-white">
                      Sing Pink
                    </span>
                    <img src={arrowUp} alt="arrow" className="w-[30px]" />
                  </div>
                </a>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50 bg-discount-gradient cursor-pointer rounded-[10px]">
                <span className="text-white font-semibold ss:text-[12px] text-[10px] ml-2 mr-2">
                  July 2017 - January 2018
                </span>
              </div>
              <div className="absolute -bottom-full left-12 right-12 group-hover:bottom-64 transition-all duration-700 z-50 cursor-pointer rounded-[10px]">
                <span className="text-white font-source_code_pro font-semibold ss:text-[24px] text-[12px] ">
                  Organize a charity concert done in partnership with LovePink
                  Indonesia to raise awareness and funds for breast cancer
                  research
                </span>
              </div>
            </div>
            <div className="ss:hidden md:px-14 px-10">
              <div className="absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-700 z-50">
                <span className="font-poppins font-semibold text-gradient ss:text-[16px] text-[12px]">
                  Charity Concert Organizer
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-7 transition-all duration-700 z-50">
                <a
                  href="https://www.linkedin.com/posts/linggar-andaru-591a331b6_practera-activity-6850982023205576704-amD0?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                >
                  <div className="flex flex-row items-center ">
                    <a
                      href="https://www.linkedin.com/posts/linggar-andaru-591a331b6_practera-activity-6850982023205576704-amD0?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                    >
                      <div className="flex flex-row items-center ">
                        <span className="text-[12px] font-bold text-white">
                          Sing Pink
                        </span>
                        <img src={arrowUp} alt="arrow" className="w-[12px]" />
                      </div>
                    </a>
                  </div>
                </a>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-1 transition-all duration-700 z-50 bg-discount-gradient rounded-[10px]">
                <span className="text-white font-semibold ss:text-[12px] text-[10px] ml-2 mr-2">
                  July 2017 - January 2018
                </span>
              </div>
              <div className="absolute -bottom-full left-12 right-12 group-hover:bottom-24 transition-all duration-700 z-50 rounded-[10px]">
                <span className="text-white font-source_code_pro font-semibold ss:text-[24px] text-[10px] ">
                  Organize a charity concert done in partnership with LovePink
                  Indonesia to raise awareness and funds for breast cancer
                  research
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex-row justify-between items-center w-full group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <div className={`flex-1 flex ${styles.flexCenter} relative`}>
              <img
                src={wsc}
                alt="WSC pic"
                className="group-hover:scale-125 transition-all duration-500 ss:w-[500px] w-[300px] mix-blend-lighten object-contain"
              />
            </div>
            <div className="hidden lg:block md:px-14 px-10">
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50">
                <span className="font-poppins font-semibold text-gradient ss:text-[16px] text-[12px]">
                  Competition
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="ss:text-2xl text-[12px] font-source_code_pro font-bold text-white">
                  World Scholar's Cup
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50 bg-discount-gradient rounded-[10px]">
                <span className="text-white font-semibold ss:text-[12px] text-[10px] ml-2 mr-2">
                  May 2019 - Aug 2019
                </span>
              </div>
              <div className="absolute -bottom-full left-12 right-12 group-hover:bottom-44 transition-all duration-700 z-50 rounded-[10px]">
                <span className="text-white font-source_code_pro font-semibold ss:text-[20px] text-[12px] ">
                  <ul className="list-disc">
                    <li>Top 20% Champion Scholars</li>
                    <li>Team Debate (Gold Medal)</li>
                    <li>Scholar's Challenge Natural Science (Gold Medal)</li>
                    <li>Individual Debate (Silver Medal)</li>
                    <li>Team Writing (Silver Medal)</li>
                    <li>
                      Tournament of Champions Qualifier in Yale University
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="ss:hidden md:px-14 px-10">
              <div className="absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-700 z-50">
                <span className="font-poppins font-semibold text-gradient ss:text-[16px] text-[12px]">
                  Competition
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-7 transition-all duration-700 z-50">
                <span className="ss:text-3xl text-[12px] font-source_code_pro font-bold text-white">
                  World Scholar's Cup
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-1 transition-all duration-700 z-50 bg-discount-gradient rounded-[10px]">
                <span className="text-white font-semibold ss:text-[12px] text-[10px] ml-2 mr-2">
                  May 2019 - Aug 2019
                </span>
              </div>
              <div className="absolute -bottom-full left-12 right-12 group-hover:bottom-24 transition-all duration-700 z-50 rounded-[10px]">
                <span className="text-white font-source_code_pro font-semibold ss:text-[20px] text-[9px] ">
                  <ul className="list-disc">
                    <li>Top 20% Champion Scholars</li>
                    <li>Team Debate (Gold Medal)</li>
                    <li>Scholar's Challenge Natural Science (Gold Medal)</li>
                    <li>Individual Debate (Silver Medal)</li>
                    <li>Team Writing (Silver Medal)</li>
                    <li>
                      Tournament of Champions Qualifier in Yale University
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex md:flex-row flex-col justify-between ${styles.paddingY} md:${styles.paddingX} ml-3 mr-3`}
      >
        <div className="mb-10">
          <div className="flex-row justify-between items-center w-full group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <div className={`flex-1 flex ${styles.flexCenter} relative`}>
              <img
                src={practera}
                alt="Practera logo"
                className="group-hover:scale-125 transition-all duration-500 ss:w-[500px] w-[300px] object-contain"
              />
            </div>
            <div className="hidden lg:block md:px-14 px-10">
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50">
                <span className="font-poppins font-semibold text-gradient">
                  Market Research Project
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <a
                  href="https://www.linkedin.com/posts/linggar-andaru-591a331b6_practera-activity-6850982023205576704-amD0?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                >
                  <div className="flex flex-row items-center ">
                    <span className="text-2xl font-source_code_pro font-bold text-white">
                      Digital Industry Projects
                    </span>
                    <img src={arrowUp} alt="arrow" className="w-[30px]" />
                  </div>
                </a>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50 bg-discount-gradient rounded-[10px]">
                <span className="text-white font-semibold ss:text-[12px] text-[10px] ml-2 mr-2">
                  Oct 2021
                </span>
              </div>
              <div className="absolute -bottom-full left-12 right-12 group-hover:bottom-36 transition-all duration-700 z-50 rounded-[10px]">
                <span className="text-white font-source_code_pro font-semibold ss:text-[16px] text-[10px] ">
                  <ul className="list-disc">
                    <li>
                      Engaged in market research and analysis for a company
                      based in Australia looking to expand its presence in
                      Australian food market with a new type of product.
                    </li>
                    <li>
                      Produced useful market insights, outlining current trends
                      and opportunity in targeted market.
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="ss:hidden md:px-14 px-10">
              <div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-700 z-50">
                <span className="font-poppins font-semibold text-gradient ss:text-[16px] text-[12px]">
                  Market Research Project
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-7 transition-all duration-700 z-50">
                <a
                  href="https://www.linkedin.com/posts/linggar-andaru-591a331b6_practera-activity-6850982023205576704-amD0?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                >
                  <div className="flex flex-row items-center ">
                    <span className="text-[12px] font-source_code_pro font-bold text-white">
                      Digital Industry Projects
                    </span>
                    <img src={arrowUp} alt="arrow" className="w-[12px]" />
                  </div>
                </a>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-1 transition-all duration-700 z-50 bg-discount-gradient rounded-[10px]">
                <span className="text-white font-semibold ss:text-[12px] text-[10px] ml-2 mr-2">
                  Oct 2021
                </span>
              </div>
              <div className="absolute -bottom-full left-12 right-12 group-hover:bottom-16 transition-all duration-700 z-50 rounded-[10px]">
                <span className="text-white font-source_code_pro font-semibold text-[8px] ">
                  <ul className="list-disc">
                    <li>
                      Engaged in market research and analysis for a company
                      based in Australia looking to expand its presence in
                      Australian food market with a new type of product.
                    </li>
                    <li>
                      Produced useful market insights, outlining current trends
                      and opportunity in targeted market.
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex-row justify-between items-center w-full group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <div className={`flex-1 flex ${styles.flexCenter} relative`}>
              <img
                src={lombok}
                alt="lombok_volunteer"
                className="group-hover:scale-125 transition-all duration-500 ss:w-[500px] w-[300px] mix-blend-lighten object-contain"
              />
            </div>
            <div className="hidden lg:block md:px-14 px-10">
              <div className="absolute -bottom-full left-12 group-hover:bottom-32 transition-all duration-700 z-50">
                <span className="font-poppins font-semibold text-gradient">
                  Volunteer
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-2xl font-source_code_pro font-bold text-white">
                  Helping Lombok Earthquake's Victims
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50 bg-discount-gradient rounded-[10px]">
                <span className="text-white font-semibold ss:text-[12px] text-[10px] ml-2 mr-2">
                  Oct 2018
                </span>
              </div>
              <div className="absolute -bottom-full left-12 right-12 group-hover:bottom-52 transition-all duration-700 z-50 rounded-[10px]">
                <span className="text-white font-source_code_pro font-semibold ss:text-[20px] text-[12px] ">
                  <ul className="list-disc">
                    <li>Help locals to clean rubbles and re-build houses</li>
                    <li>Give out lessons to children in child shelter</li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="ss:hidden md:px-14 px-10">
              <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50">
                <span className="font-poppins font-semibold text-gradient ss:text-[16px] text-[12px]">
                  Volunteer
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-700 z-50">
                <span className="ss:text-3xl text-[12px] font-source_code_pro font-bold text-white">
                  Helping Lombok Earthquake's Victims
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-0 transition-all duration-700 z-50 bg-discount-gradient rounded-[10px]">
                <span className="text-white font-semibold ss:text-[12px] text-[10px] ml-2 mr-2">
                  Oct 2018
                </span>
              </div>
              <div className="absolute -bottom-full left-12 right-12 group-hover:bottom-24 transition-all duration-700 z-50 rounded-[10px]">
                <span className="text-white font-source_code_pro font-semibold ss:text-[20px] text-[10px] ">
                  <ul className="list-disc">
                    <li>Help locals to clean rubbles and re-build houses</li>
                    <li>Give out lessons to children in child shelter</li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experiences;
