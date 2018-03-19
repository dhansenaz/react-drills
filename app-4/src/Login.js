import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        };
        //bind here
       
     }    
     handleUserName(name){
         this.setState({username: name})

     }
     HandlePasswordChange(pass){
         this.setState({password:pass})

     }
     handleLogin(){
         alert(`Username: $`)

     }
     render(){
        return(
            <div>
            <input onChange ={ (e ) => this.handleUsernameChange(e.target.value)} type='text'/>
            <input onChange ={ (e) => this.HandlePasswordChange(e.target.value)} type="text" />
            <button onClick = {this.handleLogin}>Login</button>
            </div>
            

        )
    }
}
export default Login