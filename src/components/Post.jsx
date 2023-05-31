import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeletePostButton from '../utils/DeletePostButton';
// import {EditPostButton} from '../utils/EditPostButton';
import { Link } from 'react-router-dom';

const url = "https://mern-blog-api-he2o.onrender.com/posts";



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
        <div key={post._id}>
          <h3>{post.title}</h3>
          <img src={post.image} alt={post.title} />
          <p>{post.content}</p>
          <p>By {post.author}</p>
          <p>Created at: {post.createdAt}</p>
          <p>Updated at: {post.updatedAt}</p>
          <DeletePostButton post={post._id} />
       <Link to={`/edit-post/${post._id}`} state={post._id}>
      <button>Edit</button>
    </Link>
        </div>
      ))}

    </div>
  );
};

export default Post;
