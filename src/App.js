import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppKey } from './components'
import { Code } from './components'
import { MenuDown } from './components'


function App() {
  return (
    <div className="App">
      <AppKey></AppKey>
      <Code></Code>
      <MenuDown></MenuDown>      
    </div>
  );
}

export default App;
