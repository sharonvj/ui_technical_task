import React, { Component } from 'react'
import { Form, Button ,Card, Alert} from 'react-bootstrap';
import './../account.css';
import store from './../store'
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class CreateUser extends Component {
 constructor(props) {
  super(props);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.state = {email:'',username: '',password:'',errors:{username:'',email:'',password:''},submitted:false,existingUsers:store.getState()};
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    this.setState({submitted:true})
      if(this.isValid())
        this.props.handleSubmit(this.state)
  }

  isValid = ()=>{
   if(this.state.username && this.state.password && this.state.email && !this.state.errors.username&& !this.state.errors.password&& !this.state.errors.email)
    return true;
   else
    return false;
  }

  handleChange = (event)=>{
    event.preventDefault();
    const { name,value} = event.target;
    let errors = this.state.errors;
    switch (name) {
        case 'username':
          errors.username = value.length < 5? 'User Name must be 5 characters': '';
          if(errors.username == '')
          errors.username = this.state.existingUsers.filter(x=>x.username == value).length>0?'Existing User Name':''
          break;
        case 'email': 
          errors.email = validEmailRegex.test(value)? '': 'Email is not valid!';
          if(errors.email == '')
          errors.email = this.state.existingUsers.filter(x=>x.email == value).length>0?'Existing Email Id':''
          break;
        case 'password': 
          errors.password = value.length < 8? 'Password must be 8 characters': '';
          break;
  }
  this.setState({submitted:false})
  this.setState({errors, [name]: value})
}

 render() {
    return (
        <div className="col-md-12 col-sm-12 col-lg-3 col-sm-12 custom-box">
           <Card>
           <Card.Header>Register</Card.Header>
              <Card.Body>
                 <Form  onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                       <Form.Label>Email address</Form.Label>
                       <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                       <Form.Label>User Name</Form.Label>
                       <Form.Control type="text" placeholder="User Name" name="username"  value={this.state.username} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                       <Form.Label>Password</Form.Label>
                       <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </Form.Group>
                    {this.state.errors.username!='' &&
                     <Alert variant="danger">
                     {this.state.errors.username}
                     </Alert>
                     }
                     {this.state.errors.email!= '' &&
                      <Alert variant="danger">
                        {this.state.errors.email}
                      </Alert>
                     }
                    {this.state.errors.password!= '' &&
                      <Alert variant="danger">
                        {this.state.errors.password}
                      </Alert>
                    }
                    {((this.state.password== ''||this.state.email==''|| this.state.password=='') && this.state.submitted) &&
                      <Alert variant="danger">
                        Please make sure all input are entered
                      </Alert>
                    }
                    <Button variant="primary" type="submit">
                       Register
                    </Button>
                 </Form>
              </Card.Body>
           </Card>
        </div>
    )
  }
}

export default CreateUser;