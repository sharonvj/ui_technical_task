import React,{Component} from 'react'
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import store from './store'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {data:store.getState()};
    console.log(this.state)
  }
  addNewUser=()=>{
    this.props.history.push('/register')
  }
  render(){
  return (
   <div className="row">
      <div className="col-md-12 col-sm-12 col-lg-12 col-sm-12">
         <Card>
            <Card.Body>
                 <Card.Header>All Users
                   <Button variant="success" className="pull-right" size="sm" onClick={this.addNewUser}>
                     Add New User
                    </Button>
                    <Link className="pull-right dahboard-link" to='/dashboard'>Dashboard</Link>
                    </Card.Header>
                 <Card.Body>
                   <table className="table">
                   <thead>
                   <tr>
                   <th>User Name</th>
                   <th>Email</th>
                   </tr>
                   </thead>
                   <tbody>
                    {this.state.data.map((value, index) => {
                         return <tr key={index}>
                         <td>{value.username}</td>
                         <td>{value.email}</td>
                         </tr>
                    })}
                    </tbody>
                   </table>
                    {this.state.data.length == 0 && 
                        <div className="nodata">No Data</div>
                    }
                 </Card.Body>
            </Card.Body>
         </Card>
      </div>
   </div>
  )
}
}
export default Home