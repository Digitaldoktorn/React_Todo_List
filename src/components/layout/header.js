import React, { Component } from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo test</h1>
    </header>
  );
}

const headerStyle = {
  backgroundColor: "#333",
  color: "#FFF",
  textAlign: "center",
  padding: "10px"
};

export default Header;
