import React, {Component} from 'react';
import PropTypes from 'prop-types';

class User extends Component {
	static propTypes = {
		userName: PropTypes.string.isRequired,
		info: PropTypes.object.isRequired
	}

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
					<li key={userName}>User Name: {userName}</li>
					<li key={userName+"1"}>Number of played games: {gameInfo}</li>
				</ul>
				<button className="smallButton" onClick={this.toggleHide}>
					{hideButtonMsg}
				</button>
			</li>
		);
	}
}

export default User;
