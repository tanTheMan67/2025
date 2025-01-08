import { useRef, useState } from "react";
import Title from "./Title";
import {ValidateData} from "./utils/Validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "./utils/Firebase";

const Login = ()=>{
    const [isLogin,setIsLogin]=useState(true);
    const [errmessage,setErrMessage]=useState("");
    const toggleLogin = ()=>(
        setIsLogin(!isLogin)
    );
    const email = useRef(null);
    const password=useRef(null);
    const Handleclick =()=>{
  const message=ValidateData(email.current.value,password.current.value)
   setErrMessage(message);
   if(message)return;
   if(!isLogin){
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMessage(errorCode+""+errmessage);
  });
   }else{
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => { 
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
   }
    };
return(
<div className="login-container">
    <div>
   <Title/>
   <div className="background">
   <img src="https://external-preview.redd.it/6Wteq5vgs-B-6xt8LKJ6BiPKErMbpd8o6WIwVpRvH90.jpg?auto=webp&s=1b3dffc8be82b036c5dce0ace161ac4972c085b9"></img>
</div>
<form onSubmit={(e)=>(e.preventDefault())}>
  <h1> {!isLogin? "SIGN UP":"SIGN IN"}</h1>
  {!isLogin && <input className="login-input" placeholder="Enter Name"></input> }
    <input className="login-input" ref={email} placeholder="Enter Email"></input>
    <input className="login-input"  ref={ password} placeholder="Enter Password"></input>
    <p className="validation">{errmessage}</p>
    <button className="login-button" onClick={Handleclick}>{isLogin? "Sign In":"Sign Up"}</button>
    <span>
    <p>{!isLogin?"New to Movvi?":"Already A user?"}<a onClick={toggleLogin}> {isLogin?"Login now":"Sign up now"}</a></p>
    </span>
</form>
</div> 
</div>
)
}
export default Login;