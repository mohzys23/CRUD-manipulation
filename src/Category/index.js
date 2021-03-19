import axios from "axios";
import React, { useState } from "react";
import "./category.css";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Category() {
  // set categories

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess]  = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  function handleLoading() {
      setLoading(true)
  }

function showCat() {
    setShowForm(true);
    setShowUpdate(false);
    setShowDelete(false);
}

  function show() {
      setShowForm(false);
      setShowUpdate(true);
      setShowDelete(false)
  }

  function del() {
      setShowDelete(true)
      setShowForm(false)
      setShowUpdate(false);
  }

  function handleCategory(e) {
    e.preventDefault();
    const url = new URL("https://test.anchoratechs.com/categories");

    const body = {
      name: name,
      id: id,
    };

    axios.post(`${url}`, body).then((res, err) => {
        if (!err) {
            setLoading(false)
        } else if ( err ) {
            setLoading(false);
            setTimeout(bye, 3000);
             setSuccess(true);
            function bye() {
                setSuccess(false)
            }
        }
      console.log(res.data);
    });
  }

function handleUpdate(e) {
  e.preventDefault();
  const url = new URL(`https://test.anchoratechs.com/categories/${id}`);

  const body = {
    name: name,
    id: id,
  };

  axios.put(`${url}`, body).then((res, err) => {
    if (!err) {
      setLoading(false);

    } else if (err) {
      setLoading(false);
      setTimeout(bye, 3000);
      setSuccess(true);
      function bye() {
        setSuccess(false);
      }
    }
    console.log(res.data);
  });
}


function handleDelete(e) {
  e.preventDefault();
  const url = new URL(`https://test.anchoratechs.com/categories/${id}`);

//   const body = {
//     id: id,
//   };

  axios.delete(`${url}`).then((res, err) => {
    if (!err) {
      setLoading(false);
    } else if (err) {
      setLoading(false);
      setTimeout(bye, 3000);
      setSuccess(true);
      function bye() {
        setSuccess(false);
      }
    }
    console.log(res.data);
  });
}





  return (
    <div className="App">
      <header className="App-header">
        <h1>Categories</h1>
        <button
          className="btn"
          type="button"
          title="create category"
          onClick={showCat}
        >
          Create
        </button>
        <button
          className="btn"
          type="button"
          title="update category"
          onClick={show}
        >
          Update
        </button>
        <button
          className="btn"
          type="button"
          title="delete a category"
          onClick={del}
        >
          Delete
        </button>

        {showForm && (
          <form onSubmit={handleCategory}>
            <label>Enter Category</label>
            <input
              type="text"
              placeholder="Enter category id"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Enter category name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" onClick={handleLoading}>
              Submit
            </button>
            {loading && (
              <FontAwesomeIcon icon={faSpinner} spin className="spinner" />
            )}
            {success && <p className="spinner">Category added succesful</p>}
          </form>
        )}

        {/* Update category */}
        {showUpdate && (
          <form onSubmit={handleUpdate}>
            <label>Update Category</label>
            <input
              type="text"
              placeholder="Enter category id"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Update category name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" onClick={handleLoading}>
              Update
            </button>
            {loading && (
              <FontAwesomeIcon icon={faSpinner} spin className="spinner" />
            )}
            {success && <p className="spinner">Update successful</p>}
          </form>
        )}

        {/* delete form  */}

        {showDelete && (
          <form onSubmit={handleDelete}>
            <label>Delete Category</label>
            <input
              type="text"
              placeholder="Enter category id"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <button type="submit" onClick={handleLoading}>
              Delete
            </button>
            {loading && (
              <FontAwesomeIcon icon={faSpinner} spin className="spinner" />
            )}
            {success && <p className="spinner">Update successful</p>}
          </form>
        )}
      </header>
    </div>
  );
}
export default Category;
