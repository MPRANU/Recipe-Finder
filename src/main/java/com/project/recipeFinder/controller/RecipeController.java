package com.project.recipeFinder.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.recipeFinder.entity.Recipe;
import com.project.recipeFinder.service.RecipeService;

@RestController
@RequestMapping("/recipes")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    @GetMapping("/search")
    public Recipe getRecipeByName(@RequestParam String name) {
        return recipeService.findByName(name);
    }


    // Get all recipes
    @GetMapping
    public List<Recipe> getAllRecipes() {
        return recipeService.getAllRecipes();
    }

    // Get a recipe by id
    @GetMapping("/{id}")
    public Recipe getRecipeById(@PathVariable String id) {
        return recipeService.getRecipeById(id);
    }

    // Create a new recipe
    @PostMapping
    public Recipe createRecipe(@RequestBody Recipe recipe) {
        return recipeService.createRecipe(recipe);
    }

    // Controller to handle delete by name
@DeleteMapping("/delete")
public ResponseEntity<String> deleteRecipeByName(@RequestParam String name) {
    try {
        recipeService.deleteRecipeByName(name);
        return ResponseEntity.ok("Recipe deleted successfully!");
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting recipe: " + e.getMessage());
    }
}

}
