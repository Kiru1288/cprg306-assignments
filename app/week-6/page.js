import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
