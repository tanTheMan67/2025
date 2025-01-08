import Login from "./Login";
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Browse from "./Browse";
import { useEffect } from "react";
import { auth } from "./utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/UserSlice";
import { onAuthStateChanged } from "firebase/auth";

const Body = ()=>{
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/Browse",
            element:<Browse/>
        }
    ]
  )
  const dispatch = useDispatch();  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {

        if (user) {  
          const {email,displayName,uid} = user;
          dispatch(addUser({uid:uid,displayName:displayName,email:email}));
          
        } else {
         dispatch(removeUser());
       
        }
      });
  },[])
    return(
    <div>
       <RouterProvider router={appRouter}/>
    </div>
    )
};
export default Body;