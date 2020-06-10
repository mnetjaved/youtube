import React ,{Component} from 'react';
import Header from './Component/Header/Header';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Users from './Component/User/Users';



function App() {
  return (
    
    <BrowserRouter>
    <Header/>
    <div>
   
       
       
     <Switch>

       
       <Route exact path="/" component={Home}/>
       <Route exact path="/users/:userid" component={Users}/>
       <Route exact path="/about/" component={About}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
