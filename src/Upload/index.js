import React, { useState } from "react";
import axios from 'axios';
import "./upload.scss";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from '../Nav/index';


function Upload() {
  // upload

  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
   const [loading, setLoading] = useState(false);
   const [success, setSuccess] = useState(false);



 
   const handleImage = (e) => {
     e.preventDefault();
          setFile(e.target.files[0])
   };


  function handleSubmit(e) {
    e.preventDefault();

    const url = new URL("https://test.anchoratechs.com/upload");
   const data = new FormData();
   data.append("file", file);
   data.append("name", name);

    axios.post(`${url}`, data) 
    .then((res, err) => {
      if (!err) {
        setLoading(false);
      } else {
        setLoading(false);
        setSuccess(true);
      }
      console.log(res.data);
    });
  }

  return (
    <div className="container">
      <Nav />
      <header className="wrapper">
        <h1>File upload</h1>
        <form onSubmit={handleSubmit}>
          <label>Please upload a file</label>
          <input
            type="text"
            value={name}
            name="name"
            placeholder="Enter file name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="file"
            name="file"
            accept="image/png, image/jpeg"
            onChange={handleImage}
          />
          <button type="submit">Submit</button>
          {loading && (
            <FontAwesomeIcon icon={faSpinner} spin className="spinner" />
          )}
          {success && <p>Category created succesful</p>}
        </form>
      </header>
    </div>
  );
}

export default Upload;
