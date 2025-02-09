import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RecipeList.css";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8081/recipes")
      .then((response) => {
        setRecipes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recipes!", error);
        setError("Failed to load recipes. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="recipe-list-container">
      <h2>Available Recipes</h2>

      {loading && <p>Loading recipes...</p>}
      {error && <p className="error">{error}</p>}

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.name}</h3>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
