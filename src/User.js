import React, {Component} from 'react';
import AddUser from './AddUser';

class User extends Component {

		state = {
			users: {}
		}

		addUser = (newUser) => {
			const {firstName, lastName, userName} = newUser;

			if (this.hasUser(userName)) {
				console.log("Error: User already exists");
			}
			else {
				const info = {firstName: firstName, lastName: lastName};
				this.setState( currState => {
					return {
						users: {
							...currState.users,
							[userName]: info
						}
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
				<AddUser addUser={this.addUser}/>
			);
		};
}

export default User;
