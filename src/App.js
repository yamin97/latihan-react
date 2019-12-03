import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Navbar from './components/Navbar';
import List from './Pages/List'
import Belajar from './Pages/belajarRedux'


class App extends Component{

  render(){
    return(
      <div>
        <Navbar />
        <Route path='/' component={Home} exact />   
        <Route path='/list' component={List} />   
        <Route path='/login' component={Login} />      
        <Route path='/belajar' component={Belajar} />
      </div>
    )
  }
} 

export default App;
