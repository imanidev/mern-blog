import React, { useState } from 'react';

const DeletePost = () => {
  const [postId, setPostId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(`/api/posts/${postId}`);
      console.log(response.data);
      setPostId('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Delete a Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="postId">Post ID:</label>
          <input
            type="text"
            id="postId"
            value={postId}
            onChange={(event) => setPostId(event.target.value)}
          />
        </div>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeletePost;