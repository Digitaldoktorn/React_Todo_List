import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>My Todo List</h1>
      <nav>
        {" "}
        <Link style={linkStyle} to="/">
          HOME
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="/about">
          ABOUT
        </Link>
      </nav>
    </header>
  );
}

const headerStyle = {
  backgroundColor: "#444",
  color: "#FFF",
  textAlign: "center",
  padding: "20px",
  paddingTop: "27px"
};

const linkStyle = {
  color: "#FFF",
  textDecoration: "none",
  textTransform: "capitalize",
  fontSize: "0.7em"
};

export default Header;
