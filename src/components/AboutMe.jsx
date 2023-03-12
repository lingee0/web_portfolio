import React from 'react';
import styles from '../style';
import profile from '../assets/profile_pic.jpg';
import { YoutubeEmbed, SkillsTab, HobbiesTab } from '../components';

const AboutMe = () => (
  <section id="aboutMe" className="mt-20">
    <div
      className={`flex-1 flex md:flex-row flex-col ${styles.flexCenter} md:my-0 my-10 relative`}
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
          <p className="font-poppins text-white flexCenter font-bold ss:text-[36px] text-[24px] mb-6">
            Get to know me
          </p>
          <p className="font-poppins text-white flexCenter max-w-[700px] ss:mb-16">
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
    <div className="flex items-center justify-center mt-5">
      <SkillsTab />
    </div>
    <p className="font-poppins text-white flexCenter font-bold ss:text-[36px] text-[24px] mt-20 mb-5 ss:ml-0 ml-6">
      My Hobbies
    </p>
    <div>
      <HobbiesTab />
    </div>
    {/* <div
      className={`flex-1 flex md:flex-row flex-col ${styles.flexCenter} md:my-0 my-1 relative`}
    >
      <div className="mt-10 relative mr-10">
        <YoutubeEmbed videoId="jnOKC0YTpXQ" />
      </div>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <p className="font-poppins text-white flexCenter max-w-[600px] ss:mb-16">
          Video games are more than just entertainment for me - it's my passion.
          I love diving into immersive worlds, discovering new strategies, and
          competing with others online. Check out the "Projects" page to see how
          my love for gaming influence my work.
        </p>
      </div>
    </div>
    <div
      className={`flex-1 flex md:flex-row flex-col ${styles.flexCenter} md:my-0 my-1 relative`}
    >
      <div className="mt-10 relative mr-10">
        <YoutubeEmbed videoId="pj9x-IuT8mk" />
      </div>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <p className="font-poppins text-white flexCenter max-w-[600px] mb-16">
          Music has always been a huge part of my life. Whether I'm listening to
          my favorite artists, exploring new genres, or playing an instrument,
          I'm constantly inspired by the world of music. Check out the
          "Projects" page to see how my passion for music influences my creative
          work.
        </p>
      </div>
    </div> */}
  </section>
);

export default AboutMe;
