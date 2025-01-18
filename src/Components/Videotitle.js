const Videotitle = ({title,overview})=>{
    return (
        <div className=" vid-title">
            <h1>{title}</h1>
            <p>{overview}</p>
            <div>
                <button>Play ▶️</button>
                <button>More info ℹ️</button>
            </div>
            </div>
    )
}
export default Videotitle;