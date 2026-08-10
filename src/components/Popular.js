import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router";
import "./Popular.css";

function Popular() {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=9307cd84f7415d1c65657bcb0548a8c7&language=en-US&page=1"
      )
      .then((res) => {
        setRecord(res.data.results);
      });
  }, []);

  return (
    <div className="popular-page">

      <Container fluid>

        <h1 className="popular-heading">
          🔥 Popular Movies
        </h1>

        <Row className="g-4">

          {record.map((movie) => (

            <Col
              xl={2}
              lg={3}
              md={4}
              sm={6}
              xs={6}
              key={movie.id}
            >

              <div className="popular-card">

                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />

                <div className="popular-overlay">

                  <h5>{movie.title}</h5>

                  <p>
                    ⭐ {movie.vote_average.toFixed(1)}
                  </p>

                  <Link className="details-btn" to={`/moviedetails/${movie.id}`}>▶ Details</Link>

                </div>

              </div>

            </Col>

          ))}

        </Row>

      </Container>

    </div>
  );
}

export default Popular;