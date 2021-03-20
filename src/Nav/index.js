import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

export default function Nav() {
    return (
      <div className="container">
        <nav>
          <Link to="/category">
            <button>Category</button>
            
          </Link>
          <Link to="/item">
            <button>Item</button>
          </Link>
          <Link to="/upload">
            <button>Upload</button>
          </Link>
        </nav>
      </div>
    );
}
