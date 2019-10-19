import React,{Component} from 'react'
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import store from './store'
class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {usersCount:store.getState().length};
  }
  render(){
  	return(
  	<div className="row">
      <div className="col-md-12 col-sm-12 col-lg-3 col-sm-12 custom-box">
         <Card>
            <Card.Body>
                 <Card.Header>Number of Users
                 </Card.Header>
                 <Card.Body>
                  <h1><Link to="/home">{this.state.usersCount}</Link></h1>
                 </Card.Body>
            </Card.Body>
         </Card>
      </div>
   </div>

  		)
  }
}
export default Dashboard;