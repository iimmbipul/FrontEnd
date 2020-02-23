import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import AddList  from './addList';
import Card from './card';
class List extends Component {
    
    render() {
        console.log("Props",this.props.list);
        return (
            <Fragment>
                <ul className="list">
                {this.props.list && this.props.list.map((value,index)=>{
                    return (
                        <Fragment>
                            <div className="insideList">
                            <li className="listItem">{value.listname} <Card  id={value.listId} index={index}/></li>
                            
                            </div>
                            
                        </Fragment>

                    )
                })}
                <AddList/>

                </ul>
            </Fragment>
        );
    }
}
const receiveData = (store)=>{
    console.log("Store",store)
    return {
        list:store.list
    }
}
const receiveFunction = (dispatch)=>{
    console.log(dispatch);

}


export default connect(receiveData,receiveFunction)(List)

