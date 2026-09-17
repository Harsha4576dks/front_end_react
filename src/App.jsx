import './App.css'
import MovieCard from "./components/MovieCard"

function App() {
    return (
      /*  <>
      <Text  display="hi"/>
      <Text display="max" />
      </>
  );
}

function Text({display}){
return (
  <div>
    <p>{display} </p>
  </div>
  */
    <>
  <MovieCard movie={{title: "Tim's Film", release_date:"2024"}}/>
  
  </>
);
}

export default App