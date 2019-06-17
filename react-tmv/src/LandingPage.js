import React, { Component } from 'react';
import './LandingPage.css';

class LandingPage extends Component {
  constructor(props){
    super(props);   
    this.state = {
      title: "The Veteran Marketplace",
      launchDate: "November 2019",
      mission: "To connect Veteran brands with consumers and consumers with Veteran brands",
      vision: "To create an innovative online to offline experience that showcases Veteran brands and facilitates the creation of direct relationships with consumers",
      solution: "We are bridging communities and... ",
      email: "jd@veteranmarketplace.org"    	
    }
  }
  render(){
    const {title, launchDate, mission, vision, solution, email} = this.state;
  	return(
      <div className="mainContent" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div className="titleContainer">
          <p className="title">{title}</p>
          <p className="launch">{`Launching ${launchDate}`}</p>
        </div>
        <div className="landingContent" style={{flex: 4}}>
          <p className="content"><span className="bold">Mission: </span>{mission}</p>
          <p className="content"><span className="bold">Vision: </span>{vision}</p>
          <p className="content"><span className="bold">Our Solution: </span>{solution}</p>
          <p className="content center">Learn more by emailing us at: <a href={`mailto:${email}`}>{email}</a></p>
        </div>
      </div>
  	);
  }
}
export default LandingPage;