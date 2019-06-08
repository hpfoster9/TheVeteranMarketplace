import React, {Component} from 'react';

class Tile extends Component {
	render = () => {
		return(
			<div style={{backgroundColor: 'blue'}}>
				<img src={require('./veteran.jpg')} style={{width: '100%', borderColor: 'red', borderWidth: 3, padding: 5}} alt={this.props.href}/>
				<h3 style={{width: '100%', textAlign: 'center', backgroundColor:'red'}} >{this.props.text}</h3>
			</div>
		)
	}

}

export default Tile;