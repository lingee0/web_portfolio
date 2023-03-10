import React from 'react';
import styles from '../style';
import profile from '../assets/profile_pic.jpg';
import { SkillsTab, HobbiesTab } from '../components';

const AboutMe = () => (
  <section id="aboutMe" className="mt-20">
    <div
      className={`flex-1 flex md:flex-row flex-col ${styles.flexCenter} xl:px-0 sm:px-16 px-6 md:my-0 my-10 relative`}
    >
      <div className="mr-10">
        <img
          src={profile}
          alt="Profile picture"
          className="ss:w-[500px] w-[300px] relative z-[5]"
        />
      </div>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex-1 lg:bg-gray-gradient mt-10">
          <p className="font-source_code_pro text-white flexCenter font-bold ss:text-[36px] text-[24px] mb-6">
            Get to know me
          </p>
          <p className="font-source_code_pro text-white flexCenter max-w-[700px] ss:mb-16 leading-6">
            I'm a hard-working University Student seeking experience. As a
            computing and software system student, I'm a bit of a tech geek, but
            I promise I'm not as boring as I sound. <br /> <br />
            I always strive to be innovative and creative in my work, and I'm
            pretty good at coming up with "out of the box" solutions to
            problems. I'm also a bit of a perfectionist, which comes in handy
            when you need someone who's detail-oriented to get the job done
            right. <br /> <br />
            Plus, I work great with others and have been known to crack a few
            jokes to keep the team morale up.
          </p>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center mt-5 xl:px-0 sm:px-16 px-6">
      <SkillsTab />
    </div>
    <p className="font-source_code_pro text-white flexCenter font-bold ss:text-[36px] text-[24px] mt-20 mb-5 ss:ml-0 ml-6 xl:px-0 sm:px-16 px-6">
      My Hobbies
    </p>
    <div>
      <HobbiesTab />
    </div>
  </section>
);

export default AboutMe;
