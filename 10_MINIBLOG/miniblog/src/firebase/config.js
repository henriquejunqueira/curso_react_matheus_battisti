import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAYvCl3jhSofgx2rlBs09ey_91b72__f18',
  authDomain: 'miniblog-cc382.firebaseapp.com',
  projectId: 'miniblog-cc382',
  storageBucket: '193119714124',
  appId: '1:193119714124:web:0932ebcbd52fe00ed86de9',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
