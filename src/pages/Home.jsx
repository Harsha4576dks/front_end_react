import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    const movies =[
        {id:1, title:"om", release_date:"2000"},
        {id:2, title:"saho", release_date:"2020"},
        {id:3, title:"kgf", release_date:"2023"},
    ];
    const handlesearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    };

    return (
        <div className="home">
            <form onSubmit={handlesearch} className="search-form">
                <input type="text"
                placeholder="search for movies"
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">search</button>
                </form>

        <div className="movies-grid">{
            movies.map(
                (movie)=> 
                    movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) &&
                    (<MovieCard movie={movie} key={movie.id}/>
            )) 
            }</div>
        </div>

    );
}

export default Home;