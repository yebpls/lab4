import React from "react"
import { Carousel } from "react-materialize"
import data from "../shared/ListOfFilms"
import "./news.css"
function News() {
  const filmImg = data.map((item) => item.img)
  return (
    <div l={8} s={12} className="news">
      <h5 style={{ textAlign: "center", lineHeight: "100%" }}>News</h5>
      <Carousel
        carouselId="Carousel-34"
        images={[filmImg]}
        style={{ height: "100%", width: "" }}
        options={{
          fullWidth: false,
          indicators: true,
        }}
      />
    </div>
  )
}

export default News
