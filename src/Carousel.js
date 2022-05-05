import React from 'react'
import { Carousel } from "react-responsive-carousel"
import styled from "styled-components"
import movies from "./movies"

export default () => {
  <Carousel autoPlay selectedItem={1}>
    {movies.map((movie) => {
      return (
        <div key={movie.id}>
          <img src={movie.urlImage} alt=""/>
          <p>{movie.name}</p>
        </div>
      )
    })}
        
    

  </Carousel>
}
