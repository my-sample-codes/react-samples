import React, { Component } from 'react';
import './App.css';
import LayoutDesign from './components/layout/LayoutDesign';
import WrappedLoginForm from './components/login/LoginForm';

class App extends Component {
  render() {
    return (
      <div className="Main">
        {/* <LayoutDesign /> */}
        <WrappedLoginForm />
      </div>
    );
  }
}

export default App;