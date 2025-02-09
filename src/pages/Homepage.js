import React from "react";
import "../styles/Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="header">
        <h1>Discover Recipes from What You Have</h1>
        <p className="subtext">
          A smarter way to cook - Reduce waste, save money, and enjoy homemade meals!
        </p>
      </header>

      {/* CTA Section */}
      <div className="cta-container">
        <Link to="/start-cooking" className="cta-button">Start Cooking</Link>
      </div>

      {/* Image Section */}
      <div className="image-container">
        <img src="/images/cooking.jpg" alt="Cooking Inspiration" />
      </div>
    </div>
  );
};

export default Homepage;
