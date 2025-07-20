import { emit } from "process";
import * as Firebase from "./firebase";
import { FirebaseUser } from "./firebase";

const getUser = (): (Firebase.FirebaseUser | null) => {
    return Firebase.getUser();
}

const loginWithEmailAndPassword = async (email: string, password: string): Promise<Firebase.FirebaseUser> => {
    await Firebase.logout();
    const user = await Firebase.loginWithEmailAndPassword(email, password);
    return user;
}
const createUserWithEmailAndPassword = async (email: string, password: string): Promise<Firebase.FirebaseUser> => {
    console.log("start create user by email password")
    const user = await Firebase.createUserWithEmailAndPassword(email, password);
    console.log("finishi it")
    return user;
}

const subscribeAuthentication = async (onLogin: (user: Firebase.FirebaseUser) => void, onLogout: () => void): Promise<Firebase.FirebaseUser | null> => {
    console.log("start trigger the authentication change")
    const currentUser = await Firebase.subscribeAuthentication(user=>{
        console.log("user has logged in")
        onLogin(user);
    },()=>{
        console.log("JZ: Auth Client - User has logged out.");
        onLogout();
    })
    console.log("finishi subscribe")
    return currentUser;
}

const logout = async (): Promise<void> =>{

    await Firebase.logout();
}

export {
    getUser,
    loginWithEmailAndPassword,
    createUserWithEmailAndPassword,
    subscribeAuthentication,
    logout 
}
