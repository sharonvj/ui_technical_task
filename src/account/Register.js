import React,{Component} from 'react'
import CreateUser from './elements/CreateUser'
import store from './store'

class Register extends Component {
  signIn = (cred)=>{
     store.dispatch({ type: 'ADD',data:cred })
     this.props.history.push('/home')
  }
  render(){
  return (
    <div className="App">
     <div className="row">
        <CreateUser handleSubmit={this.signIn}/>
     </div>
    </div>
    )
}
}
export default Register;