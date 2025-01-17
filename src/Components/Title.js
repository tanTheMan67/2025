import { auth } from "./utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/UserSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Title=()=>{
    const dispatch = useDispatch();  
    const navigate=useNavigate();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
           try { if (user) {  
              const {email,displayName,uid} = user;
              dispatch(addUser({uid:uid,displayName:displayName,email:email}));
              navigate("/Browse");
            } else {
             dispatch(removeUser());
           navigate("/");
            }}catch(error){
                console.error("Error with auth state change:", error);
            }
          });
      },[]);
    return(
    <div  className="title">
        <ul className="logo">
            <li>M</li>
            <li>O</li>
            <li>V</li>
            <li>V</li>
            <li>I</li>
        </ul>
    </div>
    )
}
export default Title;