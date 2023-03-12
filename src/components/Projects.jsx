import styles from '../style';
import { Stats } from '../components';
import { arrowUp } from '../assets';
import fitbeat_1 from '../assets/Fitbeats-mood.jpg';
import helpbot1 from '../assets/HelpBot-1.png';
import shadowPirate from '../assets/shadow_pirate.png';

const Projects = () => (
  <section id="projects" className="mt-10">
    <Stats />
    <h1 className="font-poppins text-white flexCenter text-white font-bold ss:text-[36px] text-[24px] px-6 ss:mb-20 mb-5 ss:ml-0 ml-5">
      My works
    </h1>
    <div className="relative">
      <div
        className={`flex md:flex-row flex-col border-2 border-white/50 rounded-xl mb-10 ss:mr-0 mr-10 ss:ml-0 ml-10`}
      >
        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
          <div className="flex-row justify-between items-center w-full">
            <a href="https://github.com/konfucius1/SummerHack-Fitbeats">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 group-active:transition-all"></div>
              <div className={`flex-1 flex ${styles.flexCenter} relative`}>
                <img
                  src={fitbeat_1}
                  alt="Fitbeat front"
                  className="group-hover:scale-125 transition-all duration-500 ss:w-[400px] w-[200px] object-contain"
                />
              </div>
              <div className="hidden lg:block md:px-14 px-10">
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="font-poppins font-semibold text-gradient">
                    Web App
                  </span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl font-bold text-white">
                    Fitbeats
                  </span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50 bg-green-gradient cursor-pointer rounded-[10px]">
                  <span className="text-black font-semibold ss:text-[12px] text-[10px] ml-2 mr-2">
                    Ongoing
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div
            className={`sm:hidden flex-1 flex justify-between ${styles.flexCenter} ml-4 mr-4 relative`}
          >
            <div className="">
              <span className="font-poppins font-semibold text-[12px] text-gradient">
                Web App
              </span>
            </div>
            <div className="flex">
              <span className="text-xl font-bold text-white">Fitbeats</span>
              <img src={arrowUp} alt="arrow" />
            </div>
            <div className="bg-green-gradient cursor-pointer rounded-[10px] w-[57px]">
              <span className="text-black font-semibold ss:text-[12px] text-[10px] ml-2 mr-2">
                Ongoing
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 justify-between align-middle max-w-[800px]">
          <p className="text-white font-semibold ss:text-[16px] text-[10px] ml-10 py-6 ss:mr-0 mr-10">
            A Website Application that utilizes Spotify API to create tailored
            playlists for users to be played during their workout sessions. The
            playlists are based on users' current mood, workout duration, and
            their previous listening habit.
          </p>
          <div>
            <h4 className="ss:text-[20px] text-[12px] text-white ml-10 font-source_code_pro font-bold">
              Tech Stack
            </h4>
            <div className="flex flex-wrap justify-start mt-2 sm:mt-0 ml-10">
              <div className="ss:text-[12px] text-[8px] bg-gray-500 text-white font-source_code_pro py-1 px-3 rounded-full mr-2 mb-2">
                ReactJS
              </div>
              <div className="ss:text-[12px] text-[8px] bg-gray-500 text-white font-source_code_pro py-1 px-3 rounded-full mr-2 mb-2">
                TailwindCSS
              </div>
              <div className="ss:text-[12px] text-[8px] bg-gray-500 text-white font-source_code_pro py-1 px-3 rounded-full mr-2 mb-2">
                NodeJS
              </div>
              <div className="ss:text-[12px] text-[8px] bg-gray-500 text-white font-source_code_pro py-1 px-3 rounded-full mr-2 mb-2">
                Spotify API
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex md:flex-row flex-col border-2 border-white/50 rounded-xl mb-10 ss:mr-0 mr-10 ss:ml-0 ml-10`}
      >
        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
          <div className="flex-row justify-between items-center w-full">
            <a href="https://github.com/lingee0/shadow_pirate">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <div className={`flex-1 flex ${styles.flexCenter} relative`}>
                <img
                  src={shadowPirate}
                  alt="Shadow Pirate"
                  className="group-hover:scale-125 transition-all duration-500 ss:w-[400px] w-[200px] object-contain"
                />
              </div>
              <div className="hidden lg:block md:px-14 px-10">
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="font-poppins font-semibold text-gradient">
                    Video Game
                  </span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl font-bold text-white">
                    Shadow Pirate
                  </span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50 bg-red-gradient cursor-pointer rounded-[10px]">
                  <span className="text-black font-semibold ss:text-[12px] text-[10px] ml-2 mr-2">
                    Finished
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div
            className={`sm:hidden flex-1 flex justify-between ${styles.flexCenter} ml-4 mr-4 relative`}
          >
            <div className="">
              <span className="font-poppins font-semibold text-[12px] text-gradient">
                Video Game
              </span>
            </div>
            <div className="flex">
              <span className="text-xl font-bold text-white">
                Shadow Pirate
              </span>
              <img src={arrowUp} alt="arrow" />
            </div>
            <div className="bg-red-gradient cursor-pointer rounded-[10px] w-[57px]">
              <span className="text-black font-semibold ss:text-[12px] text-[10px] ml-2 mr-2">
                Finished
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 justify-between align-middle max-w-[800px]">
          <p className="text-white font-semibold ss:text-[16px] text-[10px] ml-10 py-6 ss:mr-0 mr-10">
            A simple video game with two levels where players need to go through
            stationary obstacles and enemies that can shoot projectiles. Players
            need to reach the goal of each level while staying alive.
          </p>
          <div>
            <h4 className="ss:text-[20px] text-[12px] text-white ml-10 font-source_code_pro font-bold">
              Tech Stack
            </h4>
            <div className="flex flex-wrap justify-start mt-2 sm:mt-0 ml-10">
              <div className="ss:text-[12px] text-[8px] bg-gray-500 text-white font-source_code_pro py-1 px-3 rounded-full mr-2 mb-2">
                Java
              </div>
              <div className="ss:text-[12px] text-[8px] bg-gray-500 text-white font-source_code_pro py-1 px-3 rounded-full mr-2 mb-2">
                Bagel
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex md:flex-row flex-col border-2 border-white/50 rounded-xl mb-10 ss:mr-0 mr-10 ss:ml-0 ml-10`}
      >
        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
          <div className="flex-row justify-between items-center w-full">
            <a href="https://github.com/lingee0/Discord-Bot">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <div className={`flex-1 flex ${styles.flexCenter} relative`}>
                <img
                  src={helpbot1}
                  alt="Helpbot front"
                  className="group-hover:scale-125 transition-all duration-500 ss:w-[400px] w-[200px] object-contain"
                />
              </div>
              <div className="hidden lg:block md:px-14 px-10">
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="font-poppins font-semibold text-gradient">
                    Discord Bot
                  </span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl font-bold text-white">
                    Help Bot
                  </span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50 bg-red-gradient cursor-pointer rounded-[10px]">
                  <span className="text-black font-semibold ss:text-[12px] text-[10px] ml-2 mr-2">
                    Finished
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div
            className={`sm:hidden flex-1 flex justify-between ${styles.flexCenter} ml-4 mr-4 relative`}
          >
            <div className="">
              <span className="font-poppins font-semibold text-[12px] text-gradient">
                Discord Bot
              </span>
            </div>
            <div className="flex">
              <span className="text-xl font-bold text-white">Help Bot</span>
              <img src={arrowUp} alt="arrow" />
            </div>
            <div className="bg-red-gradient cursor-pointer rounded-[10px] w-[57px]">
              <span className="text-black font-semibold ss:text-[12px] text-[10px] ml-2 mr-2">
                Finished
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 justify-between align-middle max-w-[800px]">
          <p className="text-white font-semibold ss:text-[16px] text-[10px] ml-10 py-6 ss:mr-0 mr-10">
            Help Bot is the ultimate companion for your Discord server! With its
            clever and humorous responses, Help Bot can help you and your
            friends stay engaged and entertained during your conversations. It
            also has a profanity monitoring feature to help moderate discord
            servers.
          </p>
          <div>
            <h4 className="ss:text-[20px] text-[12px] text-white ml-10 font-source_code_pro font-bold">
              Tech Stack
            </h4>
            <div className="flex flex-wrap justify-start mt-2 sm:mt-0 ml-10">
              <div className="ss:text-[12px] text-[8px] bg-gray-500 text-white font-source_code_pro py-1 px-3 rounded-full mr-2 mb-2">
                Python
              </div>
              <div className="ss:text-[12px] text-[8px] bg-gray-500 text-white font-source_code_pro py-1 px-3 rounded-full mr-2 mb-2">
                Discord API
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
