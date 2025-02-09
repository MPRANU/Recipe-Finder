package com.project.recipeFinder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class RecipeFinderApplication {

	public static void main(String[] args) {
		SpringApplication.run(RecipeFinderApplication.class, args);
	}

}
