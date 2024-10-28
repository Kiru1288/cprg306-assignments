import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-white p-4 rounded-lg shadow-lg flex justify-between items-center mb-4">
      <div>
        <p className="text-xl font-semibold">{name}</p>
        <p className="text-sm text-gray-600">Buy {quantity} in {category}</p>
      </div>
    </li>
  );
};

export default Item;
