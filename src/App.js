import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotHome from './Pages/notHome';
import Navbar from './components/Navbar';
import List from './Pages/List'


class App extends Component{

  render(){
    return(
      <div>
        <Navbar />
        <Route path='/' component={Home} exact />   
        <Route path='/list' component={List} />   
        <Route path='/not-home' component={NotHome} />      
      </div>
    )
  }
} 

export default App;
