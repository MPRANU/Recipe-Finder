import React, { useState } from 'react';
import axios from 'axios';

const AddRecipe = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [message, setMessage] = useState(''); // To show success or error messages

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!name || !ingredients || !instructions) {
      setMessage('Please fill all fields!');
      return;
    }

    // If ingredients are inputted as a string, you can convert them to an array (by separating them using commas)
    const ingredientsArray = ingredients.split(',').map((ingredient) => ingredient.trim());

    axios.post('http://localhost:8081/recipes', { name, ingredients: ingredientsArray, instructions })
      .then(response => {
        setMessage('Recipe added successfully!');
        console.log('Recipe added', response.data);
        setName('');
        setIngredients('');
        setInstructions('');
      })
      .catch(error => {
        setMessage('There was an error adding the recipe!');
        console.error('There was an error adding the recipe!', error);
      });
  };

  return (
    <div>
      <h1>Add Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Ingredients (separate by commas):
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Instructions:
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <button type="submit">Add Recipe</button>
        </div>
      </form>
      {message && <p>{message}</p>} {/* Show success or error message */}
    </div>
  );
};

export default AddRecipe;
