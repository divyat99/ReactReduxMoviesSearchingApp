import { Routes, Route } from "react-router-dom";
import "./App.css";

import Request from "./Components/Request";
import Series from "./Components/MovieList/Series";
import Movie from "./Components/MovieList/Movie";
import SearchList from "./Components/SearchList";
import Action from "./Components/MovieList/Action";
import Header from "./Components/Header";
import Adventure from "./Components/MovieList/Adventure";
import Kids from "./Components/MovieList/Kids";
import Horror from "./Components/MovieList/Horror";
import Comedy from "./Components/MovieList/Comedy";
import Crime from "./Components/MovieList/Crime";
import Thriller from "./Components/MovieList/Thriller";
import Music from "./Components/MovieList/Music";
import Popular from "./Components/MovieList/Popular";
import Family from "./Components/MovieList/Family";
import ScienceFiction from "./Components/MovieList/ScienceFiction";
import Documentry from "./Components/MovieList/Documentry";
import Mystry from "./Components/MovieList/Mystry";
import FavouriteList from "./Components/FavouriteList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Request/>} /> */}
        <Route path="/series" element={<Series />} />

        <Route path="/adventureMovie" element={<Adventure />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/horror" element={<Horror />} />
        <Route path="/comedy" element={<Comedy />} />
        <Route path="/crime" element={<Crime />} />
        <Route path="/thriller" element={<Thriller />} />
        <Route path="/music" element={<Music />} />
        <Route path="/" element={<Popular />} />
        <Route path="/family" element={<Family />} />
        <Route path="/sciencefiction" element={<ScienceFiction />} />
        <Route path="/documentry" element={<Documentry />} />
        <Route path="/mystry" element={<Mystry />} />

        <Route path="/movie" element={<Movie />} />
        <Route path="/actionMovie" element={<Action />} />
        <Route path="/searchlist" element={<SearchList />} />
        <Route path="/favourite" element={<FavouriteList />} />
      </Routes>
    </>
  );
}

export default App;
