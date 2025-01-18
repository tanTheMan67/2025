import { useSelector } from "react-redux";
import Videotitle from "./Videotitle";
import Videobackground from "./Videobackground";

const CentralContainer = ()=>{
    const movies = useSelector((store)=>store.movie?.nowPlaying);
    if(!movies)return;
   const MainMovie = movies[0];
    console.log(MainMovie);
    const {title,overview}= MainMovie;
    return(
        <div>
   <Videotitle title={title} overview={overview}/>
    <Videobackground/>
        </div>
    )
}
export default CentralContainer;