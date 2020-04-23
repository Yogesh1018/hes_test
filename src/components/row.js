import React from 'react'
import Set from './set'


const Row = ({sets, rowIndex, heading }) => {

	const setRows = sets.map((set, i) => {
		return <Set set={set} key={`${rowIndex}-${Math.random()}-set`} />;
	});

	const asciiRows = sets.map((set, setIndex) => {
		return set.map(function(b, itemIndex, theSet) {
			let c = "·";
			if (b > 31 && b < 127) {
				c = String.fromCharCode(b);
			}

			if (b == -1) {
				c = ""
			}
			return (<span  key={Math.random() + "ascii"}>{c}</span>);
		});
	});

	return(
		<div className="row">
			<span className="heading">{heading}:</span>
				{setRows}
			<span className="ascii">
				<span className="setAscii">
				{asciiRows}
				</span>
			</span>
		</div>
	)


}


export default Row;