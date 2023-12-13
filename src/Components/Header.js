import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import {toggleGptSearchView} from "../utils/gptSlice";
import {changeLanguage } from "../utils/congifSlice"

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  
  const handleSignOut=()=>{
    const auth = getAuth();
  signOut(auth).then(() => {
    // navigate("/")
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
    }

  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
            const {uid,email,displayName,photoURL} = user.uid;
            dispatch(addUser
                ({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                navigate("/browse")
        } else {
// User is signed out
            dispatch(removeUser());
            navigate("/")
        }
    });
},[])

const handleGptSearch=()=>{
  //toggle my gpt Search
  dispatch(toggleGptSearchView())
  
}

const handleLanguageChange=(e)=>{
  // console.log(e.target.value);
  dispatch(changeLanguage(e.target.value))
}



  return (
    // <div className='absolute  z-10 '>
    // <div className='flex justify-between w-screen bg-gradient-to-b from-black  '>
    // <div className='absolute   px-8 py-2 '>
    //     <img className=" w-48 ml-10  " alt="logo" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
  
    //   {showGptSearch && <select onChangeCapture={handleLanguageChange} className='ml-[870px] -my-11 -mt-14 p-1 py-1 bg-gray-900 opacity-90 rounded-md absolute text-white'>
    //     <option value="en">English</option>
    //     <option value="hindi">Hindi</option>
    //     <option value="spanish">Spanish</option>
    //   </select>}
    // </div>

    // <div><button className='absolute bg-purple-800 text-white flex ml-[1000px] mt-7 p-2 rounded-lg' onClick={handleGptSearch}>
    //   {showGptSearch ? "HomePage" : "GPT Search"}
    //   </button></div>

    // <div className=' absolute  flex ml-[1100px] mt-4 p-2'>
    // <img  className="w-12 h-12 rounded-sm " alt="userIcon" src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"/>
    // <button onClick={handleSignOut} className='font-bold text-red-600 ml-3 '>(Sign Out)</button>

    // </div>
    // </div>
    // </div>
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
         <img className="w-44 mx-auto md:mx-0" alt="logo" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
         {user && (<div className="flex p-2 justify-between">
          {showGptSearch && (<select onChangeCapture={handleLanguageChange}   className="p-2 m-2 bg-gray-900 text-white">
          <option value="en">English</option>
          <option value="hindi">Hindi</option>
          <option value="spanish">Spanish</option>
          </select>)}
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
           <img  className="hidden md:block w-12 h-12 " alt="userIcon" src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"/>
           <button onClick={handleSignOut} className="font-bold text-white ml-1 ">
            (Sign Out)
          </button>
         </div>)}
    </div>
  )
}

export default Header

