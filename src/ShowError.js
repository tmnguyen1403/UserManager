import React from 'react';
import PropTypes from 'prop-types';

const ShowError = (props) => {
	return (
		<span style={{color: "red"}} disabled={props.message === ''}>
			{props.message}
		</span>
	)
}

ShowError.propTypes = {
	message: PropTypes.string
}

export default ShowError;
