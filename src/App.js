import React, { useState } from 'react';
import logo from './logo.svg';
import HexViewer from './components/hexViewer'
import './App.css';

let data = []
for (let i = 0; i < 295; i++) {
	data.push(parseInt(Math.random() * 255))
}

function App() {
  return (
      <HexViewer  
      buffer={data} rowLength={16} setLength={4} />
  );
}

export default App;
