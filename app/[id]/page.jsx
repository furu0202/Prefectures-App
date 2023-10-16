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
      <h1>第X問</h1>
      <h2>現在の正解数</h2>
      <h2>問題文</h2>
      <div>
        <p>選択肢A</p>
        <p>選択肢B</p>
        <p>選択肢C</p>
        <p>選択肢D</p>
      </div>
    </div>
  );
};

export default Page;
