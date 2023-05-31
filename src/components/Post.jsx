// import React from 'react';
// import PostList from './PostList';

// const Post = (post) => {
//   return (
//     <div className="post">
//     <PostList />
//       <h2>{post.title}</h2>
//       <p>{post.content}</p>
//       <p>{post.image}</p>
//       <p>{post.createdAt}</p>
//       <p>{post.updatedAt}</p>
//     </div>
//   );
// };

// export default Post;

// import React from 'react';
// import PostList from './PostList';

// const Post = ({post}) => {
//   return (
//     <div className="post">
//       <PostList />
//       <h2>{post.title}</h2>
//       <p>{post.content}</p>
//       <p>{post.image}</p>
//       <p>{post.createdAt}</p>
//       <p>{post.updatedAt}</p>
//     </div>
//   );
// };

// export default Post;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'http://localhost:3001/posts';

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(url);
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <img src={post.image} alt={post.title} />
          <p>{post.content}</p>
          <p>By {post.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Post;