
import React, { useState } from 'react';
import axios from 'axios';

const url = 'https://mern-blog-api-he2o.onrender.com/posts';

const DeletePost = () => {
  const [postId, setPostId] = useState('');

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await axios.delete(`${url}/${postId}`);
      alert(`Post with ID ${postId} deleted successfully!`);
    } catch (error) {
      console.error(error);
      alert(`Error deleting post with ID ${postId}: ${error.message}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Post ID:
          <input type="text" value={postId} onChange={(event) => setPostId(event.target.value)} />
        </label>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeletePost;
