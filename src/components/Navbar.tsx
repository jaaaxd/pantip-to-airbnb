import Image from 'next/image';

import newIcon from '@/public/assets/icons/new.svg';

export const Navbar = () => (
  <nav className="flex h-[90px] w-full items-center justify-between">
    <div className="logo w-[250px] text-2xl font-bold text-primary">pantip</div>
    <div className="cursor-pointer rounded-full bg-hoverbg px-5 py-2 font-medium text-secondary-200 max-md:hidden">Home</div>
    <div className="flex w-[250px] justify-end gap-4 text-nowrap">
      <div className="flex items-center gap-2">
        <Image alt="create topic" src={newIcon} height={20} width={20} />
        <a href="/" className="text-sm font-medium text-secondary-200 hover:text-primary">
          New topic
        </a>
      </div>
      <a href="/" className="text-sm font-medium text-secondary-200 hover:text-primary">Login / Register</a>
    </div>
  </nav>
);
