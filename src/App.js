import React from 'react';
import Navbar from './components/Navbar/Navbar';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/MainPages/Home';
import Platforms from './components/MainPages/Platforms';
import Niches from './components/MainPages/Niches';
import SignUp from './components/MainPages/SignUp';
import Login from './components/MainPages/Login';
import Dashboard from './components/MainPages/Dashboard';
// keep routes in my switch staetment
//
//
//
//
//
function App(){
  return(
    <>
    <Router>
       <Navbar/>
       <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/platforms' component={Platforms} />
          <Route path='/niches' component={Niches} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login} /> 
          <Route path='/dashboard' component={Dashboard} />
          {/* <Route path='/logout' component={Logout} /> */}
       </Switch>
    </Router>
     
    </>
  );
}


export default App;

