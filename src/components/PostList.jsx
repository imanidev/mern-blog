import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
  month: '2-digit',
  day: '2-digit',
  year: 'numeric'
});

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
        <Post
          key={post.id}
          title={post.title}
          content={post.content}
          image={post.image}
          author={post.author}
          createdAt={formattedDate} 
          updatedAt={formattedDate} 
        />
      ))}
    </div>
  );
};

export default PostList;