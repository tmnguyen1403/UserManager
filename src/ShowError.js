import React from 'react';

const ShowError = (props) => {
	return (
		<span style={{color: "red"}} disabled={props.message === ''}>
			{props.message}
		</span>
	)
}

export default ShowError;
