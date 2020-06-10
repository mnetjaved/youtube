import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            user_search:[],
            total_count:'',
        }
    }
    getapi(){
        fetch(`https://api.github.com/search/users?q=${this.state.value}+repos:%3E=0+followers:%3E=0`)
        .then(response => {
            return response.json();
        }).then(data => {
            console.log("api sux")
            this.setState({
                user_search:data.items,
                total_count:data.total_count
            })
        });  
    }
   
    onSubmit=(e)=>{
        
        e.preventDefault();
       this.setState({value:''})
        this.getapi();
        
       
        }


        // static getDerivedStateFromProps(props, state) {
        //     if (this.state.value !== state.value) {
        //       return {
        //         vid: props.match.params.vid,
        //       };
        //     }
        
        //     // Return null if the state hasn't changed
        //     return null; 
        //   }
    
        //   componentDidUpdate(prevProps,prevStates){
        //       if(this.state.value !== prevStates.value)
        //       {
        //           console.log("didupd");
        //       }
        //   }
    
  handleChange = (e)=>{
     this.setState({value:e.target.value})
 }
 keyPress=(e)=>{
     if(e.keyCode === 13){
        
     }}
        clear=()=>{
            this.setState({user_search:[]})
           
        }

    render(){
       // console.log(this.state.value)
       const {user_search,total_count}=this.state;
       console.log("fas",user_search);
       
        return(
       
           
                <div className="home">
                
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.value}  onChange={this.handleChange} onKeyDown={this.keyPress} placeholder="Search users..."/>
                    <input className="form-btn-sbmt" type="submit"></input>
                </form>
                
                <div className="home-result">
                <button type="buton" onClick={this.clear}  className="home-btn-clr">Clear</button>  
                <span className="total_count">{total_count}</span>
                <div className="result-div">
               
               {
                
                   user_search.map((data)=>{
                       
                    return(
                       
                        <div>
                            <img src={data.avatar_url}/>
                            <h3>{data.login}</h3>
                            <button><Link to={`users/${data.login}`}>More</Link></button>
                         </div>
                        
                        
                        
                             
                         )
                   })
               }
               </div>  
                
                </div>
            </div>

        )
    }
}




export default Home;