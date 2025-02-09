import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams hook

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams(); // Get the recipe id from the URL params

  useEffect(() => {
    axios.get(`http://localhost:8081/recipes/${id}`)
      .then(response => {
        setRecipe(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the recipe!', error);
      });
  }, [id]); // The effect will run again if the id changes

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
