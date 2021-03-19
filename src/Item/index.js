import React, { useState } from "react";
import "./item.css";
import axios from "axios";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Item() {

  // set categories
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showForms, setShowForms] = useState(true);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  function handleLoading() {
    setLoading(true);
  }

  function showCat() {
    setShowForms(true);
    setShowUpdate(false);
    setShowDelete(false);
  }

  function show() {
    setShowForms(false);
    setShowUpdate(true);
    setShowDelete(false);
  }

  function del() {
    setShowDelete(true);
    setShowForms(false);
    setShowUpdate(false);
  }

  function handleItem(e) {
    e.preventDefault();
    const url = new URL("https://test.anchoratechs.com/items");

    let params = {
      category: "104",
    };
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    let body = {
      id: id,
      title: title,
      price: price,
      image: image,
      description: description,
      category: "104",
    };

    axios.post(`${url}`, body).then((res, err) => {
      if (!err) {
        setLoading(false);
      } else {
        setLoading(false);
        setSuccess(true);
      }
      console.log(res.data);
    });
  }

  function handleUpdate(e) {
    e.preventDefault();
    const url = new URL(`https://test.anchoratechs.com/items/${id}`);

    let params = {
      category: category,
    };
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    let body = {
      id: id,
      title: title,
      price: price,
      image: image,
      description: description,
      category: category,
    };

    axios.put(`${url}`, body).then((res, err) => {
      if (!err) {
        setLoading(false);
      } else {
        setLoading(false);
        setSuccess(true);
      }
      console.log(res.data);
    });
  }

  function handleDelete(e) {
    e.preventDefault();
    const url = new URL(`https://test.anchoratechs.com/items/${id}`);

    //   const body = {
    //     id: id,
    //   };

    axios.delete(`${url}`).then((res, err) => {
      if (!err) {
        setLoading(false);
      } else if (res.status === 200) {
        setLoading(false);
        setSuccess(true);
      }
      console.log(res.data);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Items</h1>
        <button
          className="btn"
          type="button"
          title="create item"
          onClick={showCat}
        >
          Create
        </button>
        <button
          className="btn"
          type="button"
          title="update item"
          onClick={show}
        >
          Update
        </button>
        <button
          className="btn"
          type="button"
          title="delete a item"
          onClick={del}
        >
          Delete
        </button>

        {showForms && (
          <form onSubmit={handleItem}>
            <label>Enter Item</label>
            <input
              type="text"
              placeholder="Enter item id"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Enter item title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <input
              type="number"
              placeholder="Enter item price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <input
              type="file"
              placeholder="Enter item file"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Enter item description"
              name="discription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            {/* <input
              type="text"
              placeholder="Enter item category name"
              name="cartegory"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            /> */}
            <button type="submit" onClick={handleLoading}>
              Submit
            </button>
            {loading && (
              <FontAwesomeIcon icon={faSpinner} spin className="spinner" />
            )}
            {success && <p>Category created succesful</p>}
          </form>
        )}

        {/* Update category */}
        {showUpdate && (
          <form onSubmit={handleUpdate}>
            <label>Update Item</label>
            <input
              type="text"
              placeholder="Enter item id"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Enter item title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <input
              type="number"
              placeholder="Enter item name"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <input
              type="file"
              placeholder="Enter item name"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Enter item dexscription"
              name="discription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Enter item category name"
              name="cartegory"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <button type="submit" onClick={handleLoading}>
              Update
            </button>
            {loading && (
              <FontAwesomeIcon icon={faSpinner} spin className="spinner" />
            )}
            {/* {success && <p className="spinner">Category Updated successful</p>} */}
          </form>
        )}

        {/* delete form  */}

        {showDelete && (
          <form onSubmit={handleDelete}>
            <label>Delete Item</label>
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
            {/* {success && <p className="spinner">Category deleted successful</p>} */}
          </form>
        )}
      </header>
    </div>
  );
}
export default Item;
