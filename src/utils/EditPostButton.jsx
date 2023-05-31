import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';

  const url = "https://mern-blog-api-he2o.onrender.com/posts";



const EditPostButton = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [postId, setPostId] = useState('');
  const [author, setAuthor] = useState('');

  const {id} = useParams()
const result = `${url}/${id}`
 const [data, setData] = useState(null)
  // const id = useLocation()
  
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
      content,
      image,
      author,
    })
  }

  return (
    <div>
      <h2>Edit Page</h2>
      {data ?
        <div>
          <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Title:</label>
              <input type='text' id='title' value={data.title}
              onChange={(event) => setTitle(event.target.value)} />
            
        </div>
        <div>
          <label htmlFor='content'>Content:</label>
              <textarea id='content' value={data.content}
              onChange={(event) => setContent(event.target.value)}
              />
        </div>
        <div>
          <label htmlFor='image'>Image:</label>
              <input type='text' id='image' value={data.image}
              onChange={(event) => setImage(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor='author'>Author:</label>
              <input type='text' id='author' value={data.author}
              onChange={(event) => setAuthor(event.target.value)}
              />
            </div>
        <button type='submit'>Edit Post</button>
      </form>
          </div>
      :<div>not found</div>}
   </div>
  );
};

export default EditPostButton;
