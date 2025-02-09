import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
//import logo from "../assets/logo.png"; // Ensure the logo is placed in src/assets/

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="images/logo.jpg" alt="FoodSaver Logo" className="logo" />
        <h2 className="brand-name">FoodSaver</h2>
      </div>
      
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <form className="search-bar">
        <input type="text" placeholder="Search for recipes..." />
        <button type="submit">🔍</button>
        </form>

      <Link to="/login" className="cta-button">Login</Link>
      <div className="profile-dropdown">
        <img src="/images/user-avatar.png" alt="Profile" className="profile-icon" />
        <div className="dropdown-content">
        <Link to="/profile">My Profile</Link>
        <Link to="/saved-recipes">Saved Recipes</Link>
        <Link to="/logout">Logout</Link>
  </div>
</div>
    </nav>
    
  );
};

export default Navbar;
