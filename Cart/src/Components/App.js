import React from 'react';
import './../App.css';
import List from './List'
import Cart from './Cart'
import Header from './Header'


class App extends React.Component {
  state = {
    list: [
      {
        name:"Product1",
        cost: 10,
        count: 1
        
      },
      {
        name:"Product2",
        cost: 30,
        count: 1
        
      },
      {
        name:"Product3",
        cost: 20,
        count: 1
        
      }
    ],
    cart: [],
    total: 0,
    isAdded:false
  }
  
  itemReceived=(index)=>{
    // console.log(index);
    let added=false;
    for(let i=0;i<this.state.cart.length;i++){
        if(this.state.cart[i].name==this.state.list[index].name){
          added=true
        }
    }
    if(!added){
    this.setState({
      cart:[...this.state.cart, this.state.list[index]],
      isAdded:false
    }, ()=>{
      this.setTotalCost()
    })
    
  }
  }
  
  deleteItemReceived=(index)=>{
    // console.log(index);
    let carts = this.state.cart;
    carts.splice(index,1)
    this.setState({
      cart: carts
    }, ()=>{
      this.setTotalCost()
    })
  }
  
  deleteAllCartItems=()=>{
    this.setState({
      cart: []
    }, ()=>{
      this.setTotalCost()
    })
  }
  
  itemCountIncrement=(index)=>{
    // console.log(index);
    // console.log(this.state.cart[index].count);
    let increment = this.state.cart[index].count;
    
    let newInc = increment + 1;
    
    let carts = this.state.cart;
    carts[index].count = newInc;

    
    this.setState({
      cart : carts
    }, ()=>{
      this.setTotalCost()
    })
  }
  
  itemCountDecrement=(index)=>{
    // console.log(index);
    // console.log(this.state.cart[index].count);
    let decrement = this.state.cart[index].count;
    if(decrement > 1){
      
      
      let newDec = decrement - 1;
      
      let carts = this.state.cart;
      carts[index].count = newDec;
      
      this.setState({
        cart : carts
      }, ()=>{
        this.setTotalCost()
      })
    }else{
      this.deleteItemReceived(index)
    }
  }

  setTotalCost=()=>{
    // console.log(this.state.cart);
    let sum = this.state.cart.reduce((total, num)=>{
      console.log(total, num);
      total = total + (num.count * num.cost)
      return total;
    }, 0)
    console.log(sum);
    this.setState({
      total : sum
    })
  }


  
  
  
  render(){
    return(
      <div className="wrapper">
      <Header/>
      <div className="container">
      <List getItem={(index)=>{this.itemReceived(index)}} itemList= {this.state.list}/>
      <Cart totalCost={this.state.total} countDecrement={(index)=>{this.itemCountDecrement(index)}} countIncrement={(index)=>{this.itemCountIncrement(index)}} deleteAll={()=>{this.deleteAllCartItems()}} deleteItem={(index)=>{this.deleteItemReceived(index)}} cartItem={this.state.cart}/>
      </div>
      </div>
      )
    }
  }
  export default App;