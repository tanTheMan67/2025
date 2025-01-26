import { useSelector } from "react-redux";
import Videotitle from "./Videotitle";
import Videobackground from "./Videobackground";

const CentralContainer = ()=>{
    const movies = useSelector((store)=>store.movie?.nowPlaying);
    if(!movies)return;
   const MainMovie = movies[1];
    console.log(MainMovie);
    const {title,overview,id}= MainMovie;
    return(
        <div className="central" >
   <Videotitle title={title} overview={overview}/>
    <Videobackground MovieId={id}/>
        </div>
    )
}
export default CentralContainer;