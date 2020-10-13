import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyCfvfKOsMCRI76WNci03TazggzQsHJl8QY',
  authDomain: 'todoist-clone-b732b.firebaseapp.com',
  databaseURL: 'https://todoist-clone-b732b.firebaseio.com',
  projectId: 'todoist-clone-b732b',
  storageBucket: 'todoist-clone-b732b.appspot.com',
  messagingSenderId: '132664947631',
  appId: '1:132664947631:web:7bba9b486bab944110b55a',
  measurementId: 'G-WHYRKG7XF1',
});

export { firebaseConfig as firebase };
