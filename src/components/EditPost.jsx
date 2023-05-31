// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { editPost } from '../services/blog-api';

// const url = 'https://mern-blog-api-he2o.onrender.com/posts';

// const EditPost = ({ postId }) => {
//   const [post, setPost] = useState(null);
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [image, setImage] = useState('');

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const response = await editPost(postId);
//         setPost(response.data);
//         setTitle(response.data.title);
//         setContent(response.data.content);
//         setImage(response.data.image);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchPost();
//   }, [postId]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.put(`${url}/${post._id}`, { title, content, image });
//       console.log(response.data);
//       setTitle('');
//       setContent('');
//       setImage('');
//       alert(`Post with ID ${post._id} updated successfully!`);
//     } catch (error) {
//       console.error(error);
//       alert(`Error updating post with ID ${post._id}: ${error.message}`);
//     }
//   };

//   if (!post) {
//     return <div>No Post Found.</div>;
//   }

//   return (
//     <div>
//       <h2>Edit Post</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(event) => setTitle(event.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="content">Content:</label>
//           <textarea
//             id="content"
//             value={content}
//             onChange={(event) => setContent(event.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="image">Image URL:</label>
//           <input
//             type="text"
//             id="image"
//             value={image}
//             onChange={(event) => setImage(event.target.value)}
//           />
//         </div>
//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// };

// export default EditPost;

import React, { useState } from 'react';
import axios from 'axios';

const url = 'https://mern-blog-api-he2o.onrender.com/posts';

const EditPost = () => {
  const [postId, setPostId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

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
    <form onSubmit={handleSubmit}>
      <label>
        Post ID:
        <input type="text" value={postId} onChange={(event) => setPostId(event.target.value)} />
      </label>
      <br />
      <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <br />
      <label>
        Content:
        <textarea value={content} onChange={(event) => setContent(event.target.value)} />
      </label>
      <br />
      <label>
        Image:
        <input type="text" value={image} onChange={(event) => setImage(event.target.value)} />
      </label>
      <br />
      <button type="submit">Edit Post</button>
    </form>
  );
};

export default EditPost;