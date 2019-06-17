import React, {Component} from 'react';
import {Modal, Button, Form, Alert, Container, Row, Col} from 'react-bootstrap';
import ReactDOM from 'react-dom'
import './Tile.css';


class UserModal extends Component {
	constructor(props){
		super(props);
		this.state = {
			modalOpen: this.props.open,
			type: "login",
			typeTranslate: {login: "Log In", signup: "Sign Up"},
			error: null
		}
	}
	toggleModal = () => {
		this.setState({
			modalOpen: !this.state.modalOpen,
			error: null,
			type: 'login'
		});
	}
	toggleType = () => {
		this.setState({
			type: (this.state.type === "login") ? "signup" : "login",
			error: null

		})
	}
	submit = (event) => {
		console.log("event fired!");
	    event.preventDefault();
	    console.log(this.email.value);
	    this.props.handleSubmit(this.email.value, this.password.value, this.state.type, this.submitCallback)
	    
	}
	submitCallback = (success) => {
		if(success){
	    	this.toggleModal();
	    }
	    else{
	    	this.setState({
	    		error: this.state.type==="login" ? "Incorrect credentials" : "Email already registered"
	    	})
	    }
	}

	render = () => {
		return(
			<>	
			<Button variant="outline-primary" size={"md"} onClick={this.toggleModal} style={{position: 'absolute', right: 15, top: 10, zIndex: 3}}>{this.props.loggedIn ? "Logged In" : "Log In"}</Button>
			<Modal show={this.state.modalOpen} onHide={this.toggleModal}>
	          <Modal.Header closeButton>
	            <Modal.Title>{this.state.typeTranslate[this.state.type]}</Modal.Title>
	          </Modal.Header>
	          <Form onSubmit={e => this.submit(e)}>
	          	<Modal.Body>
	          	  <Alert className={this.state.error === null ? "hidden" : ""} variant ={"danger"}>
				    {this.state.error}
				  </Alert>
				  <Form.Group controlId="email_group" >
				    <Form.Label>Email</Form.Label>
				    <Form.Control ref={(input) => this.email = input} type="email" placeholder="name@example.com" />
				  </Form.Group>
				  <Form.Group controlId="password_group">
				    <Form.Label>Password</Form.Label>
				    <Form.Control ref={(input) => this.password = input} type="password" placeholder="" />
				  </Form.Group>
				
	          </Modal.Body>
	          <Modal.Footer>
	          	<h5 onClick={this.toggleType} className="login_signup">{(this.state.type === "login") ? "Don't have an account? Sign up" : "Already have an account? Log in"}</h5>
	            <Button variant="secondary" onClick={this.toggleModal}>
	              Close
	            </Button>
	            <Button type="submit" variant="primary">
	              {this.state.typeTranslate[this.state.type]}
	            </Button>
	          </Modal.Footer>
	          </Form>
	          
	        </Modal>
	        </>
        );
	}
}
export default UserModal;