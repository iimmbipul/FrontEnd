import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';

class EditModal extends Component {
    state = { 
        input:''
     }

    componentDidUpdate=(prevProps)=>{
        console.log("Status>>>>>>",this.props.isEdit,this.props.editData,prevProps)
        if(prevProps.editData!==this.props.editData){
            this.setState({
                input:this.props.editData
            })
        }
    }
    inputChangeHandler = (text)=>{
        this.setState({
            input:text
        })
    }
    sendDatatoRedux = ()=>{
        console.log("Calling Redux");
        let action = {
            type:"update_Data",
            payload:this.state.input
        }
        if(this.state.input.trim().length>0){
        this.props.update(action)
        this.setState({
            input:''
        })}
        else{
          this.setState({
              input:''
          })
        }
    }
    render() {
        let z=0
        if(this.props.x>500){
            z=30;
        }
        if(this.props.x>750){
            z=60
        }
        if(this.props.x>1000){
            z=90
        }
        let x= this.props.x-220+z
        let y= this.props.y-50
        const style={
            position:"absolute",
            top:y+"px",
            left:x+"px"
        }
        return (
            <Fragment>
               { this.props.isEdit && <div className="edit">
                    <div className="cross">X</div>
                    <div className="editData" style={style}>
                        <textarea  autoFocus type="text" onChange={(e)=>{this.inputChangeHandler(e.target.value)}} value = {this.state.input}></textarea>
                        <button onClick={()=>{this.sendDatatoRedux()}}>Save</button>
                    </div>
                </div>}
            </Fragment>
        );
    }
}

const receiveData = (store)=>{
    console.log("Store",store)
    return {
        isEdit:store.editStatus,
        editDataListId:store.editDataListId,
        editDataCardId:store.editDataCardId,
        editData:store.editData,
        x:store.x,
        y:store.y
    }
}
const receiveFunction = (dispatch)=>{
    console.log(dispatch);
    return {
        update : dispatch
    }

}


export default connect(receiveData,receiveFunction)(EditModal)

