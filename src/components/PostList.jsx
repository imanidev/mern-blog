import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'http://localhost:3001/posts';

const PostList = () => {
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
        <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          {image}
          <p>{post.createAt}</p>
          <p>{post.updatedAt}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;