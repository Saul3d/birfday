import firebase from 'firebase/app';
import Auth from './components/auth/auth';
import Birf from './components/birfday/birday';
import apiKeys from './helpers/apiKeys.json';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  Auth.authStringBuilder();
  Birf.birfdayStringBuilder();
};

init();
