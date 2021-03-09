import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import Country from './Components/Country/Country';
import More from './Components/More/More';

function App() {
  
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/Home">
            <Home/>
          </Route>

          <Route path="/User/:userAlpha3Code">
            <Country/>
          </Route>

          <Route path="/More/:countryName">
            <More/>
          </Route>

          <Route exact path="/">
              <Home/>
            </Route>

            <Route path="*">
              <NoMatch/>
            </Route>

        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
