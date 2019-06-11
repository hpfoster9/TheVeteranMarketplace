import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import TileCluster from './TileCluster.jsx';
import {Container, Row, Col } from 'react-bootstrap';
import UserModal from './UserModal.jsx';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      modalOpen: false
    }
  }
  deleteAll(){
    fetch(`http:/\/localhost:3001/Clear`,
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': true

        },
        method: "POST",
        body: JSON.stringify({})
    }).then(function(response){
      return response.json();
    })
    .then(function(res){
      console.log(res);
    });
  }
  post = (email, password, type, callback) => {
    let that = this;
    console.log( `Got email: ${email} and password ${password}`);
    return fetch(`https://tvm-server.herokuapp.com/${type}`,
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': true
        },
        method: "POST",
        body: JSON.stringify({"email": email, "password": password})
    })
    .then(function(response){
      return response.json();
    })
    .then(function(res){
      console.log(res);
      if(res.success === true){
        that.setState({
          loggedIn: true
        })
      }
      else{
        console.log("Incorrect credentials");
        that.setState({
          loggedIn: false
        })
      }
      callback(that.state.loggedIn);
    })
  }
  render = () =>{
     return (
       <div>
        <UserModal open={this.state.modalOpen} handleSubmit={this.post}/>
        <Container fluid={true}>
        <Row>
            <Col>
            <ReactPlayer
              className="Video"
              url={"https://www.youtube.com/watch?v=CpwxZdfjZm0"}
              config={{
                youtube: {
                  playerVars: { showinfo: 3 }
                }
              }}
              width='100%'
              height='100vh'
              style={{paddingTop: 30}}
            />
            </Col>
          </Row>
          </Container>
        <TileCluster loggedIn={this.state.loggedIn}/>
        </div>
      
    );
  }
}

export default App;
