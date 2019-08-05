import React from 'react';
import './App.scss';
import {Route, Switch} from "react-router-dom";
import Users from './containers/Users/Users';

function App() {
  return (
    <div className="wrapper">
      <Switch>
        <Route path="/" exact component={Users}/>
      </Switch>

    </div>
  );
}

export default App;
