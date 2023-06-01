import React, { useState, useEffect } from 'react';
import axios from 'axios';
const url = 'https://mern-blog-api-he2o.onrender.com/posts'
  

const EditPost =() => {
 
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${url}/${props.match.params.id}`);
        setTitle(response.data.title);
        setContent(response.data.content);
        setImage(response.data.image);
        setPostId(response.data._id);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  }, [props.match.params.id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`${url}/${postId}`, { title, content, image });
      console.log(response.data);
      setPostId('');
      setTitle('');
      setContent('');
      setImage('');
      alert(`Post with ID ${postId} updated successfully!`);
    } catch (error) {
      console.error(error);
      alert(`Error updating post with ID ${postId}: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Title:</label>
          <input type='text' id='title' value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div>
          <label htmlFor='content'>Content:</label>
          <textarea id='content' value={content} onChange={(event) => setContent(event.target.value)} />
        </div>
        <div>
          <label htmlFor='image'>Image:</label>
          <input type='text' id='image' value={image} onChange={(event) => setImage(event.target.value)} />
        </div>
        <button type='submit'>Edit Post</button>
      </form>
    </div>
  );
}

export default EditPost;