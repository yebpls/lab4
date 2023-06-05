import React, { useState } from "react"
import data from "../shared/ListOfFilms"
import { Icon, CardTitle, Row, Col, Card, Container } from "react-materialize"
import { Link, useNavigate } from "react-router-dom"
import "./films.css"

function Films() {
  const [aFilm, setAFilm] = useState([])
  return (
    <Container className="films">
      <Row>
        {data.map((film) => {
          return (
            <Col l={4} m={6} s={12} className="col">
              <Card
                className="card"
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image={film.img} reveal waves="light" />}
                reveal={
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                }
                revealIcon={<Icon>more_vert</Icon>}
                title={film.title}
              >
                <p>
                  <Link to={`/detail/${film.id}`}>Detail</Link>
                </p>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Films
