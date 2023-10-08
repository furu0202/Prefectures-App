'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { ITEMS } from '../Items';

const page = () => {
  const pathname = usePathname();
  const pathdata = ITEMS.find((item) => item.href === pathname);
  return <div>pages</div>;
};

export default page;
