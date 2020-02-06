import React from 'react'

class List extends React.Component {
    render() { 
        // console.log(this.props)
        return ( 
            <div className="productList">
                <ul>
                     {this.props.itemList.map((item, index)=>{
                         return(

                             <li>
                                 <span>{item.name}</span>
                                 <span>{item.cost}</span>
                                 
                                 <button onClick={()=>{this.props.getItem(index)}}> Add to Cart</button>
                             </li>
                             
                         )
                     })}
                </ul>
              
            </div>
         );
    }
}
 
export default List;