import React from 'react';
import User from './User';

const UserList = (props) => {
	const {users} = props;
	const userNames = Object.keys(users);
	const hasUser = () => {
		return userNames.length !== 0;
	};

	return (
		<React.Fragment disable={true}>
			{hasUser() && <h2> "User's Infos"</h2>}
			<ol>
				{userNames.map(
					userName =>
					<User userName={userName} info={users[userName]}/>
				)}
			</ol>
		</React.Fragment>
	)
}

export default UserList;
