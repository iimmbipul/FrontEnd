
class Input extends React.Component{
    state={
        name:"",
        specialities:"Software Engineers"

    }
    handleInputChange = (event)=>{
           // console.log(event.target.value);
            this.setState({
                name:event.target.value.toUpperCase()
            })
    }
    handleSpecialitiesChange = (event)=>{
       // console.log(event.target.value);
        this.setState({
            specialities:event.target.value
        })
    }
    componentDidMount=()=>{
        console.log("Mount>>>>>>>>>>",this.props)
    }
    componentDidUpdate=(prevProps)=>{
        console.log("Update>>>>>>>>>>",this.props,prevProps)
        if(prevProps.editData!==this.props.editData){
                this.setState({
                    name:this.props.editData.name,
                    specialities:this.props.editData.specialities
                })
        }
    }

    render(){
        return(
            <div className="leftContent">
                <input onChange={(event)=>{this.handleInputChange(event)}} type="text" placeholder="Name" value={this.state.name}></input>

                <select onChange={(event)=>{this.handleSpecialitiesChange(event)}} name="Specialities" value={this.state.specialities}>
                    <option>Software Engineers</option>
                    <option>Software Developers</option>
                    <option>Network Specialists</option>
                    <option>QA Testers</option>
                </select>
                {this.props.isEdit && <button onClick={()=>{this.props.sendFunctiontoInput(this.state);this.setState({name:""})}} >Update</button>}
                {!this.props.isEdit &&  <button onClick={()=>{this.props.sendFunctiontoInput(this.state);this.setState({name:""})}} >ADD</button>}
                    
            </div>
        )
    }
}

class List extends React.Component{


    render(){
        return(
            <ul className="rightContent">
                {this.props.sendDataToRender.map((data,index)=>{
                    return (
                        <li className="card">
                            <h2>{data.name}</h2><h3>{data.specialities}</h3>
                            <div className="buttons">
                                <button onClick={()=>this.props.sendFunctionToReceiveIndex(index)} >Edit</button>
                                <button onClick={()=>this.props.sendFunctionToDelete(index)}>Delete</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}





class Wrapper extends React.Component{
    state = {
        card:[],
        isEdit:false,
        editData:"",
        editIndex:""

    }

    sendDatatoList=(data)=>{
           if(this.state.isEdit){
               let editedData = this.state.card
               editedData[this.state.editIndex]=data
               console.log("Edited Data>>>>>>>",editedData)
               this.setState({
                   card:editedData,
                   isEdit:false
               })
           }
            else if(!this.state.isEdit && data.name.trim().length>0){
            this.setState({
                card:[...this.state.card,data]
            })
        }
    }
    deleteDataFromCard = (index)=>{
        this.state.card.splice(index,1)
        this.setState({
            card:this.state.card
        })
    }
    indexReceivingFun=(index)=>{
        this.setState({
            isEdit:true,
            editData:this.state.card[index],
            editIndex:index

        })
        console.log(index);
    }
    render(){
        return(
            <div className="container">
                <Input isEdit={this.state.isEdit} editData={this.state.editData} sendFunctiontoInput={(data)=>{this.sendDatatoList(data)}}/>
                <List sendFunctionToReceiveIndex={(index)=>{this.indexReceivingFun(index)}} sendFunctionToDelete={(index)=>{this.deleteDataFromCard(index)}} sendDataToRender = {this.state.card}/>
            </div>

        )
    }
}
ReactDOM.render(<Wrapper/>,document.getElementById("app"))