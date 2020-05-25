import React from 'react';
import PropTypes from 'prop-types';

const ShowInfo = (props) => {
	return (
		<span style={{color:"blue"}} disabled={props.message === ''}>
			{props.message}
		</span>
	)
}

ShowInfo.propTypes = {
	message: PropTypes.string
}

export default ShowInfo;
