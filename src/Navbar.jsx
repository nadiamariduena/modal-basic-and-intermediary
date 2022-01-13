import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <h3>
          <Link to="/">LOGO </Link>{" "}
        </h3>

        <nav>
          <ul>
            <li>
              <Link to="/example1">Example 2 </Link>{" "}
            </li>
            <li>Example 3</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
