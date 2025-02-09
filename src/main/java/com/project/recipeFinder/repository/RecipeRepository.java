package com.project.recipeFinder.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.project.recipeFinder.entity.Recipe;

public interface RecipeRepository extends MongoRepository<Recipe, String> {
    package com.project.recipeFinder.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.project.recipeFinder.entity.Recipe;

public interface RecipeRepository extends MongoRepository<Recipe, Long> {
    Optional<Recipe> findByName(String name);  // Find a recipe by name
    void deleteByName(String name);  // Delete a recipe by name
}
