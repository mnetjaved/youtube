import React, {Component} from 'react';
import './Users.css';

class Users extends Component{
    constructor(props){
        super(props);
        this.state={
            login:this.props.match.params.userid,
            full_name:'',
            location:'',
            bio:'',
            btn_link:'',
            user_name:'',
            company:'',
            img:'',
            link:'',
            hire:'',
        }
    }
    componentDidMount(){
        fetch(`https://api.github.com/users/${this.state.login}`)
        .then(data=>data.json())
        .then(data=>{
            this.setState({
                full_name:data.name,
                location:data.location,
                company:data.company,
                bio:data.bio,
                user_name:data.login,
                img:data.avatar_url,
                hire:data.hireable,
            })
            
        })
    }
render(){
   const {data}=this.state;
    console.log(this.state.hire);
    console.log("pf",data)
    return(
        
        <div className="user">
       

                        <div className="user-data">
                         <div className="user-profile">
                             <img src={this.state.img} />
                             <h1>{this.state.full_name}</h1>
                             <h3>Location: {this.state.location}</h3>
        
                         </div>
                         <div className="user-detail">
                       {}<h3>Bio</h3>
                        <p>{this.state.bio}</p>
                        <a href={`https://github.com/${this.state.user_name}`}> <button className="btn-visit-github-profile">Visi Github Profile</button></a>
                       <p><b>Username: </b>{this.state.user_name}</p>
                         <p><b>Company: </b>{this.state.company}</p>
                       <p><b>Hireable: </b>{this.state.hire}</p>
                         </div>
        
                     </div>
                    


         </div>
    )
}
}
 
export default Users