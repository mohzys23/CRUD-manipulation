import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Category from './Category/index';
import Upload from './Upload/index';
import Item from './Item/index';
import Nav from './Nav/index';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Nav />
          {/* <Item /> */}
          <Switch>
            <Route exact path="/item" component={Item} />
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/category" component={Category} />
          </Switch>
        </Router>

        <div className="message">
          <p>
            Welcome use navigation to above to upload, update, and delete
            content
          </p>
        </div>
      </header>
    </div>
  );
  }
export default App;
