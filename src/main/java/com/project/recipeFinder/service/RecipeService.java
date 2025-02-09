package com.project.recipeFinder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.recipeFinder.entity.Recipe;
import com.project.recipeFinder.repository.RecipeRepository;

import java.util.List;
import java.util.Optional;

@Service
public class RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;

    public Recipe findByName(String name) {
        return recipeRepository.findByName(name);  // Assuming you have a method in your repository
    }
    // Get all recipes
    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    // Get a recipe by id
    public Recipe getRecipeById(String id) {
        Optional<Recipe> recipe = recipeRepository.findById(id);
        return recipe.orElse(null);  // Return null if recipe is not found
    }

    // Create a new recipe
    public Recipe createRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    public void deleteRecipeByName(String name) {
        // Find the recipe by name first to ensure it exists
        Optional<Recipe> recipe = recipeRepository.findByName(name);
        
        if (recipe.isPresent()) {
            recipeRepository.deleteByName(name);  // Delete the recipe from the database
        } else {
            throw new RuntimeException("Recipe not found");
        }
    }
    
}
