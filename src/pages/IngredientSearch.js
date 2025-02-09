import React, { useState } from "react";
import axios from "axios";
import "./styles/IngredientSearch.css";

const IngredientSearch = () => {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (!ingredients.trim()) {
      setError("Please enter at least one ingredient.");
      return;
    }
    setError("");
    
    axios
      .get(`http://localhost:8081/recipes/search?ingredients=${ingredients}`)
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recipes!", error);
        setError("No recipes found. Try different ingredients.");
      });
  };

  return (
    <div className="search-container">
      <h2>Find Recipes by Ingredients</h2>
      <input
        type="text"
        placeholder="Enter ingredients (comma separated)..."
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p className="error">{error}</p>}

      <div className="recipe-list">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <h3>{recipe.name}</h3>
              <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
              <p><strong>Instructions:</strong> {recipe.instructions}</p>
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default IngredientSearch;
