import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/recipes') // Ensure this URL matches your backend endpoint
      .then(response => {
        setRecipes(response.data);
        //console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the recipes!', error);
      });
  }, []);

  return (
    <div>
      <h1>Recipe List</h1>
      {recipes.length > 0 ? (
        <ul>
          {recipes.map(recipe => (
            <li key={recipe._id}> {/* Changed 'id' to '_id' for MongoDB */}
              <h2>{recipe.name}</h2>
              <p>Ingredients: {recipe.ingredients.join(', ')}</p> {/* Join ingredients array */}
              <p>Prep Time: {recipe.prepTime} mins</p>
              <p>Rating: {recipe.rating}</p>
              <p>Instructions: {recipe.instructions}</p>
              {recipe.image && <img src={recipe.image} alt={recipe.name} width="200" />} {/* Check if image exists */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
