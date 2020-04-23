import React from 'react'
import Hex from './hex'


const HexViewer = ({rowLength, setLength, buffer}) => {
  const rowChunk = rowLength, setChunk = setLength;
  let rows = [], row = [], set = [], sets = [];
    
  const bytes = buffer.length || buffer.byteLength;

  let bufferData = []

  
    if(bytes > 0){
      const view1 = new DataView(buffer)
      for (let i = 0; i < bytes; i++) {
        bufferData.push(view1.getInt8(i));
      }
    }

  for (let i = 0; i<bytes; i+=rowChunk) {
    sets = [];
    const temparray = bufferData.slice(i,i+rowChunk);

    for(let z = temparray.length; z < rowChunk; z++) {
      temparray.push(-1);
    }
    row = [];
    
    let temparrayLength = temparray.length || temparray.byteLength
    for (let x=0,k=temparrayLength; x<k; x+=setChunk) {
      let set = temparray.slice(x,x+setChunk);

      let setLength = set.length || set.byteLength
      for(let z = setLength; z < setChunk; z++) {
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