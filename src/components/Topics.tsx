'use client';

import { useState } from 'react';

import { forums } from '@/app/data/forums';

type TopicProps = {
  query: string;
};

export const Topic: React.FC<TopicProps> = ({ query }) => {
  const [activeForum, setActiveForum] = useState(forums[0]?.name);

  const sampleTopics = [...Array(10)].map((_, i) => ({
    id: i + 1,
    name: `Topic ${i + 1}`, // Example topic names
  }));

  const filteredTopics = sampleTopics.filter(topic =>
    topic.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <div className="topic-bar m-6 mb-5 flex w-full gap-8 overflow-y-auto overscroll-y-none border-t py-5">
        {forums.map((forum, index) => (
          <button
            key={index}
            onClick={() => setActiveForum(forum.name)}
            className={`forum-item flex w-fit cursor-pointer flex-col items-center focus-within:border-b-2 focus-within:border-black hover:border-b-2  focus:border-black active:border-black ${
              activeForum === forum.name ? 'border-b-2 border-black' : ''
            }`}
          >
            <img src={forum.icon} alt={`${forum.name} icon`} className="forum-icon m-2 w-5" />
            <div
              className={`text-nowrap pb-1 text-sm font-normal text-secondary-100 hover:text-secondary-200 focus:text-secondary-200 ${
                activeForum === forum.name ? 'text-secondary-200' : 'hover:border-border'
              }`}
            >
              {forum.name}
            </div>
          </button>
        ))}
      </div>

      <div className="topics-container flex w-[70%] flex-col border-b border-b-border">

        {filteredTopics.length > 0
          ? (
              filteredTopics.map(topic => (
                <a
                  href={`/topic/${topic.id}`}
                  key={topic.id}
                  className="topic cursor-pointer border-t border-t-border px-10 py-4 text-secondary-200 hover:bg-[#FFF5F7] hover:text-primary"
                >
                  {activeForum}
                  {' '}
                  forum
                  {' '}
                  topic
                  {' '}
                  {topic.id}
                </a>
              ))
            )
          : (
              <div className="topic px-10 py-4 text-secondary-200">
                No topics match your query.
              </div>
            )}
      </div>
    </>
  );
};
