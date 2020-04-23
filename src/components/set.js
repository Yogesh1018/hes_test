import React from 'react'
import Item from './item'

class Set extends React.Component {
  
  activate = () => {
    this.props.activateSet(this.props.index);
  }

  clear = () =>{
    this.props.clearSet();
  }

  render(){
    const items = this.props.set.map(function(b, i) {
			var byteString = "";

			if (b != -1 ) {
				byteString = b.toString(16);

				if(byteString.length == 1) {
					byteString = "0" + byteString;
				}
      }
      const active = this.props.activeItem == i && this.props.active
			return (<Item key={i} index={i + "item"} value={b} byteString={byteString} active={active} activate={this.props.activateItem} clear={this.props.clearItem}/>);
    }.bind(this));
    
    return(
      <ul className={"setHex" + (this.props.active ? ' active' : '')} onMouseOver={this.activate} onMouseLeave={this.clear}>
				{items}
			</ul>
    )
  }
}

export default Set;