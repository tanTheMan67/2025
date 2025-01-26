import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = ()=>{
    const movieData = useSelector((store)=>store.movie.nowPlaying);
    console.log(movieData);
    return (
        <div>
            <MovieList title={"Now Playing"} data={movieData}/>
        </div>
    )
}
export default SecondaryContainer;