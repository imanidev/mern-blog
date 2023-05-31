// import React from 'react';
// import { Link } from 'react-router-dom';

// const EditPostButton = ({ postId }) => {
//   return (
//     <Link to={`/posts/${postId}/edit`}>Edit</Link>
//   );
// };

// export default EditPostButton;

//////MAIN/////

import React from 'react';
import { Link } from 'react-router-dom';

const EditPostButton = ({ postId }) => {
  return (
    <Link to={`/edit/${postId}`}>
      <button>Edit</button>
    </Link>
  );
};

export default EditPostButton;
