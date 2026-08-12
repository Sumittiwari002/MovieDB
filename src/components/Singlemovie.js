import React, {useState, useEffect} from "react";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import Card from 'react-bootstrap/Card';
import { useParams } from "react-router";
import './Singlemovie.css'
import ErrorBoundary1 from "../ErrorCatch/ErrorBoundary1";
import Imagecomponent from "./Imagecomponent";

function Singlemovie(){

    let [cast, setCast] = useState([]);
    let [info, setInfo] = useState({});

    let value = useParams();
    console.log(value);

    useEffect(()=>{

        axios.get(`https://api.themoviedb.org/3/movie/${value.movieid}?api_key=9307cd84f7415d1c65657bcb0548a8c7&language=en-US`)
        .then(res=>{
            console.log(res.data);
            setInfo(res.data);
            
        })

        axios.get(`https://api.themoviedb.org/3/movie/${value.movieid}/credits?api_key=9307cd84f7415d1c65657bcb0548a8c7&language=en-US`)
        .then(res=>{
            console.log(res.data.cast);
            setCast(res.data.cast)
        })
    },[value.movieid])

    return (
  <>
    {/* Hero Section */}
    <div
      className="hero-banner" fluid
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${info.backdrop_path})`,
      }}
    >
      <div className="hero-overlay">
        <Container>
          <Row className="align-items-center">

            <Col lg={4} md={5}>
              <Image
                fluid
                rounded
                className="movie-poster shadow-lg"
                src={"https://image.tmdb.org/t/p/w500" + info.poster_path}
              />
            </Col>

            <Col lg={8} md={7} className="movie-details">

              <h1 className="movie-title">{info.title}</h1>

              <div className="movie-meta" >

                <span>⭐ {info.vote_average?.toFixed(1)}</span>

                <span>📅 {info.release_date}</span>

                <span>⏱ {info.runtime} min</span>

              </div>

              <div className="genre-list">
                {info.genres &&
                  info.genres.map((genre) => (
                    <span key={genre.id}>{genre.name}</span>
                  ))}
              </div>

               <p className="movie-overview">
                    {info.overview}
                </p>

              <button className="btn btn-danger btn-lg me-3">
                ▶ Play
              </button>

              <button className="btn btn-outline-light btn-lg">
                + My List
              </button>

            </Col>

          </Row>
        </Container>
      </div>
    </div>

    {/* Cast */}

    <Container fluid className="cast-section">

      <h2 className="cast-heading">
        Top Cast
      </h2>

      <Row>

        {cast &&
          cast.slice(0, 12).map(({ profile_path, name, original_name }) => (
            <Col
              lg={2}
              md={3}
              sm={4}
              xs={6}
              className="mb-4"
              key={name}
            >
              <div className="cast-card">
                <ErrorBoundary1>
                  <Imagecomponent record={profile_path} />
                </ErrorBoundary1>

                <h6>{name}</h6>

                <small>{original_name}</small>

              </div>
            </Col>
          ))}
      </Row>

    </Container>
  </>
);

}

export default Singlemovie;