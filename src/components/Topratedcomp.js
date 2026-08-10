import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./TopRated.css";

function Topratedcomp() {
  const [record, setRecord] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let apipath =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=9307cd84f7415d1c65657bcb0548a8c7&language=en-US&page=1";

    axios
      .get(apipath)
      .then((res) => {
        setRecord(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="loading">
        <Spinner animation="border" variant="danger" />
      </div>
    );

  return (
    <div className="toprated-page">

      <Container fluid>

        <h2 className="section-title">
            ⭐ Top Rated Movies
        </h2>

        <Row className="g-4">

          {record.map((movie) => (

            <Col
              key={movie.id}
              xs={6}
              sm={4}
              md={3}
              lg={2}
            >

              <div className="movie-card">

                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />

                <div className="overlay">

                  <h5>{movie.title}</h5>

                  <p>
                    ⭐ {movie.vote_average}
                  </p>
                  <button className="btn btn-danger" onClick={() => navigate(`/moviedetails/${movie.id}`)}>▶ Details</button>

                </div>

              </div>

            </Col>

          ))}

        </Row>

      </Container>

    </div>
  );
}

export default Topratedcomp;