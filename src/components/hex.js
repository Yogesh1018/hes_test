import React from 'react'
import Row from './row'

class Hex extends React.Component{
  render(){
    const pad = "000000";

    const rows = this.props.rows.map(function(row, i) {
      var heading = ''+i*this.props.bytesper;
        heading = pad.substring(0, pad.length - heading.length) + heading;
        return <Row sets={row} heading={heading} key={i + "row"}/>;
    }.bind(this));
    
    return(
      <div className="hexviewer">
        <div className="hex">
          {rows}
        </div>
      </div>
    )
  }
}

export default Hex;