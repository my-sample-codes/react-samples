import React, { Component } from 'react';
import LandingPage from './layouts/landing-page';

import './App.css';
import Eform from './pages/edit_form/WrappedViewForm';
import RegistrationForm from './pages/edit_form/editform';
import WrappedViewForm from './pages/edit_form/WrappedViewForm';

class App extends Component {
  render() {
    return (
      <div className="Main">
        <LandingPage />
        {/* <Eform/> */}
        <RegistrationForm/>
        <WrappedViewForm/>
      </div>
    );
  }
}
export default App;
