import React from 'react';
import PostList from './PostList';

const Post = ({ post }) => {
  return (
    <div className="post">
    <PostList />
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>{post.image}</p>
      <p>{post.createdAt}</p>
      <p>{post.updatedAt}</p>
    </div>
  );
};

export default Post;
