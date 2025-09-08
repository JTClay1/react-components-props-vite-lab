import React from "react"; // imports framework 

function About({ image = "https://via.placeholder.com/215", about }) { // define function,  destructure About, image
  return (
    <aside id="about">
      <img src={image} alt="blog logo"/>
      <p>{about}</p>
    </aside>
  ); //displays About section
}

export default About; // Export the About component so it can be imported/used in App.jsx