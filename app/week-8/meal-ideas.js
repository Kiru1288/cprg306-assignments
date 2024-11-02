"use client";
import React, { useState, useEffect } from "react";

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await res.json();
    setMeals(data.meals || []);
  };

  useEffect(() => {
    if (ingredient) fetchMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div style={{ color: "red", padding: "20px", backgroundColor: "#1f2937", borderRadius: "8px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px", textAlign: "center" }}>Meal Ideas</h2>
      <p style={{ fontSize: "18px", marginBottom: "15px", textAlign: "center" }}>Here are some meal ideas using <strong>{ingredient}</strong>:</p>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {meals.map((meal) => (
          <li key={meal.idMeal} style={{ padding: "10px", margin: "5px 0", backgroundColor: "#374151", borderRadius: "4px", textAlign: "center" }}>
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
