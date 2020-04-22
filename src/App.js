import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppKey } from './components';
import { Code } from './components';
import { MenuDown } from './components';
import { MenuUp } from './components';
import { ListColorHeader } from './components';
import { ListColorBackground } from './components';
import { ListColorSend } from './components';
import { ListColorReicived } from './components';
import { ListColorChat } from './components';




function App() {
  return (
    <div className="App">
      <div className="container">
        <AppKey></AppKey>
        <ListColorChat></ListColorChat>
        <ListColorSend></ListColorSend>
        <ListColorReicived></ListColorReicived>
        <ListColorBackground></ListColorBackground>
        <ListColorHeader></ListColorHeader>
        <Code></Code>
        <MenuUp></MenuUp>  
        <MenuDown></MenuDown>      
      </div>
    </div>
  );
}

export default App;
