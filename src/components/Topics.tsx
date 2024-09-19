'use client';

import { useState } from 'react';

import { forums } from '@/app/data/forums';

export const Topic = () => {
  const [activeForum, setActiveForum] = useState(forums[0]?.name);

  return (
    <>
      <div className="topic-bar m-6 mb-5 flex w-full gap-8 overflow-y-auto overscroll-y-none border-t py-5">
        {forums.map((forum, index) => (
          <div
            key={index}
            className={`forum-item flex w-fit cursor-pointer flex-col items-center focus-within:border-b-2 focus-within:border-black hover:border-b-2  focus:border-black active:border-black ${
              activeForum === forum.name ? 'border-b-2 border-black' : ''
            }`}
          >
            <img src={forum.icon} alt={`${forum.name} icon`} className="forum-icon m-2 w-5" />
            <button
              className={`text-nowrap pb-1 text-sm font-normal text-secondary-100 hover:text-secondary-200 focus:text-secondary-200 ${
                activeForum === forum.name ? 'text-secondary-200' : 'hover:border-border'
              }`}
              onClick={() => setActiveForum(forum.name)}
            >
              {forum.name}
            </button>
          </div>
        ))}
      </div>

      <div className="topics-container felx-col flex w-[70%] flex-col border-b border-b-border">

        {[...Array(10)].map((_, i) => (
          <a
            href={`/topic/${i + 1}`}
            key={i}
            className="topic cursor-pointer border-t border-t-border px-10 py-4 text-secondary-200 hover:bg-[#FFF5F7] hover:text-primary"
          >
            {activeForum}
            {' '}
            forum
            {' '}
            topic
            {' '}
            {i + 1}
          </a>
        ))}
      </div>
    </>
  );
};
