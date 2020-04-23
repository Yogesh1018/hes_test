import React from 'react'

class Item extends React.Component {
  
  activate = () => {
    this.props.activate(this.props.index);
  }

  clear = () =>{
    this.props.clear();
  }

  render(){
    let classes = (this.props.active ? 'active' : '') + (this.props.value === -1 ? ' none' : '');
    return(
      <span className={classes} onMouseOver={this.activate} onMouseLeave={this.clear}>{this.props.byteString}</span>
    )
  }
}

export default Item;