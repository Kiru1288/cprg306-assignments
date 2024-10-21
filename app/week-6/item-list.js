"use client";

import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

const ItemList = () => {
  const [items] = useState(itemsData);
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setSortBy('name')}
          className={sortBy === 'name' ? 'bg-blue-500 text-white px-4 py-2' : 'bg-gray-300 px-4 py-2'}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={sortBy === 'category' ? 'bg-blue-500 text-white px-4 py-2' : 'bg-gray-300 px-4 py-2'}
        >
          Sort by Category
        </button>
      </div>
      <ul className="space-y-4">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
