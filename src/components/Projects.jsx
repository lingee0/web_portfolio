import styles from '../style';
import { Stats } from '../components';
import fitbeat_1 from '../assets/Fitbeats-mood.jpg';
import helpbot1 from '../assets/HelpBot-1.png';

const Projects = () => (
  <section id="projects" className="py-6">
    <Stats />
    <h1 className="font-poppins text-white flexCenter text-white font-bold ss:text-[36px] text-[24px] px-6">
      My works
    </h1>
    <div className="relative">
      <div
        className={`flex md:flex-row flex-col ${styles.paddingY} md:${styles.paddingX}`}
      >
        <div className="">
          <div className="flex-row justify-between items-center w-full group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <a href="https://github.com/konfucius1/SummerHack-Fitbeats">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <div className={`flex-1 flex ${styles.flexCenter} relative`}>
                <img
                  src={fitbeat_1}
                  alt="Fitbeat front"
                  className="group-hover:scale-125 transition-all duration-500 ss:w-[500px] w-[300px] object-contain"
                />
              </div>
              <div className="md:px-14 px-10">
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
        </div>
        <div className="flex-row justify-between items-center w-full max-w-[700px]">
          <p className="text-white font-semibold ss:text-[20px] text-[12px] px-10 py-6">
            Looking for the perfect playlist to match your mood and energy level
            during a workout? Look no further than our web app! With just a few
            clicks, you can create a personalized Spotify playlist tailored to
            your specific needs. Simply input your workout duration and current
            mood, and our app will curate a playlist that keeps you motivated
            and energized throughout your entire workout. It's the ultimate
            workout companion!
          </p>
        </div>
      </div>
      <div
        className={`flex md:flex-row flex-col ${styles.paddingY} md:${styles.paddingX}`}
      >
        <div>
          <div className="flex-row justify-between items-center w-full group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <a href="https://github.com/lingee0/Discord-Bot">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <div className={`flex-1 flex ${styles.flexCenter} relative`}>
                <img
                  src={helpbot1}
                  alt="Helpbot front"
                  className="group-hover:scale-125 transition-all duration-500 ss:w-[500px] w-[300px] object-contain"
                />
              </div>
              <div className="md:px-14 px-10">
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
        </div>
        <div className="flex-row justify-between items-center w-full max-w-[700px]">
          <p className="text-white font-semibold ss:text-[20px] text-[12px] px-10 py-6">
            Introducing Help Bot, the ultimate companion for your Discord
            server! With its clever and humorous responses, Help Bot can help
            you and your friends stay engaged and entertained during your
            conversations. Whether you need a quick joke or a helpful tip, Help
            Bot is always there to lend a hand – and make you smile!
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
