import firebaseConfig from "./Firebase.Config";
import { initializeApp } from "firebase/app";

const initializeAuthentication = ()=>{
    initializeApp(firebaseConfig)
}
export default initializeAuthentication;