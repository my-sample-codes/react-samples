import React, { Component } from 'react';
import LandingPage from './layouts/landing-page';
import MainDashboard from './pages/main-board/mainBoard';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Main">
        <MainDashboard />
      </div>
    );
  }
}
export default App;
