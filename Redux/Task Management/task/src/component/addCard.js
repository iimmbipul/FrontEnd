import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
class AddCard extends Component {
     state = { 
         view:false,
         text:""
      }
      AddCardButton = ()=>{
            this.setState({
                view:true  
            })
      }
      inputChangeHandler = (text)=>{
            this.setState({
                text:text
            })
      }
      sendDatatoRedux = ()=>{
          console.log("Calling Redux");
          let action = {
              type:"add_Card",
              payload:{data:this.state.text,index:this.props.index}
          }
          if(this.state.text.trim().length>0){
          this.props.AddCard(action)
          this.setState({
              view:false,
              text:""
          })}
          else{
            this.setState({
                view:false,
                text:""
            })
          }
      }
     render() {
         return (
             <Fragment>
                 {!this.state.view && <button className="addCard" onClick={()=>{this.AddCardButton()}}>Add Card</button>}
                 {this.state.view && <div className="cardInputName">
                        <textarea autoFocus onChange={(e)=>{this.inputChangeHandler(e.target.value)}} value={this.state.text} type="text"></textarea>
                        <button onClick={()=>{this.sendDatatoRedux()}}>Save Card</button>
                    </div> }

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
        AddCard:dispatch
    }

}


export default connect(receiveData,receiveFunction)(AddCard)