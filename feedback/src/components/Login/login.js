// src/Login.js
import React, { useState, useContext } from 'react';
import { Navigate } from "react-router-dom";
import firebaseConfig from "../config";
import { AuthContext } from "../Auth";
import auth from "../config"


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [redirectToError, setRedirectToError] = useState(false);

  const handleLogin = async (e) => {

    // e.preventDefault();

    // try {
    //     const userCredential = await auth.signInWithEmailAndPassword(email, password);
    //     const user = userCredential.user;
    //   if (email.endsWith('@moveinsync.com')) {
    //     await auth().setCustomUserClaims(user.uid, { role: 'admin' });
    //     } else {
    //     await auth().setCustomUserClaims(user.uid, { role: 'user' });
    //     }

    //     // Redirect based on the user's role
    //     if (user.role === 'admin') {
    //         return <Navigate to="/admin" />;
    //     } else {
    //         return <Navigate to="/user" />;
    //     }
    // } catch (error) {
    //   console.error('Error logging in:', error.message);
    // }
    e.preventDefault();
    const { email, password } = e.target.elements;
    setEmail(email.value);
    firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        // Authentication successful, redirect to a new page
        setRedirectToError(false);
        // return <Navigate to="/Otp" /> 
        console.log(email.value);
        
        // userCredential.user.sendEmailVerification();
      })
      .catch((error) => {
        // Handle authentication error
        console.error(error);
        setRedirectToError(true); // Set the redirect state to true
        setError(error.message); // Set the error message state
      });
  };
  const { currentUser } = useContext(AuthContext);
  if (redirectToError) {
    return <Navigate to="/admin" />;
  } 
  if(currentUser) {
    if (email.endsWith('@moveinsync.com')) {
        return <Navigate to="/admin" />;
    }
    else{
        return <Navigate to="/user" />;
    }
}
  
  return (
    <div>
      <h2>Login</h2>
      <div className="row">
          <form className="formarea"onSubmit={handleLogin}>
            <input className="formfill1" type="email" name="email" placeholder="Login ID" />
            <input className="formfill2" type="password" name="password" placeholder="Password" />
            <div className="formtext">*Contact management in case of forgotten password</div>
            <button className="formbtn"type="submit">Submit</button>
          </form>
        </div>
    </div>
  );
};

export default Login;
