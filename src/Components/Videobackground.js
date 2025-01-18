import useTrailerVideo from "./hooks/useTrailerVideo";
import {useSelector} from "react-redux";
const Videobackground = ({MovieId})=>{
    const trailervideo = useSelector(store=>store.movie.trailerVideo);
     useTrailerVideo(MovieId);
     console.log("ok");
   console.log(trailervideo);
    return(
        <div className="video-bg">
            <iframe  src={"https://www.youtube.com/embed/"+ trailervideo?.key} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}
export default Videobackground;