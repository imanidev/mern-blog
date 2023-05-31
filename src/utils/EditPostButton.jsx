import React from 'react';
import { Link, useParams } from 'react-router-dom';

const EditPostButton = ({ postId }) => {
  const params = useParams()
  return (
    <Link to={`/edit-post/${params.id}`}>
      <button>Edit</button>
    </Link>
  );
};

export default EditPostButton;
