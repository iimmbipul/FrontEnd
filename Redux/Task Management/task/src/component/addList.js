import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
class AddList extends Component {
     state = { 
         view:false,
         text:""
      }
      addListButton = ()=>{
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
              type:"add_List",
              payload:this.state.text
          }
          if(this.state.text.trim().length>0){
          this.props.addList(action)
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
                 {!this.state.view && <button className="addListButton" onClick={()=>{this.addListButton()}}>Add List</button>}
                 {this.state.view && <div className="listInputName">
                        <input autoFocus onChange={(e)=>{this.inputChangeHandler(e.target.value)}} value={this.state.text} type="text"/>
                        <button className="saveListButton" onClick={()=>{this.sendDatatoRedux()}}>Save List</button>
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
        addList:dispatch
    }

}


export default connect(receiveData,receiveFunction)(AddList)