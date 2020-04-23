import React from 'react'

const Header = ({rowLength}) => {
  const headerData = ["0", "1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

  const headers = headerData.map(function(data, i) {
    if(i < rowLength){
      return <span key={i + "header"}>{data}</span>;
    }
  });
  return(
    <React.Fragment>
      {headers}
    </React.Fragment>
  )
}

export default Header;