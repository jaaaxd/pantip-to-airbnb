import { forums } from '@/app/data/forums';

export const Topic = () => (
  <div className="topic-bar m-6 flex w-full gap-8 overflow-y-auto border-t py-5">

    {forums.map((forum, index) => (
      <div key={index} className="forum-item flex w-fit flex-col items-center">
        <img src={forum.icon} alt={`${forum.name} icon`} className="forum-icon m-2 w-5 " />
        <b className="text-nowrap pb-1 text-sm font-normal text-secondary-100 hover:border-b-2 hover:border-border  hover:text-secondary-200">{forum.name}</b>
      </div>
    ))}
  </div>
);
