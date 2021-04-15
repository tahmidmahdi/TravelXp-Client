import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css'
import africa from '../../images/africa.jpg'
import key from '../../images/login.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { emailContext } from '../../App';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);

}
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(emailContext);


    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {

                var credential = result.credential;


                var token = credential.accessToken;

                var user = result.user;
                // console.log(user.email);
                localStorage.setItem('email', user.email)
                setLoggedInUser(user.email)
                console.log(loggedInUser);

            }).catch((error) => {

                var errorCode = error.code;
                var errorMessage = error.message;

                var email = error.email;

                var credential = error.credential;

            });
    }
    return (
        <div className="row text-center">
           
            <div className="col-md-4">
                
                <button onClick={handleGoogleSignIn} className="button login"><FontAwesomeIcon icon={faGoogle}/> Google Sign In</button>
            </div>
            <div className="col-md-8">
                <img className="img-fluid" style={{ height: '800px', width: '600px'}}  src={key} alt="" />
            </div>
        </div>


    );
};

export default Login;