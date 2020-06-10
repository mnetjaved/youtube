import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './YoutubeSearch.css';
import imghovericon from '../Images/watch.png';
import {BrowserRouter,Route,Link} from 'react-router-dom';

class YoutubeSearch extends Component{
 
    constructor(props){
        super(props);
        this.state ={
            query :this.props.match.params.query,
            relatedvideo : [],
            video_static_data_get : []
        }
    }
    static getDerivedStateFromProps(props, state) {
        if (props.match.params.query !== state.query) {
          return {
            query: props.match.params.query,
          };
        }
    
        // Return null if the state hasn't changed
        return null; 
      }

    componentDidUpdate(prevProps,prevStates){
        if(this.state.query !== prevStates.query)
        {
            this.componentDidMount();
        }
    }
    

        componentDidMount(){
            
            fetch(`https://www.googleapis.com/youtube/v3/search?q=${this.state.query}&order=viewCount&part=snippet&type=video&maxResults=20&key=AIzaSyAZka5ayJ0V4mE2avTqpWi93Al8CiRlnlQ`)
            .then(data=>data.json())
            .then(data1=>{
                this.setState({
                    relatedvideo:data1.items
                })
            })
            .catch(()=>{
                alert('Failed');
            })
        
    }

    render(){
        
       
      
        //console.log(this.state);   
        //console.log(video_static_data_get);
        
        const{relatedvideo,video_static_data_get}=this.state;

        return(
            <div className="watch_main"  >

                <div className="right_side">
                    {
                        relatedvideo.map((data)=>{
                        return (
                           <div className="related_video">
                          <div className="video_div">
                              
                              <Link to={`/watch/${data.id.videoId}`} className="video_image_side">
                              
                               <span className="hover_show_icon"><img width="25px" src={imghovericon}></img></span>
                                   <img className="watch_img_right_side" width="180px" height="100px" src={data.snippet.thumbnails.medium.url}></img>
                               </Link>
                            
                          
                          
                           <div className="video_title_side">
                               <Link to={`/watch/${data.id.videoId}`} className="youtube_search_tilte" title={data.snippet.title}>{data.snippet.title}</Link>
                               <span title={data.snippet.channelTitle} className="watch_channel_name">{data.snippet.channelTitle}</span>
                               <span title="venus" className="watch_channel_name">456648</span>
                           </div>
                       </div>

                   </div>

                        )
                    })
                     }
    
                </div>
                
            </div>
        )
    }}

export default YoutubeSearch;