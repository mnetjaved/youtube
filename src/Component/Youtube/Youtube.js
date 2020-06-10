import React, { Component } from 'react';
import '../Footer/Footer.css';

const API = "AIzaSyAZka5ayJ0V4mE2avTqpWi93Al8CiRlnlQ";
const channelID = "UCaVz5Di_7mmSZl7QD7G8Log";
const result = 2;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`
var finalURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB04GbVXCO1U5hD1oiU1jr6bk92_LtNQxA`;

class Youtube extends Component{
     constructor(props){
         super(props);
         this.state = {
             resultyt : []
         };

         this.clicked = this.clicked.bind(this);

     }

     clicked(){
         fetch(finalURL)
         .then((Response)=>Response.json())
         .then((responseJson)=>{
             const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
             this.setState({resultyt});
            // console.log(this.state.resultyt); 
         })
         .catch((error)=>{
             console.log(error);
         });
     }

    render(){
        console.log(finalURL);
        return(
            <div>
                <button onClick={this.clicked}>get video</button>
                {
                    this.state.resultyt.map((link, i)=>{
                        console.log(link);
                        var frame =<iframe key={i} width="400" height="225" src={link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    return frame;
                    })
                }
                <div className="ytdropdown">
                {this.frame}
                </div>

              


            </div>
        );
    }
}
export default Youtube;