'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { ITEMS } from '../components/Items';

const Page = () => {
  const pathname = usePathname();
  const pathData = ITEMS.find((item) => item.href === pathname);
  return (
    <div>
      <h1>{pathData.title}</h1>
    </div>
  );
};

export default Page;
