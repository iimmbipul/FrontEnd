
class Input extends React.Component{
    state={
        name:"",
        specialities:"Software Engineers"

    }
    handleInputChange = (event)=>{
            console.log(event.target.value);
            this.setState({
                name:event.target.value.toUpperCase()
            })
    }
    handleSpecialitiesChange = (event)=>{
        console.log(event.target.value);
        this.setState({
            specialities:event.target.value
        })
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
                <button onClick={()=>{this.props.sendFunctiontoInput(this.state);this.state.name=""}} >ADD</button>
                    
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
                                <button onClick={()=>alert("Bhai kaam Chal Rha h Is button par")} >Edit</button>
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
        card:[]
    }

    sendDatatoList=(data)=>{
            console.log(data);
            this.setState({
                card:[...this.state.card,data]
            })
    }
    deleteDataFromCard = (index)=>{
        this.state.card.splice(index,1)
        this.setState({
            card:this.state.card
        })
    }
    render(){
        return(
            <div className="container">
                <Input sendFunctiontoInput={(data)=>{this.sendDatatoList(data)}}/>
                <List sendFunctionToDelete={(index)=>{this.deleteDataFromCard(index)}} sendDataToRender = {this.state.card}/>
            </div>

        )
    }
}
ReactDOM.render(<Wrapper/>,document.getElementById("app"))