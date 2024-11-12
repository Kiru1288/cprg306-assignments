"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('produce');
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, quantity, category });
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold">Add New Item</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-1/2">
        <div>
          <label htmlFor="name" className="block mb-2 text-lg">Item Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter item name"
            required
            className="w-full border px-4 py-2"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className={`px-4 py-2 bg-gray-200 rounded ${quantity === 1 ? "opacity-50" : ""}`}
          >
            -
          </button>
          <span className="text-xl">{quantity}</span>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className={`px-4 py-2 bg-gray-200 rounded ${quantity === 20 ? "opacity-50" : ""}`}
          >
            +
          </button>
        </div>
        <div>
          <label htmlFor="category" className="block mb-2 text-lg">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border px-4 py-2"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded w-full">
          Submit
        </button>
      </form>
    </div>
  );
}
