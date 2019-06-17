import React, { Component } from 'react';

class Careers extends Component {
  constructor(props){
    super(props);
    this.state = {
    	mainText: "Check back soon to learn all about our exiting new veteran career platform in collaboration with flow",
    	contactText: "Looking to hire vets? Email us at test@gmail.com"
    }
  }
  render(){
  	return(
  		<div>
	  			
	  			<h1>
	  				{this.state.mainText}
	  			</h1>
	  			<h3>
	  				{this.state.contactText}
	  			</h3>
  		</div>
  	);
  }
}
export default Careers;