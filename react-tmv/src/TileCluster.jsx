import React, {Component} from 'react';
import Tile from './Tile';
import {Container, Row, Col} from 'react-bootstrap';

class TileCluster extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	    	tileTups: [
          {
            name: "BRCC",
            info: "BRCC info",
            code: "code1",
            src: "brcc.jpg"
          },
          {
            name: "Cognitoys",
            info: "Cognitoys info",
            code: "code2",
            src: "cognitoys.jpg"
          },
          {
            name: "Combat Flip Flops",
            info: "Combat Flip Flops info",
            code: "code3",
            src: "combat_flipflops.jpg"
          },
          {
            name: "Counterstrike Coffee",
            info: "Counterstrike coffee info",
            code: "code4",
            src: "counterstrike_coffee.png"
          },
          {
            name: "Flags of Valor",
            info: "Flags of Valor info",
            code: "code5",
            src: "fov.png"
          },
          {
            name: "Frog Fuel",
            info: "Frog fuel info",
            code: "code6",
            src: "frog_fuel.png"
          },
          {
            name: "Nine Line",
            info: "Nine Line info",
            code: "code7",
            src: "nine_line.jpg"
          },
          {
            name: "Rumi Spice",
            info: "Rumi Spice info",
            code: "code8",
            src: "rumi_spice.jpg"
          },
          {
            name: "Turbo Pup",
            info: "Turbo Pup info",
            code: "code9",
            src: "turbopup.jpg"
          },

        ],
	    }
  	}
  	renderRows = () => {
  		const {tileTups} = this.state
  		return(
  			tileTups.map((tile, i) => {
	  			if(i%3 === 0){
	  				console.log(i);
	  				return(this.renderRow(tileTups.slice(i,(i+2 < tileTups.length) ? i+3 : (i+1 < tileTups.length) ? i+2 : i+1),i))
	  			}
	  			else{
	  				return null
	  			}
	  		})
  		)
  			
  	}
  	renderRow = (rowData, index) => {
  		return(
  			<Row key={index} style={{paddingTop: '75px'}}>
  				{
  					rowData.map((tile, i)=>{
  						return <Col key={i}><Tile key={i} name={tile.name} info={tile.info} src={tile.src} code={(this.props.loggedIn) ? tile.code : "Log in to get discounts!"}/></Col>
  					})
  				}
  			</Row>
  		)
  	}
  	render = () => {
  		return(
  			<Container fluid={true}>
  			{this.renderRows()}
  			</Container>
  		)
  	}
}
export default TileCluster;