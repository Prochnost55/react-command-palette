import React, { useEffect, useState } from 'react';
import './style.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import Home from './Components/Home';
import CommandPallete from './Components/CommandPallete/CommandPallete';

export default function App() {
  const [showCommandPallete, setShowCommandPallete] = React.useState(false);

  React.useEffect(() => {
    const eventHandler = (e: KeyboardEvent) => {
      console.log(JSON.stringify(e));
      if (e.keyCode === 75 && e.metaKey) {
        setShowCommandPallete(true);
      }
      if (e.keyCode == 27) {
        setShowCommandPallete(false);
      }
    };

    window.document.addEventListener('keydown', eventHandler);
    return () => {
      window.document.removeEventListener('keydown', eventHandler);
    };
  }, []);

  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path={['/', '/home']}>
            <Home />
          </Route>
          <Route path="/about">
            <div>About</div>
          </Route>
          <Route path="/playground">
            <div>playground</div>
          </Route>
        </Switch>
        <CommandPallete
          showCommandPallete={showCommandPallete}
          toggleCommandPallete={() => setShowCommandPallete(false)}
        />
      </React.Fragment>
    </Router>
  );
}
