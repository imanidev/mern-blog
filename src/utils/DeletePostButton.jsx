import React from 'react';
import axios from 'axios';

const url = "https://mern-blog-api-he2o.onrender.com/posts";

const DeletePostButton = ({ post }) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${url}/${post}`);
      console.log(response.data);
      alert(`Post deleted successfully!`);
    } catch (error) {
      console.error(error);
      alert(`Error deleting post: ${error.message}`);
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeletePostButton;