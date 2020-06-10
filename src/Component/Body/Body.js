import React, { Component } from 'react';
import './Body.css';
import YoutubeTrending from  '../Youtube/Youtube-Trending';
import Watch from '../Youtube_Watch/Watch';
import {BrowserRouter, Route,Switch,Link} from 'react-router-dom';

import Search from '../Youtube_search/YoutubeSearch';
import Header from '../Header/Header';
import Footer from '..//Footer/Footer';



class Body extends Component{

    render(){

        return(
            <BrowserRouter>
            <Header/>
            <div className="container-fluid body" id="top">
                <div className="container body-child ">
                <Switch>
                    <Route exact path="/" component={YoutubeTrending}/>
                    <Route exact path="/watch/:vid" component={Watch}/>
                    <Route exact path="/search/:query" component={Search}/>
                    </Switch>
                
                </div>
            </div>
            <Footer/>
           
            </BrowserRouter>
        )
    }
}
export default Body;