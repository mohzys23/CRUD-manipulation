import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav() {
    return (
        <div className="App">
    
          <nav>
            <Link to="/category">
              <h4>Category</h4>
            </Link>
            <Link to="/item">
              <h4>Item</h4>
            </Link>
            <Link to="/upload">
              <h4>Upload</h4>
            </Link>
          </nav>
          
          </div>
    )
}
