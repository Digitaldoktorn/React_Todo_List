import React, { Component } from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>My Todo List</h1>
    </header>
  );
}

const headerStyle = {
  backgroundColor: "#444",
  color: "#FFF",
  textAlign: "center",
  padding: "20px"
};

export default Header;
