import React, {Component} from 'react';

class User extends Component {

	state = {
		hideGames: false,
	}

	toggleHide = () => {
		this.setState(
			{
				hideGames: !this.state.hideGames
			}
		);
	}

	render() {
		const {userName, info} = this.props;
		const gameInfo = this.state.hideGames ? "***" : info.games;
		const hideButtonMsg = this.state.hideGames ?
			"Show the Number of Games Played" :
			"Hide the Number of Games Played";

		return (
			<li key={userName}>
				<ul>
					<li>User Name: {userName}</li>
					<li>Number of played games: {gameInfo}</li>
				</ul>
				<button onClick={this.toggleHide}>
					{hideButtonMsg}
				</button>
			</li>
		);
	}
}

export default User;
