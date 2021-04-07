import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>E-commerce Website</h1>
      {/* buttons linking to different urls */}
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/products">Product</Link>
    </div>
  );
}

export default Header;
