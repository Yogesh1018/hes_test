import React from 'react';
import Hex from './hex';


const HexViewer = ({rowLength, buffer}) => {
  const setLength = 1;
  const rowChunk = rowLength, setChunk = setLength;
  let rows = [], row = [], set = [], sets = [];

  const bytes = buffer.length;

  let bufferData = []

  if(Buffer.isBuffer(buffer)) {
    for (let i = 0; i < bytes; i++) {
      bufferData.push(buffer[i]);
    }
  } else {
    bufferData = buffer;
  }

  for (let i = 0; i<bytes; i+=rowChunk) {
    sets = [];
    const temparray = bufferData.slice(i,i+rowChunk);

    for(let z = temparray.length; z < rowChunk; z++) {
      temparray.push(-1);
    }
    row = [];
    for (let x=0,k=temparray.length; x<k; x+=setChunk) {
      let set = temparray.slice(x,x+setChunk);

      for(let z = set.length; z < setChunk; z++) {
        set.push(-1);
      }
      row.push(set);

    }
    rows.push(row);
  }

  return (
    <Hex rows={rows} bytesper={rowChunk} />
  );
}


export default HexViewer;