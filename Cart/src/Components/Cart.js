import React from 'react'

class Cart extends React.Component {
    render() { 
        return ( 
            <div className="cart">
                <ul>
                    {this.props.cartItem && this.props.cartItem.map((item, index)=>{
                        return(
                            <li>
                               <div className="sec1"> <span>{item.name}</span>  <span className="cost">Rs.{item.cost}</span>
                                 <button onClick={()=>{this.props.countDecrement(index)}}>-</button>{item.count}<button onClick={()=>{this.props.countIncrement(index)}}>+</button>
                                 </div> <div className="sec2"><button onClick={()=>{this.props.deleteItem(index)}} >Remove</button></div>
                            </li>
                        )

                    })}
                </ul>
                <span>Total : {this.props.totalCost}</span><br/>
                <button className="checkout" onClick={()=>{this.props.deleteAll()}}>Checkout</button>


            </div>
         );
    }
}
 
export default Cart;