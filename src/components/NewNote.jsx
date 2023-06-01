import React, { useState } from 'react';
import axios from 'axios';

const url = "https://mern-blog-api-he2o.onrender.com/posts";

const NewNote = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
     await axios.post(url, {
        title,
        image,
        content,
        author,
      });
      setTitle('');
      setImage('');
      setContent('');
      setAuthor('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <div className='title-container'>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className='image-container'>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        <div className='content-container'>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content} 
            onChange={(event) => setContent(event.target.value)}
          />
        </div>
        <div className='author-container'>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewNote;