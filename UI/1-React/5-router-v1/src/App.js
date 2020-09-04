import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from "./components/Navibar";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import ProductsList from "./components/ProductsList";
import ProductForm from "./components/ProductForm";
import Form from "./components/Form";

const App = () => {
  return (
   
   <Router>
    <div className="container mt-2">

      <div className="alert alert-info text-center text-primary "><h1> SPA With React Router</h1></div>
      <hr/>

      <div className="row">
        <div className="col-2">
          <Navibar/>
        </div>

        <div className="col-10">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/add" component={Form}/>
            <Route exact path="/display" component={ProductsList}/>
          </Switch>
        </div>

      </div>
    </div>
  </Router>
  );
};

export default App;
