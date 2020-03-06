import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
const receiveData = (store)=>{
    //console.log("List>>>>",store)
    return{
    list:store.searchList,
    historyList:store.history,
    watchLaterList:store.watchLater,
    likedVideos:store.likedVideos,
    trendingVideos:store.trending
    }
    
}
const receiveFunction = (dispatch)=>{
    return {
        saveHistory:dispatch,
        watchLater:dispatch,
       
    }
}
export default connect(receiveData,receiveFunction)(withRouter(class List extends Component {
    componentDidUpdate=()=>{
        console.log("componentUpdate")
    }
    componentWillUnmount =()=>{
        console.log("componentUnmount");
    }
    
    handleCardHistory=(data,id)=>{
        console.log("handleCardHistory>>",data);
       let action={
           type:"saveHistory",
           payload:data,
           
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

   
    //     console.log("channel ID",data);
    //     let action={
    //         type:"get_channel_id",
    //         payload:data
    //     }
    //     this.props.channelId(action);
 
    //  }
    
    
    render() {
        console.log("Props",this.props)
        return (
            <Fragment>
                <div className="videoList">
                    <p className="searchTitle">Search Result</p>
                
                
               {this.props.match.path==="/list" && this.props.list && this.props.list.map((data,index)=>{
                   return(
                       <Fragment>
                           <div className="globalVideoCard">
                            <Link to={`/play/${data.id.videoId}`}> 
                                <div className="videoCard" onClick={()=>{this.handleCardHistory(data)}}>
                                    <div className="left">
                                        <img src={data.snippet.thumbnails.high.url}></img>
                                    </div>
                                    <div className="right">
                                        <p className="videoTitle">{data.snippet.title}</p>
                                        <p className="videoChannelTitle">{data.snippet.channelTitle}</p>
                                        <p className="videoDescription">{data.snippet.description}</p>
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
               {this.props.match.path==="/trending" && this.props.trendingVideos && this.props.trendingVideos.map((data,index)=>{
                   return(
                       <Fragment>
                            <Link to={`/play/${data.id}`}> 
                                <div className="videoCard" onClick={()=>{this.handleCardHistory(data)}}>
                                    <div className="left">
                                        <img src={data.snippet.thumbnails.high.url}></img>
                                    </div>
                                    <div className="right">
                                        <span className="videoTitle">{data.snippet.title}</span>
                                        <span className="videoChannelTitle">{data.snippet.channelTitle}</span>
                                        <span className="videoDescription">{data.snippet.description}</span>
                                    </div>

                                </div> 
                            </Link>
                        </Fragment>
                    
                   )
                   
               })}
               {this.props.match.path==="/history" && this.props.historyList && this.props.historyList.map((data,index)=>{
                   return(
                       <Fragment>
                            <Link to={`/play/${data.id}`}> 
                                <div className="videoCard" onClick={()=>{this.handleCardHistory(data)}}>
                                    <img src={data.snippet.thumbnails.high.url}></img>
                                    <span>{data.snippet.title}</span>

                                </div> 
                            </Link>
                        </Fragment>
                    
                   )
                   
               })}
               {this.props.match.path==="/watch-later" && this.props.watchLaterList && this.props.watchLaterList.map((data,index)=>{
                   return(
                       <Fragment>
                            <Link to={`/play/${data.id}`}> 
                                <div className="videoCard" onClick={()=>{this.handleCardHistory(data)}}>
                                    <img src={data.snippet.thumbnails.high.url}></img>
                                    <span>{data.snippet.title}</span>

                                </div> 
                            </Link>
                        </Fragment>
                    
                   )
                   
               })}
               {this.props.match.path==="/liked-videos" && this.props.likedVideos && this.props.likedVideos.map((data,index)=>{
                   return(
                       <Fragment>
                            <Link to={`/play/${data.id}`}> 
                                <div className="videoCard" onClick={()=>{this.handleCardHistory(data)}}>
                                    <img src={data.snippet.thumbnails.high.url}></img>
                                    <span>{data.snippet.title}</span>

                                </div> 
                            </Link>
                        </Fragment>
                    
                   )
                   
               })}
               </div>
            </Fragment>
        )
    }
}))
