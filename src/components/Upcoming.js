import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router";
import "./Upcoming.css";

function Upcoming() {

    const [record, setRecord] = useState([]);

    useEffect(() => {

        axios
            .get(
                "https://api.themoviedb.org/3/movie/upcoming?api_key=9307cd84f7415d1c65657bcb0548a8c7&language=en-US&page=1"
            )
            .then((res) => {
                setRecord(res.data.results);
            })
            .catch((err) => console.log(err));

    }, []);

    return (

        <div className="upcoming-page">

            <Container fluid>

                <h1 className="upcoming-heading">
                    🎬 Upcoming Movies
                </h1>

                <Row className="g-4">

                    {record.map((movie) => (

                        <Col
                            key={movie.id}
                            xl={2}
                            lg={3}
                            md={4}
                            sm={6}
                            xs={6}
                        >

                            <div className="upcoming-card">

                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                />

                                <div className="upcoming-overlay">

                                    <h5>{movie.title}</h5>

                                    <p>
                                        📅 {movie.release_date}
                                    </p>

                                    <p>
                                        ⭐ {movie.vote_average.toFixed(1)}
                                    </p>

                                    <Link to={`/moviedetails/${movie.id}`} className="details-btn">▶ Details</Link>

                                </div>

                            </div>

                        </Col>

                    ))}

                </Row>

            </Container>

        </div>

    );

}

export default Upcoming;