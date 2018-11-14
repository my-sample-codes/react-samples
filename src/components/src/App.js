import React, { Component } from 'react';
import LandingPage from './layouts/landing-page';

import './App.css';
import Navbaronly from './components/navbaronly/navbaronly';

class App extends Component {
  render() {
    return (
      <div className="Main">
        
        {/* <Navbaronly/> */}
        
        <LandingPage />
      </div>
    );
  }
}
export default App;
