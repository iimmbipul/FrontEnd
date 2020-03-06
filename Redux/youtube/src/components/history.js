import React, { Component } from 'react';
import {connect} from 'react-redux'

const receiveData = (store)=>{
    console.log(store);
    return{
        history:store.history
    }
}


export default connect(receiveData)(class History extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
})
