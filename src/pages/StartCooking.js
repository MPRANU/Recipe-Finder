import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/StartCooking.css";

const StartCooking = () => {
  const [ingredients, setIngredients] = useState("");

  const handleInputChange = (event) => {
    setIngredients(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirect or search functionality here
    alert(`Searching recipes with: ${ingredients}`);
  };

  return (
    <div className="start-cooking-container">
      <header>
        <h1>Start Cooking!</h1>
        <p>Enter the ingredients you have and find the perfect recipes.</p>
      </header>

      <div className="input-container">
        <form onSubmit={handleSubmit} className="ingredients-form">
          <input
            type="text"
            placeholder="Enter ingredients..."
            value={ingredients}
            onChange={handleInputChange}
          />
          <button type="submit" className="search-button">
            Search Recipes
          </button>
        </form>
      </div>

      <div className="cta-container">
        <Link to="/recipes" className="cta-button">
          Browse All Recipes
        </Link>
      </div>
    </div>
  );
};

export default StartCooking;
