import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
    <Router>
      <Route path='/' component={App}>
        <Navbar/>
      </Route>
    </Router>
    </div>
  );
}

export default App;
