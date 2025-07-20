import { initializeApp } from "firebase/app";

import firebaseConfig from "../../configs/firebase";

/**
 * The initialized firebase Application.
 */
const firebase = initializeApp(firebaseConfig);

export default firebase;