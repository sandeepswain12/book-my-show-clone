import { Route } from "react-router-dom";
import DefaultHoc from "./HOC/Default.Hoc";
import HomePage from "./components/Pages/Home.page";
import MovieHoc from "./HOC/Movie.Hoc";
import MoivePage from "./components/Pages/Movie.page"
import PlayPage from "./components/Pages/Plays.page"

import axios from "axios";
//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
    <DefaultHoc path="/" exact component={HomePage} />
    <MovieHoc path="/movie/:id" exact component={MoivePage} />
    <DefaultHoc path="/plays" exact component={PlayPage} />
    </>
  );
}

export default App;
