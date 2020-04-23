import React from 'react'
import Set from './set'

class Row extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeSet: -1,
      activeItem: -1
    };
  }

  setActiveSet = (activeSet) => {
    if(this.props.sets[activeSet][this.state.activeItem] == -1) return;
		this.setState({activeSet: activeSet});
  }

  clearActiveSet = () => {
    this.setState({activeSet: -1});
  }

  setActiveItem = (activeItem) => {
    debugger
    this.setState({activeItem: activeItem});
  }

  clearActiveItem = () => {
		this.setState({activeItem: -1});
  }

  render(){

    const sets = this.props.sets.map(function(set, i) {
			var active = this.state.activeSet == i ? true : false

			var props = {
				set: set,
				index: i,
				active: active,
				activeItem:   this.state.activeItem,

				activateSet:  this.setActiveSet,
				clearSet:     this.clearActiveSet,
				activateItem: this.setActiveItem,
				clearItem:    this.clearActiveItem
			}

			return (<Set {...props } key={Math.random() + "set"} />);
    }.bind(this));
    
    const ascii = this.props.sets.map(function(set, setIndex) {
			return set.map(function(b, itemIndex, theSet) {
				var c = "·";
				if (b > 31 && b < 127) {
					c = String.fromCharCode(b);
				}

				if (b == -1) {
					c = ""
				}

				var activeCell  = this.state.activeSet * (theSet.length) + this.state.activeItem;
				var currentCell = setIndex*(theSet.length) + itemIndex;
				var classes = ( activeCell == currentCell ) ? 'active' : '';

				return (<li className={classes} key={Math.random() + "ascii"}>{c}</li>);
			}.bind(this));
    }.bind(this));
    
    return(
      <div className="row">
				<div className="heading">{this.props.heading}:</div>
					{sets}
				<div className="ascii">
					<ul className="setAscii">
					{ascii}
					</ul>
				</div>
			</div>
    )
  }
}

export default Row;