import React, { useState, useEffect } from "react";
import {Navigate, useNavigate } from "react-router";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'

import {Container, Row, Col, Card, Button, Spinner, Badge} from "react-bootstrap";

import "./Searchmovie.css";
import ErrorBoundary from "../ErrorCatch/ErrorBoundary";
import Imagecomponent from "./Imagecomponent";

function Searchmovie() {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const navigate = useNavigate();


  const searchState = useSelector((state) => state.search.movieName);
  console.log(searchState);


  useEffect(() => {
    setLoading(true);

    const apipath = `https://api.themoviedb.org/3/search/movie?api_key=9307cd84f7415d1c65657bcb0548a8c7&language=en-US&query=${searchState}&page=1`;
      
    axios.get(apipath).then((res) => {
      setInfo(res.data.results);
      setLoading(false);
    });
  }, [searchState]);

  return (
    <div className="search-page">
      <Container>
        <h2 className="page-title">
          Search Result for
          <span> "{searchState}"</span>
        </h2>

        {loading ? (
          <div className="loader">
            <Spinner animation="border" variant="danger" />
          </div>
        ) : (
          <Row>
            {info.length > 0 ? (
              info.map((movie) => (
                <Col lg={3} md={4} sm={6} xs={12} key={movie.id} className="mb-4">
                  <Card className="movie-card">

                    <div className="poster-wrapper">
                     <ErrorBoundary>
                        <Imagecomponent record={movie.poster_path}/>
                      {/* <Card.Img
                        variant="top"
                        src={
                          movie.poster_path
                            ? "https://image.tmdb.org/t/p/w500" +
                              movie.poster_path
                            : "https://via.placeholder.com/500x750?text=No+Image"
                        }
                      /> */}
                      </ErrorBoundary>
                      <Badge bg="warning" className="rating">
                        ⭐ {movie.vote_average}
                      </Badge>
                    </div>

                    <Card.Body>

                      <Card.Title className="movie-title">
                        {movie.title}
                      </Card.Title>

                      <Card.Text className="overview">
                        {movie.overview || "No Description Available"}
                      </Card.Text>

                      <Button className="btn btn-danger" onClick={() => navigate(`/moviedetails/${movie.id}`)}>▶ Details</Button>


                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <h3 className="text-center text-white mt-5">
                No Movies Found
              </h3>
            )}
          </Row>
        )}
      </Container>
    </div>
  );
}

export default Searchmovie;