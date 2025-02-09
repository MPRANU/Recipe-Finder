import React, { useState } from 'react';
import axios from 'axios';

const DeleteRecipe = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = () => {
    if (!name) {
      setMessage('Please enter a recipe name.');
      return;
    }

    // Send DELETE request to delete recipe by name
    axios.delete(`http://localhost:8081/recipes/delete?name=${name}`)
      .then(response => {
        setMessage('Recipe deleted successfully!');
      })
      .catch(error => {
        setMessage('There was an error deleting the recipe!');
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Delete Recipe</h1>
      <label>
        Recipe Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter recipe name"
        />
      </label>
      <br />
      <button onClick={handleDelete}>Delete Recipe</button>
      <p>{message}</p>
    </div>
  );
};

export default DeleteRecipe;
