"use client";
import React, { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";

import { useRouter } from "next/navigation";

import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

const Page = () => {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState(itemsData || []);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (!user) {
      router.push("/week-9/page");
    }
  }, [user, router]);

  if (!user) return null;

  const handleAddItem = (newItem) => {
    setItems([...items, { ...newItem, id: Math.random().toString(36).substring(2, 9) }]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, "").split(",")[0].trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="p-6 bg-gray-900 min-h-screen flex">
      <div className="w-1/2 space-y-8">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
};

export default Page;
