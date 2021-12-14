import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';
import Main from './Components/Main';

function App() {

  return (
    <div className="App">
    <Router >
      <Switch >
        <Route exact path={['/', '/projects', '/blog', '/contact']} render={props => <Main {...props}/>} />
        <Route exact path='/projects/Memory_Game'/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
