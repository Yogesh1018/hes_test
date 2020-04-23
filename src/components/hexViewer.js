import React from 'react'
import Hex from './hex'

class HexViewer extends React.Component{
  render(){
    const rowChunk = this.props.rowLength, setChunk = this.props.setLength;
    let rows = [], row = [], set = [], sets = [];
      
    let buffer = [];
    const bytes = this.props.buffer.length;

    if(Buffer.isBuffer(this.props.buffer)) {
      for (let i = 0; i < bytes; i++) {
        buffer.push(this.props.buffer[i]);
      }
    } else {
      buffer = this.props.buffer;
    }

    for (let i = 0; i<bytes; i+=rowChunk) {
      sets = [];
      const temparray = buffer.slice(i,i+rowChunk);

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
}

export default HexViewer;