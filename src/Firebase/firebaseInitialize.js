
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInitialization = () => {
    initializeApp(firebaseConfig);
}
export default firebaseInitialization;