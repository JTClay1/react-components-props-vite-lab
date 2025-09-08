import React from "react"; // import framework
import Header from "./Header";   // import Header component
import About from "./About";     // import About component
import ArticleList from "./ArticleList"; // import ArticleList component

import blogData from "../data/blog"; // import blog data source

function App() {
  // destructure blogData into local variables
  const { name, image, about, posts } = blogData;

  return (
    <>
      <Header name={name} />              {/* pass blog name to Header */}
      <About image={image} about={about} /> {/* pass image + about text to About */}
      <ArticleList posts={posts} />         {/* pass posts array to ArticleList */}
    </>
  );
}

export default App; // export App as root component
