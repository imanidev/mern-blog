import axios from "axios";
const baseURL = "http://localhost:3001/posts"; // 3001 is backend server


//  get all posts
export const getAllPosts = async () => {
    const response = await axios.get(baseURL);
    return response;
}


//  get one post
export const getPost = async (id) => {
    const response = await axios.get(`${baseURL}/${id}`);
    return response;
};

//edit a post
export const editPost = async (id) => {
    const response = await axios.get(`${baseURL}/${id}`);
    return response;
};

//  create a post
export const createPost = async (post) => {
    const response = await axios.post(baseURL, post);
    return response;
};

//  update a post
export const updatePost = async (id, updatedPost) => {
    const response = await axios.put(`${baseURL}/${id}`, updatedPost);
    return response;
};

//  delete a post
export const deletePost = async (id) => {
    const response = await axios.delete(`${baseURL}/${id}`);
    return response;
};


 export default {
     getAllPosts,
     getPost,
     createPost,
     updatePost,
     deletePost,
 };
