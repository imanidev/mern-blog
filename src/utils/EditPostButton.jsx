import axios from 'axios';
import React, { useEffect } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const url = "https://mern-blog-api-he2o.onrender.com/posts";

const EditPostButton = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');
  const [data, setData] = useState(null)

  const { id } = useParams()
  const result = `${url}/${id}`

  const navigation = useNavigate()

  const getAPI = () => {
    try {
      axios.get(result).then((response) => {
      setData(response.data);
       })
    } catch(error) { 
      console.log(error.message)
    }
  }

  useEffect(() => {
    getAPI()
  },
    [])
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios.put(result, {
      title,
      image,
      content,
      author,
    })
      .then(() => {
    navigation('/')})
}
  
  return (
    <div>
      <h2>Edit Page</h2>
      {data ?
        <div>
          <form onSubmit={handleSubmit}>
            
          <label htmlFor='title'>Title:</label>
              <input type='text' id='title' defaultValue={data.title}
              onChange={(event) => setTitle(event.target.value)} />
  
          <label htmlFor='content'>Content:</label>
              <textarea id='content' defaultValue={data.content}
              onChange={(event) => setContent(event.target.value)}/>
    
          <label htmlFor='image'>Image:</label>
              <input type='text' id='image' defaultValue={data.image}
              onChange={(event) => setImage(event.target.value)}/>
        
              <label htmlFor='author'>Author:</label>
              <input type='text' id='author' defaultValue={data.author}
              onChange={(event) => setAuthor(event.target.value)}/>
           
          <button type='submit'>Confirm Changes</button>
      </form>
      </div>
        : <div>not found</div>}
    <button onClick={()=> navigation('/')}>Go back to posts</button>
 </div>

  );
}

export default EditPostButton;
