import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import * as actions from '../reducers/actions';
// import Footer from './parts/footer';
// import NavBar from './parts/navBar';
import CustomizedInputs from './parts/text'
import InputAdornments from './parts/passwordText'
// import { Link } from 'react-router-dom';
import ContainedButtons from './parts/button'
import Notifcation from './parts/notificationButton'

export default class App extends Component {

  login = async () => {

  }

  render() {
    return (
      <div className='mainMenu'>
        <div id='title'>
          WWOutpost 2
        </div>
        <div id='mainMenuCenter'>
          <div id='login'>
            <div><CustomizedInputs ids="usernameInput" label="UserName" /></div>
            <div>{InputAdornments}</div>
            <div id='LoginBtn' onClick={() => this.login()}>
              {ContainedButtons('Login')}
            </div>
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