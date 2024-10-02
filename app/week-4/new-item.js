"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Item added with quantity: ${quantity}`);
    setQuantity(1);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 bg-gray-200 rounded ${quantity === 1 ? "opacity-50" : ""}`}
        >
          -
        </button>
        <span className="text-xl">{quantity}</span>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 bg-gray-200 rounded ${quantity === 20 ? "opacity-50" : ""}`}
        >
          +
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
