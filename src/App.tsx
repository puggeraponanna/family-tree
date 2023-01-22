import React from 'react';
import './App.css';
import Node from './components/Node';

function App() {
  return (
    <div className="App">
      <Node name='Somaiah' spouses={['Chemira Nanjavva', 'Chondanda Subbavva']}></Node>
    </div>
  );
}

export default App;
