import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component.jsx';

import Header from './components/header/header.component.jsx';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignOut}/>
      </Switch>
    </div>
  );
}

export default App;
