import React from 'react'
import Row from './row'

const Hex = ({rows, bytesper}) => {
  const pad = "000000";
  const rowComponent = rows.map(function(row, i) {
    var heading = ''+i*bytesper;
    heading = pad.substring(0, pad.length - heading.length) + heading;
    return <Row sets={row} heading={heading} key={i + "row"}/>;
  });
  
  return(
    <div className="hexviewer">
      <div className="hex">
        {rowComponent}
      </div>
    </div>
  )
}

export default Hex;