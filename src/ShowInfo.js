import React from 'react';

const ShowInfo = (props) => {
	return (
		<span style={{color:"blue"}} disabled={props.message === ''}>
			{props.message}
		</span>
	)
}

export default ShowInfo;
