import React from 'react';
import './App.css';
import Home from './Components/Home'
import Music from './Components/Music'
import Projects from './Components/Projects'
import NavBar from './Components/NavBar'
import {Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/music" component={Music}/>
          <Route exact path="/projects" component={Projects}/>
        </Switch>
      </header>
    </div>
  );
}

export default App;
