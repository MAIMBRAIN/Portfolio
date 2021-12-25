import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';
import Main from './Components/Main';

function App() {

  return (
    <div className="App">
    <Router >
      <Switch >
        <Route exact path={['/', '/projects', '/blog']} render={props => <Main {...props}/>} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
