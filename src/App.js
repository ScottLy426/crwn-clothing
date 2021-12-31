import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component.jsx';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import Header from './components/header/header.component.jsx';

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this. unsubScribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id:snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }else{
        this.setState({currentUser: userAuth })
      }
    })
  }

  componentWillUnmount(){
    this.unsubScribeFromAuth();
  }


    render(){return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignOut}/>
        </Switch>
      </div>
    );
  } 
}

export default App;
