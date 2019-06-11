import React, {Component} from 'react';
import Tile from './Tile';
import {Container, Row, Col} from 'react-bootstrap';

class TileCluster extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	    	tileTups: [["Czech it out1","Discount code: 1"],["Czech it out2","Discount code: 2"],["Czech it out3","Discount code: 3"],["Czech it out4","Discount code: 4"],["Czech it out5","Discount code: 5"],["Czech it out6","Discount code: 6"],["Czech it out7","Discount code: 7"],["Czech it out8","Discount code: 8"],["Czech it out9","Discount code: 9"]],
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
  						return <Col key={i}><Tile key={i} href={tile[0]} text={(this.props.loggedIn) ? tile[1] : "Log in to get discounts!"}/></Col>
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