import firebase from 'firebase/app';
import 'firebase/database';

import keys from './keys/firebase-config.json';

const config = {
    apiKey: keys.apiKey,
    authDomain: keys.authDomain,
    databaseURL: keys.databaseURL,
    projectId: keys.projectId,
    storageBucket: keys.storageBucket,
    messagingSenderId: keys.messagingSenderId
};

firebase.initializeApp(config);

export default firebase;