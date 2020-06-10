import React,{Component} from 'react';
import './Header.css';
import About from '../About/About'

import {Route,Link} from 'react-router-dom';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
  
     } 

    render(){
        //https://api.github.com/search/users?q=osama+repos:%3E=0+followers:%3E=0
        return(
            <div className="header">
                <Route>
                    
                <ul className="header-ul">
                    <Link className="header-link" to="/"><span className="fa fa-github"/> Github Finder</Link>
                    <Link className="header-link" to="/">Home</Link>
                    <Link className="header-link" to="/about">About</Link>

                </ul>
                </Route>
            </div>
        )
    }
}
export default Header;