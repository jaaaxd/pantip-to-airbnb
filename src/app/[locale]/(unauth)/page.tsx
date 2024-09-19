'use client';
import { useState } from 'react';

import { Navbar } from '@/components/Navbar';
import { Search } from '@/components/Search';
import { Topic } from '@/components/Topics';

export default function Index() {
  const [query, setQuery] = useState<string>('');
  return (
    <div className="flex flex-col items-center px-14 pb-14">
      <Navbar />
      <Search setQuery={setQuery} />
      <Topic query={query} />
    </div>
  );
}
