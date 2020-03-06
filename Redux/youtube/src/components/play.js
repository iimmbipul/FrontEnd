import React, { Component, Fragment } from 'react'
import {withRouter,Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
const data = (store)=>{
    console.log("playStore",store);
    return{
        channelID : store.channelId,
        temp:"temp"
    }
}
const receiveFunction = (dispatch)=>{
    return {
        saveHistory:dispatch,
        watchLater:dispatch
    }
}
export default connect(data,receiveFunction)(withRouter( class Play extends Component {
     state={
         relatedVideo:[]
     }
     handleCardHistory=(data)=>{
        //console.log("dataLIstHere>>",data);
       let action={
           type:"saveHistory",
           payload:data
       }
       this.props.saveHistory(action);

    }
    handleWatchLater=(data)=>{
        //console.log("dataLIstHere>>",data);
       let action={
           type:"watchLater",
           payload:data
       }
       this.props.watchLater(action);

    }
    componentWillReceiveProps = ()=>{
        console.log("cwrp",this.props);
    }
    componentDidUpdate=(prevprops)=>{
        console.log("Back",prevprops,this.props);
    }
    componentDidMount=()=>{
        
        let API = "AIzaSyDbiLvosfaDhjBNtdzxtvVvMIagwXogoDg";
        let searchName = this.state.text;
        console.log("propsCID",this.props.channelID)
        let searchList = axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResult=10&relatedToVideoId=${this.props.match.params.id}&type=video&key=${API}`)
        //console.log("First Call",list);
        searchList.then((d)=>{
            console.log("Data>",d);
           this.setState({
               relatedVideo:d.data.items
           })
        })
        
        let searchChannelDetail = axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${this.props.channelID}&key=${API}`);
        searchChannelDetail.then((d)=>{
            console.log("channel Deatail",d);
        })
    }
    
    render() {
        
        //console.log("Playyyyyyyyyyyyyyyyyy",this.props);
        return (
            <Fragment>
                <div className="videoPlayerPage">
                
                    <iframe 
                    width="420" 
                    height="315"
                    src={`https://www.youtube.com/embed/${this.props.match.params.id}`}>
                    </iframe>
                    <div className="videoBodyPage">
                        
                        
                    </div>
                <div className="relatedVideos">
                    {this.state.relatedVideo && this.state.relatedVideo.map((data)=>{
                        console.log("WE are in JS",data);
                        return(
                            <Fragment>
                                <div className="sideVideoCard">
                                 <Link to={`/play/${data.id.videoId}`}> 
                                     <div className="sideCard" onClick={()=>{this.handleCardHistory(data)}}>
                                         <div className="left">
                                             <img src={data.snippet.thumbnails.high.url}></img>
                                         </div>
                                         <div className="right">
                                             <p className="sidevideoTitle">{data.snippet.title}</p>
                                             <p className="sidevideoChannelTitle">{data.snippet.channelTitle}</p>
                                             
                                         </div>
                                         
     
                                     </div> 
                                 </Link>
                                 <div className="watchLater">
                                             <button onClick={()=>{this.handleWatchLater(data)}}>O</button>
                                     </div>
                                     </div>
                             </Fragment>
                         
                        )
                    })}
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                </div>
                </div>
                
            </Fragment>
        )
    }
}))
