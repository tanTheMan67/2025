import Title from "./Title";
import {API_OPTION} from "./utils/Constants"
import { signOut } from "firebase/auth";
import { auth } from "./utils/Firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "./MovieSlice";


const Browse = ()=>{
    const dispatch = useDispatch();
    const  MovieData = async()=>{
       const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTION);
       const json = await data.json();
       console.log(json);
       dispatch(addNowPlaying(json.results))
    }
    useEffect(()=>{
        MovieData();
    }
    ,[])

    const handleSignOut =()=>{
        signOut(auth).then(() => {
            alert("Do you really want to Sign Out?🫠🙁☹️");
          }).catch((error) => {
           
          });
    
}
return(
<div className="browse-header">
<Title/>
<button onClick={handleSignOut} className="login-button">Sign Out</button>
</div>
    )
}
export default Browse;