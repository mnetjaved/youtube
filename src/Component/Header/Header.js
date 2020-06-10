import React, { Component } from 'react';
import '../Header/Header.css';
import logo from '../Images/ytlogo.png'
import {Link,Redirect,Route} from 'react-router-dom';
import { navigate } from "@reach/router"
import YoutubeSearch from '../Youtube_search/YoutubeSearch';


class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {value:''}
  
        this.handleChange = this.handleChange.bind(this);
        this.keyPress = this.keyPress.bind(this);
     } 
   
     handleChange(e) {
        this.setState({ value: e.target.value });
     }
  
     keyPress(e){
        if(e.keyCode === 13){
            
           console.log(e.target.value);
           
           return <Route path="/dashboard" component={YoutubeSearch}/>
           
        }
     }


    render()
    {

    return(
       
        
        <div className="header">
              <div className="header-child container-fluid">
                <span className="header-dropdown">Drop</span>
                <Link to={{pathname:"/"}}><img src={logo} className="footer-ytlogo" /></Link>
                <input placeholder="Search" value={this.state.value} onKeyDown={this.keyPress} onChange={this.handleChange} fullWidth={true} className="header-input-txtbox"></input>
                <Link to={`/search/${this.state.value}`} className="fa fa-search input-txtbox-search"></Link>
                <span className="header-upload">Upload</span>
                <button className="header-btn-signin">Sign in</button>
            </div>
        </div>
      
    )
    }
}
export default Header;