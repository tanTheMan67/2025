import MovieCard from "./MovieCard";

const MovieList = ({data,title})=>{
    console.log('1st');
    console.log(data);
    return(
        <div className="movie-list">
        <h1>{title}</h1>
        <div className="movie-card">
            {  data && data.map(card=><MovieCard key={data.id} poster={card?.poster_path}/>)
            }
        </div>
        </div>
    )
}
export default MovieList;