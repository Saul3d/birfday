import firebase from 'firebase/app';
import Auth from './components/auth/auth';
import apiKeys from './helpers/apiKeys.json';
import myNavbar from './components/myNavbar/myNavbar';

import authData from './helpers/data/authData';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  myNavbar.navbarEvents();
  authData.checkLoginStatus();
  Auth.authStringBuilder();
};

init();
