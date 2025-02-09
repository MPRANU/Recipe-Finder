import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About FoodSaver</h1>
        <p className="about-description">
          Welcome to <strong>FoodSaver</strong>! Our mission is to help you reduce food waste by finding the best recipes
          using the ingredients you already have at home. We make meal planning easier, healthier, and more efficient.
        </p>

        <h2 className="about-subtitle">Why Choose Us?</h2>
        <ul className="about-list">
          <li>🍽️ Discover new and exciting recipes.</li>
          <li>🌱 Reduce food waste and save money.</li>
          <li>⏳ Save time with easy-to-follow recipes.</li>
          <li>🥗 Enjoy healthy and delicious meals.</li>
        </ul>

        <h2 className="about-subtitle">Our Vision</h2>
        <p className="about-description">
          We believe in a world where every household makes the most of its food resources.  
          By providing smart recipe suggestions, we empower people to cook creatively and sustainably.
        </p>
      </div>
    </div>
  );
};

export default About;
