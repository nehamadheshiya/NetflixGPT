import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, useNavigate } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { useDispatch } from 'react-redux';
// import {addUser, removeUser} from "../utils/userSlice"

const Body = () => {


    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
    ])

  return (
    <div>
        <RouterProvider router={appRouter}/>
            {/* <Login/>
            <Browser/> */}
    </div>
  )
}

export default Body