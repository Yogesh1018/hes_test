import React from 'react';
import HexViewer from './components/hexViewer';
import { useSelector } from 'react-redux'

import './App.css';

function App() {
  const data = useSelector(state => state.data);

  return (
      <HexViewer
        buffer={data}
        rowLength={16}
      />
  );
}

export default App;
