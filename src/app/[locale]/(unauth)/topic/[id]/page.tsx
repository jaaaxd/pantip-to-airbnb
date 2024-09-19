'use client';

import { useParams } from 'next/navigation';

const TopicPage = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col items-center justify-center gap-2 p-10 py-20 text-secondary-200">
      <h1 className="text-lg font-bold">
        Topic
        {' '}
        {id}
      </h1>
      <p>
        This is the content for the

        topic
        {' '}
        {id}
        {' '}
      </p>
    </div>
  );
};

export default TopicPage;
