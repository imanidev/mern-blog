import axios from "axios";
// const url = "http://localhost:3001/posts"; // 3001 is backend server

const url = 'https://mern-blog-api-he2o.onrender.com/posts';

//  get all posts
export const getAllPosts = async () => {
    const response = await axios.get(url);
    return response;
}

//  get one post
export const getPost = async (id) => {
    const response = await axios.get(`${url}/${id}`);
    return response;
};

//edit a post
export const editPost = async (id) => {
    const response = await axios.get(`${url}/${id}`);
    return response;
};

//  create a post
export const createPost = async (post) => {
    const response = await axios.post(url, post);
    return response;
};

//  update a post
export const updatePost = async (id, updatedPost) => {
    const response = await axios.put(`${url}/${id}`, updatedPost);
    return response;
};

//  delete a post
export const deletePost = async (id) => {
    const response = await axios.delete(`${url}/${id}`);
    return response;
};
