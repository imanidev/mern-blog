import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">View all posts</Link>
        </li>
        <li>
          <Link to="/new">New</Link>
        </li>
        <li>
          <Link to="/posts/:id/edit">Edit</Link>
        </li>
        <li>
          <Link to="/posts/:id">View post</Link>
        </li>
        <li>
          <Link to="/posts/:id/delete">Delete</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
