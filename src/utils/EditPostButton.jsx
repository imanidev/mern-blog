import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';

const EditPostButton = () => {
  const {id} = useParams()

 const [data, setData] = useState(null)
  // const id = useLocation()
  
  const getAPI = () => {
    try {
      // const url = "https://mern-blog-api-he2o.onrender.com/posts";

      const url = 'http://localhost:3001/posts'

const result = `${url}/${id}`

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
    evt.preventDefault()
  }
  return (
    <div>
      <h2>Edit Page</h2>
      {data ?
        <div>
          <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Title:</label>
          <input type='text' id='title' value={data.title} />
        </div>
        <div>
          <label htmlFor='content'>Content:</label>
          <textarea id='content' value={data.content}/>
        </div>
        <div>
          <label htmlFor='image'>Image:</label>
          <input type='text' id='image' value={data.image} />
        </div>
        <button type='submit'>Edit Post</button>
      </form>
          </div>
      :<div>not found</div>}
   </div>
  );
};

export default EditPostButton;
