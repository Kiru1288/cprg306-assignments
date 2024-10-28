"use client";
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, { ...newItem, id: Math.random().toString(36).substring(2, 9) }]);
  };

  return (
    <main className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
};

export default Page;
