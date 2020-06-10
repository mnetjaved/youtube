import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './watch.css';
import imghovericon from '../Images/watch.png';
import like from '../Images/like.png';
import dislike from '../Images/dislike.png';
import {Link} from 'react-router-dom';


var second_API = "AIzaSyCMwyn5PYk99jDsgTFG3d4AAiKTcptRMoU";
var first_API = "AIzaSyAZka5ayJ0V4mE2avTqpWi93Al8CiRlnlQ";

class watch extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            vid : this.props.match.params.vid,
            relatedvideo : [],
            video_static_data_get : [],
            video_title : [],
            
           
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.match.params.vid !== state.vid) {
          return {
            vid: props.match.params.vid,
          };
        }
    
        // Return null if the state hasn't changed
        return null; 
      }

      componentDidUpdate(prevProps,prevStates){
          if(this.state.vid !== prevStates.vid)
          {
              this.componentDidMount();
          }
      }
          

      
        componentDidMount(){
            
            fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${this.state.vid}&type=video&key=${first_API}&maxResults=20`)
            .then(data1=>data1.json())
            .then(data1=>{

                console.log("ff",data1.items[0].id.videoId);

                this.setState({
                    relatedvideo:data1.items,
                   
                })
                

              
            })
            .catch(()=>{
                alert('api Failed');
            })

            fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${this.state.vid}&key=${first_API}`)
            .then(data=>data.json())
            .then(data1=>{
                this.setState({
                   
                    video_static_data_get:data1.items
                })
            })
            .catch(()=>{
                alert('Failed mid');
            })

            fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${this.state.vid}&key=${first_API}`)
            .then(data=>data.json())
            .then(data1=>{
                this.setState({
                   
                    video_title:data1.items
                })
            })
            .catch(()=>{
                alert('Failed last');
            })
        
    }

    // componentDidUpdate(prevProps,prevStates){
    //     console.log(prevProps);
    //     console.log(prevStates)
    //     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${this.state.vid}&type=video&key=AIzaSyB04GbVXCO1U5hD1oiU1jr6bk92_LtNQxA&maxResults=20`)
    //         .then(data=>data.json())
    //         .then(data1=>{
    //             this.setState({
    //                 relatedvideo:data1.items
    //             })
    //         })
    //         .catch(()=>{
    //             alert('Failed');
    //         })
    // }
   

  
  

    render(){
       // vid = (this.props.match.params.vid);
   // console.log(this.props.match.params.vid)
        
        //console.log(video_static_data_get);
     
        const{relatedvideo,video_static_data_get,video_title,video_views}=this.state;
       
            
        return(
            <div className="watch_main"  >
                <div className="video_side" >
                
                    {
                    video_title.map((data)=>{
                        return(
                            <div className="video_iframe">
                            <iframe src={`https://www.youtube.com/embed/${data.id}?vq=hd1080&autoplay=1&rel=0`} width="745" height="419" frameborder="0"></iframe>
                
                            <div>
                                <span className="title">{data.snippet.title}</span>

                               {
                                   video_static_data_get.map((video_static)=>{
                                       return(
                                        <div className="video_statistics">
                                        <span>{video_static.statistics.viewCount} views</span>
                                        <span> <span className="fa fa-thumbs-o-up"> </span> {video_static.statistics.likeCount}</span>
                                        <span><span className="fa fa-thumbs-o-down"></span> {video_static.statistics.dislikeCount}</span>
                                        <span> <span className="fa fa-share-alt"></span> SHARE </span>
                                        <span><span className="fa fa-plus"></span> SAVE</span>
                                        </div>
                                       
                                       )
                                   })
                               }
                                
                                
                            </div>
                            </div>
                        )
                    })
                    }

                
                </div>
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
                               <Link to={`/watch/${data.id.videoId}`} className="watch_video_title" title={data.snippet.title}>{data.snippet.title}</Link>
                               <span title={data.snippet.channelTitle} className="watch_channel_name">{data.snippet.channelTitle}</span>
                               
                                
                                
                                    {/* /* componentDidMount()
                                        fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=caEfgyFv4SM&key=AIzaSyCMwyn5PYk99jDsgTFG3d4AAiKTcptRMoU`)
                                        .then(data=>data.json())
                                        .then(data=>{
                                           console.log("work");
                                          //return  <span title="venus" className="watch_channel_name">{data.items[0].statistics.viewCountt}</span>
                                        })
                                        .catch(()=>{
                                            alert('api under Failed');
                                        })
                                    
                                      */ }
                            
                                
                                   
                               
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

export default watch;