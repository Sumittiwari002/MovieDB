import { BrowserRouter, Routes, Route } from "react-router";
import Toprated from '../components/Toprated'
import Upcoming from '../components/Upcoming'
import Pagenotfound from '../components/Pagenotfound'
import Home from "../components/Home";
import App from "../components/App";
import Topratedcomp from "../components/Topratedcomp";
import Popular from "../components/Popular";
import Searchmovie from "../components/Searchmovie";
import Singlemovie from "../components/Singlemovie"

const movieRoute = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
            <Route path="" element={<Popular />} />
            <Route path="toprated" element={<Toprated />} />
            <Route path="topratedcomp" element={<Topratedcomp/>} />
            <Route path="popular" element={<Popular/>} />
            <Route path="upcoming" element={<Upcoming />} />
            <Route path="searchmovie/:moviename" element={<Searchmovie />} />
            <Route path="moviedetails/:movieid" element={<Singlemovie />} />
            <Route path="*" element={<Pagenotfound />} />
            </Route>
        </Routes>
  </BrowserRouter>
)
export default movieRoute;