import React, {Component} from 'react';
import AddUser from './AddUser';

class User extends Component {

		state = {
			users: []
		}

		addUser = () => {
			this.setState( {users: {a: 1}} );
			console.log(this.state.users);
		}

		render(){
			return (
				<AddUser addUser={this.addUser}/>
			);
		};
}

export default User;
