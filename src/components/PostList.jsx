import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/posts');
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
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>{image}</p>
          <p>{post.createAt}</p>
          <p>{post.updatedAt}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;