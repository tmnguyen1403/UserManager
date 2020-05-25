import React, {Component} from 'react';

class AddUser extends Component{
	state = {
		firstName: '',
		lastName: '',
		userName: '',
	}

	handleChange = event => {
			event.preventDefault();
			const key = event.target.id;
			this.setState({[key]: event.target.value});
	}

	handleClick = event => {
		event.preventDefault();
		this.props.addUser();
	}

	isEmpty = () => {
		const {firstName, lastName, userName} = this.state;
		return (
			firstName === '' ||
			lastName === '' ||
			userName === ''
		);
	}



	render (){
		return (

			<form>
				<h2>Add New User</h2>
				<label htmlFor="firstName">First Name</label>
				<input type="text"
					value={this.state.firstName}
					placeholder="First Name"
					onChange={this.handleChange}
					name="firstName"
					id="firstName"
				/>
				<label htmlFor="lastName">Last Name</label>
				<input type="text"
					value={this.state.lastName}
					placeholder="Last Name"
					onChange={this.handleChange}
					name="lastName"
					id="lastName"
				/>
				<label htmlFor="userName">User Name</label>
				<input type="text"
					value={this.state.userName}
					placeholder="User Name"
					onChange={this.handleChange}
					name="userName"
					id="userName"
				/>
				<button onClick={this.handleClick} disabled={this.isEmpty()}>
					Add User
				</button>
			</form>

		);
	}
};

export default AddUser;
