/* eslint-disable no-unused-vars */
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import initializeAppAuth from "../../firebase/firebase.initialize";

initializeAppAuth()
const googleProvider = new GoogleAuthProvider();

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [users, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogIn, setLogIn] = useState(false);
    const auth = getAuth();

    const clickEvenHandeler = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                const userDetails = {
                    email: user.email,
                    photoUrl: user.photoURL,
                    name: user.displayName
                }
                setLoggedInUser(userDetails);
                setUser(user)
                history.replace(from);
            })
    }
    const submitEventHandeler = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('pasword must need 6 cherecter')
            return;
        }
        isLogIn ? signInHnadaler(email, password) : signUpHandaler(email, password);
    }
    const toggleHandaler = e => {
        setLogIn(e.target.checked)
    }
    const emailHnadaler = e => {
        setEmail(e.target.value)
    }
    const passwordHnadaler = e => {
        setPassword(e.target.value)
    }
    const signInHnadaler = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                const userDetails = {
                    email: user.email,
                    photoUrl: user.photoURL,
                    name: user.displayName
                }
                setLoggedInUser(userDetails);
                setError('')
                history.replace(from);
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const signUpHandaler = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                const userDetails = {
                    email: user.email,
                    photoUrl: user.photoURL,
                    name: user.displayName
                }
                setLoggedInUser(userDetails);
                setError('')
                history.replace(from);
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {
            const userDetails = {
                name: '',
                email: '',
                photo: ''
            }
            setLoggedInUser(userDetails)
            history.replace(from);
        }).catch((error) => {
            setError(error)
        });
    }


    return (
        <div className='w-50 mx-auto text-center py-5'>
            <form onSubmit={submitEventHandeler}>
                <h3 className='text-info py-3'>Please {isLogIn ? 'Log In' : 'Regiter'}</h3>
                <input className="form-control py-3" placeholder="Enter Your Email" onBlur={emailHnadaler} type="email" required /><br />
                <input className="form-control py-3" placeholder="Enter Your Password" onBlur={passwordHnadaler} type="password" required />
                <br />
                <div>{error}</div>
                <br />
                <label htmlFor="register">Already Register ? </label>
                <input onChange={toggleHandaler} type="checkbox" name="" id="" />
                <br />
                <input className='btn btn-info text-white mt-3' type="Submit" defaultValue={isLogIn ? 'Log In' : 'Regiter'} />


            </form>

            <br />
            {
                loggedInUser.email ?

                    <button className='btn btn-warning text-white mt-3' onClick={handleSignOut}>Google Sign Out</button> :
                    <button className='btn btn-info text-white mt-3' onClick={clickEvenHandeler}>Google Sign In</button>
            }

        </div>
    );
}

export default Login;
