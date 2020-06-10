import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Youtube-Trending.css';
import imghovericon from '../Images/watch.png';
import {BrowserRouter,Route,Link} from 'react-router-dom';


const API = "AIzaSyAZka5ayJ0V4mE2avTqpWi93Al8CiRlnlQ";
const channelID = "UCaVz5Di_7mmSZl7QD7G8Log";
const result = 2;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`
//var finalURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB04GbVXCO1U5hD1oiU1jr6bk92_LtNQxA`;


class YoutubeTrending extends Component{
    constructor(props){
        super(props);
        this.state = {
            videodata : [],
            channeldata : [],
            channeldata2 :[]
        };
    }
        
  

    componentDidMount(){
        fetch(`https://www.googleapis.com/youtube/v3/search?channelId=UCLtNvbkqea8wN_kGtfgx_Mw&order=date&part=snippet&type=video&key=${API}`)
        .then(data=>data.json())
        .then(data2=>{
           
            this.setState({
                videodata:data2.items
            })
        })
        .catch(()=>{
            alert('Failed');
        })
        fetch(`https://www.googleapis.com/youtube/v3/search?channelId=UCbTLwN10NoCU4WDzLf1JMOA&order=date&part=snippet&type=video&key=${API}`)
        .then(data=>data.json())
        .then(data2=>{
           
            this.setState({
                channeldata:data2.items
            })
        })
        .catch(()=>{
            alert('Failed second');
        })
        fetch(`https://www.googleapis.com/youtube/v3/search?channelId=UC4JCksJF76g_MdzPVBJoC3Q&order=date&part=snippet&type=video&key=${API}`)
        .then(data=>data.json())
        .then(data2=>{
           
            this.setState({
                channeldata2:data2.items
            })
        })
        .catch(()=>{
            alert('Failed second');
        })
    }
    
    
 

    render(){
       
        const {videodata , channeldata, channeldata2}=this.state
      
   

        return(

            

            <div className="trending-box" >
             
             
                <div className="Trending-title">
                <h5>Trending</h5>
                </div>
               
             <div className="Trending-row">
                 {
                                     
                   videodata.map((data)=>{
                      return (
                        <div className="trending-video">
                        <Link className="video-link" to={`/watch/${data.id.videoId}`} >
                            
                        <span className="trendinghover-img"><img width="25px" src={imghovericon}></img></span>
                        <img className="youtube-img"  src={data.snippet.thumbnails.medium.url}></img>
                        </Link>
                        <Link className="video-link" to={`/watch/${data.id.videoId}`}>
                            
                        <label className="title"  >{data.snippet.title}</label>
                        </Link>
                         <div className="channel-duration">
                            <div  className="channel-link">
                            <span title={data.snippet.channelTitle} className="ch-link">{data.snippet.channelTitle} <span></span></span>
                            </div>
                            <div className="timepost">
                            <span className="time-post">{data.snippet.publishedAt}</span>
                            </div>
                         </div>
                         </div>
                      )
                                           
                     })
                                    
                
                    
                
                 }
               
               
                
            </div>

           <div className="Trending-title">
                <h5>YRF</h5> 
                </div>
               
             <div className="Trending-row">
                 {
                                     
                   channeldata.map((data)=>{
                      return (
                        <div className="trending-video">
                        <a className="video-link">
                        <span className="trendinghover-img"><img width="25px" src={imghovericon}></img></span>
                        <img className="youtube-img"  src={data.snippet.thumbnails.medium.url}></img>
                        </a>
                        <a className="video-link">
                        <label className="title">{data.snippet.title}</label>
                        </a>
                         <div className="channel-duration">
                            <div  className="channel-link">
                            <span title={data.snippet.channelTitle} className="ch-link">{data.snippet.channelTitle} <span></span></span>
                            </div>
                            <div className="timepost">
                            <span className="time-post">{data.snippet.publishedAt}</span>
                            </div>
                         </div>
                         </div>
                      )
                                           
                     })
                                    
                
                    
                
                 }
               
               
                
            </div>

            <div className="Trending-title">
                <h5>ARY Digital</h5> 
                </div>
               
             <div className="Trending-row">
                 {
                                     
                   channeldata2.map((data)=>{
                      return (
                        <div className="trending-video">
                        <a className="video-link">
                        <span className="trendinghover-img"><img width="25px" src={imghovericon}></img></span>
                        <img className="youtube-img"  src={data.snippet.thumbnails.medium.url}></img>
                        </a>
                        <a className="video-link">
                        <label className="title">{data.snippet.title}</label>
                        </a>
                         <div className="channel-duration">
                            <div  className="channel-link">
                            <span title={data.snippet.channelTitle} className="ch-link">{data.snippet.channelTitle} <span></span></span>
                            </div>
                            <div className="timepost">
                            <span className="time-post">{data.snippet.publishedAt}</span>
                            </div>
                         </div>
                         </div>
                      )
                                           
                     })
                                    
                
                    
                
                 }
               
               
                
            </div>
            
            </div>
            
        )
    }
}
export default YoutubeTrending;