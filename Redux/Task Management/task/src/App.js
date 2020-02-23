import React, {Component} from 'react';
import Header from './component/header';
import EditModal from './component/editModal';
import './App.css';

import Body from './component/body';

class App extends Component {
  

  click = (e)=>{
    console.log(e.screenX,e.screenY)
  }
  render() {
    return (
      <div className="appp" onClick={(e)=>{this.click(e)}}>
        <Header/>
        <Body/>
        <EditModal/>
        

      </div>
    );
  }
}

export default App;


