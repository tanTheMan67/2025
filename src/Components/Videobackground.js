import useTrailerVideo from "./hooks/useTrailerVideo";
import {useSelector} from "react-redux";
const Videobackground = ({MovieId})=>{
    const trailervideo = useSelector(store=>store.movie.trailerVideo);
     useTrailerVideo(MovieId);
   console.log(trailervideo);
    return(
        <div className="video-bg">
            <iframe  src={"https://www.youtube.com/embed/"+ trailervideo?.key+"?&controls=0&modestbranding=1&rel=0&mute=1&autoplay=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
    )
}
export default Videobackground;