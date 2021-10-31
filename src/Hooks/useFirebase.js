import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "../Firebase/firebaseInitialize";
firebaseInitialization();

const useFirebase = () => {
    const [user, setUser] = useState();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user)
                console.log(result.user)
            })
    };

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        })
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        });
    }, [])


    return {
        user,
        signInWithGoogle,
        logOut

    }
};
export default useFirebase