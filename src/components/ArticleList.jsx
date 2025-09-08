import React from "react"; // import framework
import Article from "./Article.jsx"; // import Article (explicit .jsx to avoid pulling a stale .js file)

function ArticleList({ posts }) { // posts = array of article objects
  return (
    <main id="articleList">
      {posts.map((post) => (
        <Article
          key={post.id}          // unique key for lists
          title={post.title}     // post title
          date={post.date}       // post date (Article has default)
          preview={post.preview} // preview text
          minutes={post.minutes} // minutes for reading-time badge
        />
      ))}
    </main>
  );
}

export default ArticleList; // export so App can use it
