import React, { Component } from 'react';
import './App.css';
import LayoutDesign from './components/layout/LayoutDesign';
import WrappedLoginForm from './components/login/LoginForm';

class App extends Component {
  render() {
    return (
      <div className="Main">
      //below one line comment for dashborad design using AntD
        {/* <LayoutDesign /> */}  
      //below line for login design using AntD
        <WrappedLoginForm />
      </div>
    );
  }
}

export default App;
