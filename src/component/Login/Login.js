import React, { useContext, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css'

import key from '../../images/login.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { adminContext, emailContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);

}
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(emailContext);
    let history = useHistory();
    let location = useLocation();

    const [ admin,setAdmin] = useContext(adminContext)


        useEffect(() => {
            fetch(`https://secure-sea-65701.herokuapp.com/isAdmin`)
                .then(res => res.json())
                .then(data => setAdmin(data))
                
        }, [admin, setAdmin])

        

  



    let { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {

                var credential = result.credential;


                var token = credential.accessToken;
                console.log(token);

                var user = result.user;
                // console.log(user.email);
                localStorage.setItem('email', user.email)
                setLoggedInUser(user.email)
                // handleLoggedIn();
                console.log(loggedInUser);
                history.replace(from);
                // console.log(`admin`, admin);


            }).catch((error) => {

                var errorCode = error.code;
                var errorMessage = error.message;

                var email = error.email;

                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);

            });
    }
    return (
        <div className="row text-center">

            <div className="col-md-4">

                <button onClick={handleGoogleSignIn} className="button login"><FontAwesomeIcon icon={faGoogle} /> Google Sign In</button>
            </div>
            <div className="col-md-8">
                <img className="img-fluid" style={{ height: '800px', width: '600px' }} src={key} alt="" />
            </div>
        </div>


    );
};

export default Login;