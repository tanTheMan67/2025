import Title from "./Title";
import { signOut } from "firebase/auth";
import { auth } from "./utils/Firebase";
import useNowPlaying from "./hooks/UseNowPlaying";
import CentralContainer from "./CentralContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = ()=>{
    useNowPlaying();
    const handleSignOut =()=>{
        signOut(auth).then(() => {
            alert("Do you really want to Sign Out?🫠🙁☹️");
          }).catch((error) => {
           
          });
    
}
return(
    <div>
<div className="browse-header">
<Title/>
<button onClick={handleSignOut} className="login-button">Sign Out</button>
</div>
<CentralContainer/>
<SecondaryContainer/>
</div>

    )
}
export default Browse;