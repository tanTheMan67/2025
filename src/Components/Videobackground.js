import { useEffect } from "react";
import { API_OPTION } from "./utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "./MovieSlice";

const Videobackground = ({MovieId})=>{
    const dispatch = useDispatch();
    const trailervideo = useSelector(store=>store.movie.trailerVideo);
    const getMovieVideo  = async()=>{
       const data = await fetch('https://api.themoviedb.org/3/movie/939243/videos?language=en-US',API_OPTION);
       const json= await data.json();
       console.log(json);
       const filterData = json.results.filter(video=>video.type==="Trailer");
       const trailer = filterData.length ?filterData[0]:json.results[0];
       dispatch(addTrailer(trailer));
    }
    useEffect(()=>{
        getMovieVideo();
    },[])
    return(
        <div>
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+ trailervideo?.key} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
        </div>
    )
}
export default Videobackground;