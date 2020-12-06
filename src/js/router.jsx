import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

// Pages
import Startpage from './5-pages/Startpage';
import Aboutpage from './5-pages/Aboutpage';

export default function ContentRouter() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      <h1 className='headline'>Hello React Boilerplate!!</h1>
      <Switch>
        <Route exact path='/'>
          <Startpage />
        </Route>
        <Route path='/about'>
          <Aboutpage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
