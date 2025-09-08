import React from "react"; // imports framework 

function Header({ name }) { // define function, destructure "name" prop
  return (
    <header id="header">
      <h1>{name}</h1>
    </header>
  ); // displays header as blog name
}

export default Header; // Export the Header component so it can be imported/used in App.jsx