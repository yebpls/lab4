import React, { useState } from "react"
import { useParams } from "react-router-dom"
import data from "../shared/ListOfFilms"
import { Row, Col, Card, Icon, CardTitle } from "react-materialize"
import Modal from "./Modal"
import "./Detail.css"

function Detail() {
  const params = useParams()
  console.log(data)
  console.log(params)
  const film = data.find((item) => item.id === params.id)
  console.log(film)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col m={8} s={12} style={{ margin: "0 auto" }}>
          <Card
            className="card1"
            
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle style={{}} image={film.img} />}
            title={film.title}
          >
            <a
              onClick={() => setIsOpen(true)}
              className="btn-floating halfway-fab waves-effect waves-light red"
            >
              <Icon>ondemand_video</Icon>
            </a>
            <p>Year: {film.year}</p>
            <p>Nation: {film.nation}</p>

            <p>{film.description}</p>
          </Card>
        </Col>
      </Row>

      {isOpen && <Modal setIsOpen={setIsOpen} film={film} />}
    </>
  )
}

export default Detail
