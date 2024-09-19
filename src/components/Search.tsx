import Image from 'next/image';

import search from '@/public/assets/icons/search.svg';

export const Search = () => (
  <label htmlFor="search" className="my-2 flex h-14 w-full items-center justify-center rounded-full border border-border p-2 px-5 shadow-md focus-within:border-2 focus-within:border-secondary-100 md:w-[50%]">
    <input id="search" className="w-full text-secondary-200 outline-none placeholder:font-light" placeholder="Search">
    </input>
    <Image src={search} height={25} width={25} alt="search topic" />
  </label>
);
