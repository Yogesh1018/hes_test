import React from 'react'
import Row from './row'
import Header from './header'

const Hex = ({rows, bytesper, rowLength}) => {
  const pad = "000000";

  const rowComponent = rows.map(function(row, i) {
    var heading = ''+i*bytesper;
    heading = pad.substring(0, pad.length - heading.length) + heading;
    return <Row rowIndex={i} sets={row} heading={heading} key={i + "row"}/>;
  });

  return(
    <div className="hexviewer">
      { rows.length > 0 && 
        <diV class="header">
          <span class="hex">
            <Header rowLength={rowLength}/>
          </span>
          <span class="ascii">
            <Header rowLength={rowLength}/>
          </span>
        </diV>
      }

      <div className="hex">
        {rowComponent}
      </div>
    </div>
  )
}

export default Hex;