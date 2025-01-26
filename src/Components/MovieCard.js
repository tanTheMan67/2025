import { logEvent } from "firebase/analytics";
import { IMG_CDN } from "./utils/Constants";

const MovieCard = ({poster})=>{
    console.log("wo");
    console.log(poster);
    return(
        <div className="cards">
            <img src={IMG_CDN+poster}/>
        </div>
    )
}
export default MovieCard;