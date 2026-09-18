import MovieCard from "../components/MovieCard";

function home(){
    const movies =[
        {id:1, name:"om", release_date:"2000"},
        {id:2, name:"saho", release_date:"2020"},
        {id:3, name:"kgf", release_date:"2023"},
    ];

    return (
        <div className="home">

        <div className="movies-grid">{
            movies.map((movie)=>(
            <MovieCard movie={movie} key={movie.id}/>
            )) 
            }</div>
        </div>

    );
}

export default home