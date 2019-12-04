import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Navbar from './components/Navbar';
import List from './Pages/List'
import Belajar from './Pages/belajarRedux'
import Register from './Pages/Register';
import Test from './Pages/Testing';


class App extends Component{

  render(){
    return(
      <div>
        <Navbar />
        <Route path='/' component={Home} exact />   
        <Route path='/list' component={List} />   
        <Route path='/login' component={Login} />  
        <Route path='/register' component={Register} />    
        <Route path='/belajar' component={Belajar} />
        <Route path='/test' component={Test} />
      </div>
    )
  }
} 

export default App;
