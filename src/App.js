import React, { useState } from 'react';
import logo from './logo.svg';

import FileUpload from './components/file_upload'

import './App.css';

let data = []
for (let i = 0; i < 295; i++) {
	data.push(parseInt(Math.random() * 255))
}

function App() {
  return (
      <div>
        <FileUpload />
        
      </div>
  );
}

export default App;
