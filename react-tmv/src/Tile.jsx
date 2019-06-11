import React, {Component} from 'react';
import './Tile.css';

class Tile extends Component {
	constructor(props){
		super(props);
		this.state = {
			hover: false
		}
	}

	mouseEnter = (e) => {
		console.log("entered")
		this.setState({
			hover: true
		})
	}
	mouseExit = (e) => {
		console.log("exited")
		this.setState({
			hover: false
		})
	}

	render = () => {
		return(
			<>
				<div className="imageWrapper">
					<img className={this.state.hover?"blur img":"img"} src={require('./veteran.jpg')} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseExit}  alt={this.props.href}/>
					<h5 className={this.state.hover?"textOverlay":"textOverlay hidden"} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseExit}>Test test test This is a test of the text</h5>
				</div>
				<h4 className="discount">{this.props.text}</h4>
			</>
		)
	}

}

export default Tile;