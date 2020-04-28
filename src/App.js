import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blip from './components/Blip'
import { AppKey } from './components';
import { Code } from './components';
import { MenuDown } from './components';
import { MenuUp } from './components';
import { ListColorHeader } from './components';
import { ListColorBackground } from './components';
import { ListColorSend } from './components';
import { ListColorReicived } from './components';
import { ChatIcon } from './components';
import {  BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      
      <div className="container">  
      
      <Router>
          <Switch>  
            <Route path="/ChatIcon" exact component={ChatIcon} />
            <Route path="/ListColorSend" exact component={ListColorSend} />
            <Route path="/ListColorReicived" exact component={ListColorReicived} />
            <Route path="/ListColorBackground" exact component={ListColorBackground} />
            <Route path="/ListColorHeader" exact component={ListColorHeader} />         
            
          </Switch>

          <MenuUp></MenuUp>  
        <MenuDown></MenuDown> 
        </Router> 
      <AppKey></AppKey>   
      <Blip></Blip>   
        <Code></Code>
      
      </div>
    </div>
  );
}

export default App;
