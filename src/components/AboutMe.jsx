import React from 'react';
import styles from '../style';
import profile from '../assets/profile_pic.jpg';
import helpbot1 from '../assets/HelpBot-1.png';

const AboutMe = () => (
  <section
    className={`flex md:flex-row flex-col ${styles.paddingY}`}
    id="aboutMe"
  >
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={profile}
        alt="Profile picture"
        className="ss:w-[80%] w-[50%] relative z-[5]"
      />
    </div>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex-1 lg:bg-gray-gradient mt-10">
        <p className="font-poppins text-white flexCenter font-bold ss:text-[36px] text-[24px] mb-6">
          Get to know me
        </p>
        <p className="font-poppins text-white flexCenter max-w-[600px] mb-16">
          I'm a hard-working University Student seeking experience. As a
          computing and software system student, I'm a bit of a tech geek, but I
          promise I'm not as boring as I sound. I always strive to be innovative
          and creative in my work, and I'm pretty good at coming up with "out of
          the box" solutions to problems. I'm also a bit of a perfectionist,
          which comes in handy when you need someone who's detail-oriented to
          get the job done right. Plus, I work great with others and have been
          known to crack a few jokes to keep the team morale up.
        </p>
      </div>
    </div>
  </section>
);

export default AboutMe;
