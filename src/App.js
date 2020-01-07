import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Game from './pages/Game'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
