import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import {connect} from 'react-redux';
import axios from 'axios';

const receFun = (dispatch)=>{
    return{
        trendingVideos:dispatch
    }
}
export default connect(null,receFun)(class Navigation extends Component {
    handleTrendingVideos=()=>{
        
        
        let searchList = axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=15&key=AIzaSyDbiLvosfaDhjBNtdzxtvVvMIagwXogoDg`)
        //console.log("First Call",list);
        searchList.then((d)=>{
           // console.log(d.data.items);
            let action={
                type:"trendingVideoList",
                payload:d.data.items
            }
            this.props.trendingVideos(action);
        })
    }
    render() {
        return (
            <Fragment>
                
                
                <div className="navigation">
                
                <div className="row1">
                    <Link to="/"><span>Home</span></Link>
                    <Link to="/trending" onClick={()=>{this.handleTrendingVideos()}}><span>Trending</span></Link>
                </div>
                <div className="row2">
                    <Link to="/history"><span>history</span></Link>
                    <Link to="/watch-later"><span>watchlater</span></Link>
                    <Link to="/liked-videos"><span>likedvideos</span></Link>
                </div>
                <div className="row3">
                <SimpleBar style={{maxHeight:100}}>
                   <p>1</p><p>1</p><p>1</p><p>1</p>
                   </SimpleBar>
                </div>
                
            </div>
            
            </Fragment>
        )
    }
})
