import React from 'react'
import Item from './item'

const Set = ({ set }) => {

  const items = set.map((b, i) => {
    var byteString = "";

    if (b != -1 ) {
      byteString = b.toString(16);

      if(byteString.length == 1) {
        byteString = "0" + byteString;
      }
    }

    return <Item key={i} index={i + "item"} value={b} byteString={byteString} />;
  });

  return(
    <span className="setHex" >
      {items}
    </span>
  )
}

export default Set;