import React, { Component } from 'react';
import LandingPage from './layouts/landing-page';

import './App.css';
import Eform from './pages/edit_form/form';
import RegistrationForm from './pages/edit_form/editform';

class App extends Component {
  render() {
    return (
      <div className="Main">
        <LandingPage />
        {/* <Eform/> */}
        <RegistrationForm/>
      </div>
    );
  }
}
export default App;
