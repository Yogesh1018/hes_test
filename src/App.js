import React from 'react';
import HexViewer from './components/hexViewer';
import { useSelector } from 'react-redux'
import { SelectableGroup } from 'react-selectable';
import FileUpload from './components/file_upload';

import './App.css';

function App() {
  const data = useSelector(state => state.data);

  return (
    <React.Fragment>
    <FileUpload />
    <br></br>

    <SelectableGroup onSelection={()=>{}}>
      <HexViewer
        buffer={data}
        rowLength={16}
      />
    </SelectableGroup>
    </React.Fragment>
  );
}

export default App;
