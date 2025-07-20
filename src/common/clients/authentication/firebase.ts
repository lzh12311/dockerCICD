import * as Auth from "firebase/auth";

import firebase from "../external/firebase";

type FirebaseUser = Auth.User;

const auth = Auth.getAuth(firebase);
let unsubscribe: Auth.Unsubscribe | null;


const getUser = (): FirebaseUser | null => {
    return auth.currentUser;
};

const createUserWithEmailAndPassword = async (email: string, password: string): Promise<FirebaseUser> => {
    try {
        return ((await Auth.createUserWithEmailAndPassword(auth, email, password)).user);
    } catch (error) {
        throw new Error(getRealMessageFromFirebaseError(error));
    }
}

const loginWithEmailAndPassword = async (email: string, password: string): Promise<FirebaseUser> => {
    try {
        return (await Auth.signInWithEmailAndPassword(auth, email, password)).user;
    } catch (error) {
        throw new Error(getRealMessageFromFirebaseError(error));
    }
}

const logout = async (): Promise<void> => {
    return Auth.signOut(auth);
}

const subscribeAuthentication = async (onLogin: (user: FirebaseUser) => void, onLogout: () => void): Promise<FirebaseUser | null> => {
    let isInitialized = false;
    return new Promise((resolve) => {
        if (unsubscribe) {
            unsubscribe();
        }
        unsubscribe = Auth.onAuthStateChanged(auth, user => {
            if (isInitialized) {
                if (user) {
                    onLogin(user);
                } else {
                    onLogout();
                }
            } else {
                isInitialized = true;
                resolve(user);
            }
        })
    })

}


/**
 * Get the real error message from Firebase.
 * @param error The error object from Firebase.
 * @param defaultMessage The default error message to return if no specific error message found.
 * @returns The real error message from Firebase.
 * @private
 */
const getRealMessageFromFirebaseError = (error: any, defaultMessage?: string): string => {
    switch (error.code) {
        default:
            return defaultMessage ?? error.message;
    }
};

export {
    type FirebaseUser,
    getUser,
    loginWithEmailAndPassword,
    logout,
    createUserWithEmailAndPassword,
    subscribeAuthentication,

};

