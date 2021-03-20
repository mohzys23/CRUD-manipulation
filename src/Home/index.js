import React from "react";
import "./home.css";
import {
  Link,
} from "react-router-dom";

function Home() {

  return (
    <div className="App">
          <div className="message">
            <p>
              Welcome to a simple app that manipulates CRUD categories, upload,
              create and delete items and images.
            </p>
            <div class="stage">
              <div class="box bounce-1">
                <p>&#x2193;</p>
              </div>
            </div>
            <Link to="/category">
              <button type="button">
                Next
              </button>
            </Link>
          </div>
    </div>
  );
}
export default Home;
