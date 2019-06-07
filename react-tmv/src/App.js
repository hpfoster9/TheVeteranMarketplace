import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import TileCluster from './TileCluster.jsx';
import {Container, Row, Col} from 'react-bootstrap';

class App extends Component {
  render = () =>{
     return (
       <div>
        <Container>
        <Row>
            <Col>
            <ReactPlayer
              className="Video"
              url={"https://www.youtube.com/watch?v=KYM_hHg0C9s"}
              config={{
                youtube: {
                  playerVars: { showinfo: 3 }
                }
              }}
              width='100%'
              height='90vh'
            />
            </Col>
          </Row>
          </Container>
        <TileCluster/>
        </div>
      
    );
  }
}

export default App;
