import React from 'react';
import User from './User';
import PropTypes from 'prop-types';

const UserList = (props) => {
	const {users} = props;
	const userNames = Object.keys(users);
	const hasUser = () => {
		return userNames.length !== 0;
	};

	return (
		<React.Fragment>
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

UserList.propTypes = {
		users: PropTypes.object.isRequired,
}
export default UserList;
