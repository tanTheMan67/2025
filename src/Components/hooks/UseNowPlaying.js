import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addNowPlaying} from "../MovieSlice";
import {API_OPTION} from "../utils/Constants";
const useNowPlaying = ()=>{
    const dispatch = useDispatch();
    const  MovieData = async()=>{
       const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTION);
       const json = await data.json();
       console.log(json.results);
       dispatch(addNowPlaying(json.results))
    }
    useEffect(()=>{
        MovieData();
    }
    ,[])
}
export default useNowPlaying;