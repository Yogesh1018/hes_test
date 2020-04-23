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
    this.setState({activeItem: activeItem});
  }

  clearActiveItem = () => {
		this.setState({activeItem: -1});
  }

  render(){

    const sets = this.props.sets.map(function(set, i) {
			const active = this.state.activeSet == i ? true : false

			const props = {
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
				let c = "·";
				if (b > 31 && b < 127) {
					c = String.fromCharCode(b);
				}

				if (b == -1) {
					c = ""
				}

				const activeCell  = this.state.activeSet * (theSet.length) + this.state.activeItem;
				const currentCell = setIndex*(theSet.length) + itemIndex;
				const classes = ( activeCell == currentCell ) ? 'active' : '';

				return (<span className={classes} key={Math.random() + "ascii"}>{c}</span>);
			}.bind(this));
    }.bind(this));
    
    return(
      <div className="row">
				<span className="heading">{this.props.heading}:</span>
					{sets}
				<span className="ascii">
					<span className="setAscii">
					{ascii}
					</span>
				</span>
			</div>
    )
  }
}

export default Row;