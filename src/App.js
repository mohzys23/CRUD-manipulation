import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Category from './Category/index';
import Upload from './Upload/index';
import Item from './Item/index';
import Home from "./Home/index";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/item" component={Item} />
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/category" component={Category} />
            <Route  path="/" component={Home} />
          </Switch>
        </Router>
      </header>
    </div>
  );
  }
export default App;
