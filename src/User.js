import React from 'react';

const User = (props) => {
	const {userName, info} = props;

	return (
		<li key={userName}>
			<ul>
				<li>User Name: {userName}</li>
				<li>Number of played games: {info.games}</li>
			</ul>
		</li>
	)
}

export default User;
