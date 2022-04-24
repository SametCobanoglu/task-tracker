import React from 'react'

const Button = ({color, text , toggleShow}) => {
	// const handleClick =() => {
	// 	console.log("Click with handle");
	// };
	return (
		<div>
			<button className="btn" 
			tyle={{backgroundColor: color }}
			onClick={toggleShow}>
				{text}
			   </button>
		</div>
	);
};

export default Button
