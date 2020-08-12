import React from 'react';
import './App.css';
import Login from './component/Login';
import { Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";
import FriendsList from "./component/FriendsList"


function App() {
  return (
    <div className="App">
      <Link to="/login">login</Link>
      <Link to="/home">Home</Link>
      <Link to="/protected">FriendsList</Link>
      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <Route path="/login" component={Login}/>
        <Route path="/home">
          <h1>
            Home Page
          </h1>
        </Route>
      </Switch>
    </div>
  );
}


export default App;
