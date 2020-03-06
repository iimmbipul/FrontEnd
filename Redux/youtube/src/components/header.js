import React, { Component } from 'react'
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';


const receiveData = (store)=>{
    //console.log(store);
   }
   const receiveFunction = (dispatch)=>{
       return{
            searchName:dispatch
       }
   }

export default connect(receiveData,receiveFunction)(class Header extends Component {

    state={
        text:"",
    }

    handleInputChange = (value)=>{
        this.setState({
            text:value
        })
    }
    handleSearchName=()=>{
        //Youtube API Call
        let API = "AIzaSyDbiLvosfaDhjBNtdzxtvVvMIagwXogoDg";
        let searchName = this.state.text;
        let searchList = axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchName}&type=video&key=${API}`)
        //console.log("First Call",list);
        searchList.then((d)=>{
           // console.log(d.data.items);
            let action={
                type:"fetchedVideoList",
                payload:d.data.items
            }
            this.props.searchName(action);
        })

       
    }

    render() {
        return (
            <div className="header">
                <div className="logo">YouTube</div>
                <div className="search">
                        <input type="text" value={this.state.text} onChange={(e)=>{this.handleInputChange(e.target.value)}}/>
                        <Link to="/list"> <button onClick={this.handleSearchName} >Search</button></Link>
                </div>
                <div className="user">User</div>
            </div>
        )
    }
})



