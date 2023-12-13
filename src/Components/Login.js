import React from 'react'
import Header from './Header';
import { useState, } from 'react';
import {checkValidData} from "../utils/validate";
import { useRef } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {  updateProfile } from "firebase/auth";
import firebase from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';



const Login = () => {
    const[isSignForm,setIsSignForm]=useState(true);
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const dispatch=useDispatch();

    const[errorMessage,setErrorMessage]=useState(null)
    const navigate=useNavigate()

    const toggleSignInForm=()=>{
        setIsSignForm(!isSignForm)
    }
    const handleButtonClick = () => {
        // ...
      
        // validate data by regex
        const msg = checkValidData(email.current?.value, password.current?.value, name.current?.value);
        setErrorMessage(msg);
        if (msg) return;
      
        // sign in or sign up
        if (!isSignForm) {
          // signup
          const auth = getAuth();
          createUserWithEmailAndPassword(auth, email.current?.value, password.current?.value)
            .then((userCredential) => {
              const user = userCredential.user;
              const auth = getAuth();
              updateProfile(user, {
                displayName: name.current?.value,
                photoURL: "https://lh3.googleusercontent.com/-JVpfmGGJuO8/AAAAAAAAAAI/AAAAAAAAAME/sMJVq9F8gec/photo.jpg",
              }).then(() => {
                // Profile updated! auth for new user
                const {uid,email,displayName,photoURL} = auth.currentUser;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))

              }).catch((error) => {
                // An error occurred
                // ...
              });
      
             
            //   navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
            });
        } else {
          // Signed in
          const auth = getAuth();
          signInWithEmailAndPassword(auth, email.current?.value, password.current?.value)
            .then((userCredential) => {
              const user = userCredential.user;
            //   console.log(user);
            //   navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
            });
        }
      };
      


  return (
    <div>
        <Header/>
        <div className='absolute '>
         <img className="h-screen object-cover w-screen"alt="bg-img"  src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
        </div>

        <form onSubmit={(e)=>{
            e.preventDefault()
        }} className='bg-black h-[430px] absolute p-12 w-full md:w-3/12 my-28 mx-auto text-white right-0 left-0 bg-opacity-80 rounded-md shadow-2xl'>
            <h1 className='font-bold p-2  text-2xl mb-4'> 
                {isSignForm?"Sign in":"Sign Up"}
            </h1>

            {!isSignForm && <input className='m-2 mt-1 p-2 w-full bg-gray-700 text-white rounded-sm shadow-md' type="text" placeholder='Full name'/>}

            <input ref={email} className='m-2 mt-1 p-2 w-full bg-gray-700 text-white rounded-sm shadow-md' type="text" placeholder='Email or phone number'/>

            <input ref={password}  className='m-2 mt-1 p-2 w-full text-white bg-gray-700 rounded-sm shadow-md' type="password" placeholder="password"/>

            <p className='text-red-500 text-lg font-semibold p-2'>{errorMessage}</p>

            <button className='m-2 p-2 bg-red-700 w-full rounded-md mt-6' 
            onClick={handleButtonClick}
            >
            {isSignForm?"Sign in":"Sign Up"}
            </button>
            <p className='m-1 py-4 mt-6 cursor-pointer' onClick={toggleSignInForm}>
            {isSignForm?"New to Netflix? Sign Up Now":"Already registered?Sign In Now"}
                </p>
            <p className='m-1 font-thin text-xs'>Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.</p>
        </form>
    </div>
  )
}

export default Login