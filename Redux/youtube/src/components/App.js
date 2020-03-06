import React, { Component } from 'react'
import Header from './header';
import List from './list';
import Play from './play';
import Navigation from './navigation';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import History from './history';
export default class App extends Component {
  render() {
    
    return (
      <div>
      
        <Router>
          <Header/>
          <Switch>
              
              <Route path="/" exact ><Navigation/></Route>
              <Route path="/list" exact><div className="bodyArea"><Navigation/><List/></div></Route>
              <Route path="/trending" exact><div className="bodyArea"><Navigation/><List/></div></Route>
              <Route path="/play/:id"  exact ><Play/></Route>
              <Route path='/history' exact ><Navigation/><List/></Route>
              <Route path='/watch-later' exact ><Navigation/><List/></Route>
              <Route path='/liked-videos' exact ><Navigation/><List/></Route>
                  
                      
                    


                    
          </Switch>
        </Router>
          
         
            

         


      </div>
    )
  }
}
