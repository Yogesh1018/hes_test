import React from 'react';
import HexViewer from './components/hexViewer';
import { useSelector } from 'react-redux'
import { SelectableGroup } from 'react-selectable';

import './App.css';

function App() {
  const data = useSelector(state => state.data);

  return (
    <SelectableGroup onSelection={()=>{}}>
      <HexViewer
        buffer={data}
        rowLength={16}
      />
    </SelectableGroup>
  );
}

export default App;
