import { useEffect } from "react";
import { API_OPTION } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "../MovieSlice";
const useTrailerVideo=()=>{
    const dispatch = useDispatch();
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
}
export default useTrailerVideo;