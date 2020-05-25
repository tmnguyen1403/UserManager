import React, {Component} from 'react';
import AddUser from './AddUser';
import ShowError from './ShowError';
import ShowInfo from './ShowInfo';
import UserList from './UserList';

class UserManager extends Component {

		state = {
			users: {},
			error: '',
			info: ''
		}

		addUser = (newUser) => {
			const {firstName, lastName, userName} = newUser;

			if (this.hasUser(userName)) {
				this.setState( {error: "Error: User already exists!", info: ''} );
			}
			else {
				const info = {firstName: firstName, lastName: lastName, games: 0};
				this.setState( currState => {
					return {
						users: {
							...currState.users,
							[userName]: info
						},
						info: 'Info: New user is added successfully!'
					}
				});
			}

			console.log(this.state.users);
		}

		hasUser = (userName) => {
			const users = Object.keys(this.state.users);
			const tmp = users.filter( user => user === userName);
			return tmp.length > 0;
		}



		render(){
			return (
				<React.Fragment>
					<AddUser addUser={this.addUser}/>
					<ShowError message={this.state.error} />
					<ShowInfo message={this.state.info} />
					<UserList users={this.state.users}/>
				</React.Fragment>
			);
		};
}

export default UserManager;
