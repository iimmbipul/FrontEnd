import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import AddCard from './addCard';

class Card extends Component {
    editData = (listId,cardId,e)=>{
        console.log(">>>>>>>>>>>",this.props.list[this.props.index]);
        console.log("IDHere>>>>>>>>>",listId,"Card",cardId)
        let action = {
            type:"editing",
            payload:{listId:listId,cardId:cardId,x:e.screenX,y:e.screenY}
        }
        this.props.edit(action);
        
    }
    deleteData = (listId,cardId)=>{
        let action = {
            type:"delete",
            payload:{listId:listId,cardId:cardId}
        }
        this.props.delete(action);
    }
    
    render() {
        console.log("Card",this.props.list[this.props.index].card)
        return (
                <Fragment>
                   <ul className="card">
                       {this.props.list[this.props.index].card && this.props.list[this.props.index].card.map((value,index)=>{
                           return(
                           <li draggable className="cardItem">{value.cardData}
                                <button onClick={(e)=>{this.editData(this.props.id,value.cardId,e)}} className="editButton"><i class="material-icons">
edit
</i></button>
                                <button onClick={()=>{this.deleteData(this.props.id,value.cardId)}} className="deleteButton"><i class="material-icons">
delete
</i></button>
                           </li>
                           )
                       })}
                       <AddCard index={this.props.index}/>
                       
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
    return{
        edit:dispatch,
        delete:dispatch
    }
    

}


export default connect(receiveData,receiveFunction)(Card)