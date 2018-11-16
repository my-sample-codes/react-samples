

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import { Select, Card, Input, Button, Table, Divider, Tag, Steps, Breadcrumb } from 'antd';
import DashboardLand from './pages/dashboard-landing/DashboardLand';
import BackgroundImg from './../src/pages/login/loginimg.png';
import 'antd/dist/antd.css';
import './../src/pages/login/index.css';
import './../src/pages/login/Login.css';

class App extends Component {

     constructor(props)
     {
         super(props);

         this.state={
             username:'',
             Password:'',
             validated:false
         }
      this.signIn=this.signIn.bind(this);
      this.onUserChange=this.onUserChange.bind(this);
     }

     signIn(){
      
        this.setState({validated:true});
        console.log("in sign in",this.state.validated);
        /*  if(this.state.username===null || this.state.Password==null)
         {
             alert("Crediential required");
         }else if(this.state.username==="recon@opus.com" || this.state.Password=="1234"){
           this.setState({validated:true});
         }else
         {  
           alert("Username/Password Incorrect");
         } */
     }
     onUserChange=(event,value)=>
     {  console.log(value);
        this.setState({username:value});
     } 
    render() {
        const isValidated=this.state.validated;
        return (
             
              <div className="Main" >
                  {!isValidated?(<div>
                      <img className='bg' src={BackgroundImg} />
                      <Card title="Login" style={{ width: '350px', background: 'light grey', float: 'right' }} >
                          <br />
                          <p> <Input rows={1} placeholder="Enter Username" /></p><br /><br />
                          <p> <Input rows={1} placeholder="Enter Password" /></p><br /><br />
                          <center><Button type='primary' style={{ width: '200px' }} onClick={this.signIn}>Sign In</Button></center>
                      </Card>
                      </div>
                  ):(<div><DashboardLand/></div>)}
               
                  
            </div>
        );
    }
}
export default App;
