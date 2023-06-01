import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeletePostButton from '../utils/DeletePostButton';
import { Link, useNavigate } from 'react-router-dom';

const url = "https://mern-blog-api-he2o.onrender.com/posts";

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
  month: '2-digit',
  day: '2-digit',
  year: 'numeric'
});

const Post = () => {
const [posts, setPosts] = useState([]);
const navigation = useNavigate()
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
        <div key={post._id}>
          <h3>{post.title}</h3>
          <img src={post.image} alt={post.title} />
          <p>{post.content}</p>
          <p>By {post.author}</p>
          <p>Created at: {formattedDate}</p>
          <p>Updated at: {formattedDate}</p>
          <DeletePostButton post={post._id} />
       
      <button onClick={()=> navigation(`/edit-post/${post._id}`)}>Edit</button>

        </div>
      ))}

    </div>
  );
};

export default Post;
