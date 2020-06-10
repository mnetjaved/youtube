import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import Youtube from './Component/Youtube/Youtube';
import Body from './Component/Body/Body';
import WithLoader from './Component/WithLoader/WithLoader';
import {BrowserRouter,Switch, Route} from 'react-router-dom';



class App extends Component{
 

  render() {

    //const {screenName} = this.state;
    const HomeWithLoader = WithLoader(Body);

    return(
     <BrowserRouter>
     
        
       
        <HomeWithLoader/>
   
     
      </BrowserRouter>
      
    );

  }
}

export default App;
