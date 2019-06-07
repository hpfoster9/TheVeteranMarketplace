import React, {Component} from 'react';

class Tile extends Component {
	render = () => {
		return(
			<div>
				<img src={require('./veteran.jpg')} width='100%' alt={this.props.href}/>
				<h3>{this.props.text}</h3>
			</div>
		)
	}

}

export default Tile;