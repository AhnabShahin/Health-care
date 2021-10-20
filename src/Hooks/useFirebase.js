import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,createUserWithEmailAndPassword  } from "firebase/auth";
import initializeAuthentication from './../Firebase/firebase.initialization';

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoding,setIsLoding]=useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            
            }
            setIsLoding(false);
        });
    }, [])
    return {
        isLoding,
        setIsLoding,
        auth,
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;