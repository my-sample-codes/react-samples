import React, { Component } from 'react';
import LandingPage from './../../layouts/landing-page';
import './../../App.css';
import MainBoard from './../main-board/mainBoard';
class DashboardLand extends Component {
  render() {
    return (
      <div className="Main">
        <MainBoard />
      </div>
    );
  }
}
export default DashboardLand;
