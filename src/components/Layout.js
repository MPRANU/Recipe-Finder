import React from "react";
import Navbar from "../pages/Navbar"; // Import the Navbar

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />  {/* Navbar appears on every page */}
      <main>{children}</main> {/* This will render the specific page content */}
    </>
  );
};

export default Layout;
