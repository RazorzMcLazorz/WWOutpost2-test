import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actions from '../reducers/actions';
// import Footer from './parts/footer';
// import NavBar from './parts/navBar';
import { Link } from 'react-router-dom';
import ContainedButtons from './parts/button'
import Notifcation from './parts/notificationButton'

export default class App extends Component {
  render() {
    return (
      <div className='mainMenu'>
        <div id='title'>
          WWOutpost 2
        </div>
        <div id='mainMenuCenter'>
          <div id='mainMenuLogin'>
            {ContainedButtons('Login')}
          </div>
          <div id='welcome'>
            Welcome User
          </div>
          <div id='newGamebtn'>
            {ContainedButtons('New Game')}
          </div>
          <div id='continueGamebtn'>
            {ContainedButtons('Continue Game')}
            <div id='gamesReadyForYou'>
              {Notifcation(3)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}