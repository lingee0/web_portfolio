import React from 'react';
import { Tab } from '@headlessui/react';
import { useState } from 'react';
import { YoutubeEmbed } from '../components';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const HobbiesTab = () => {
  let [categories] = useState({
    Music: [
      {
        id: 1,
        title: 'My band performance in high school',
        videoId: 'pj9x-IuT8mk',
        description:
          'Music has always been a huge part of my life. Whether I\'m listening to my favorite artists, exploring new genres, or playing an instrument, I\'m constantly inspired by the world of music. Check out the "Projects" page to see how my passion for music influences my creative work.',
      },
    ],
    'Video Games': [
      {
        id: 1,
        title: 'My Valorant 1v5 clutch clip',
        videoId: 'jnOKC0YTpXQ',
        description:
          'Video games are more than just entertainment for me - it\'s my passion. I love diving into immersive worlds, discovering new strategies, and competing with others online. Check out the "Projects" page to see how my love for gaming influence my work.',
      },
    ],
  });

  return (
    <div className="sm:max-w-2xl sm:px-0 font-poppins">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-[20px] font-poppins leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mb-20 mt-2 font-poppins">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-primary p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul className="font-poppins">
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-blue-900/20"
                  >
                    <h3 className="text-[20px] leading-5 text-white mb-10">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex font-normal text-white space-y-10 text-[16px] leading-loose list-none flex flex-col justify-end items-center flex-1">
                      <li>
                        <YoutubeEmbed videoId={post.videoId} />
                      </li>
                      <li>{post.description}</li>
                    </ul>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default HobbiesTab;
