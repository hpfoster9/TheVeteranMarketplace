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
		this.setState({
			hover: true
		})
	}
	mouseExit = (e) => {
		this.setState({
			hover: false
		})
	}

	render = () => {
		return(
			<>
				<div className="imageWrapper">
					<img className={this.state.hover?"blur img":"img"} src={require(`./img/combat_flipflops.jpg`)} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseExit}  alt={this.props.src}/>
					<h5 className={this.state.hover?"textOverlay":"textOverlay hidden"} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseExit}>{`${this.props.name}: ${this.props.info}`}</h5>
				</div>
				<h4 className="discount">{this.props.code}</h4>
			</>
		)
	}

}

export default Tile;