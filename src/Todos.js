import React, { Component } from "react";
import styled from "styled-components";
import movies from "./movies";
import Carousel from "nuka-carousel";

class Todos extends Component {
  render() {
    const moviesFiltered = movies.filter((movie) => {
      if (this.props.pesquisa) {
        return movie.name.indexOf(this.props.pesquisa) >= 0;
      }
      return true;
    });
    const All = styled.h2`
    color:white;
    margin-top:20px;
    margin-left:10px;
    `
    const Div = styled.div`
      display: flex;
      justify-content:flex-start;
      align-items: flex-start;
      width: 100%;
      flex-wrap: wrap;
    `;
    const Filmes = styled.div`
      width:18%;
      margin:5px 1%;
      
    `;
    const ImgF = styled.img`
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius:4px;
    `;
    const NomeF = styled.p`
      color: white;
      font-size:13px;
      font-weight: 700;
      margin:3px 0px 3px 0px;
    `;
    const Description2 = styled.p`
      color: white;
      font-size: 9px;
      width:100%;
      
    `;

    return (
      <div>   
        <All>Todos</All>  
        <Div>
          {moviesFiltered.map((movie, index) => {
            return (
              <Filmes key={movie.id}>
                <ImgF src={movie.urlImg} alt="" />
                <NomeF>{movie.name}</NomeF>
                <Description2>{movie.description}</Description2>
              </Filmes>
            );
          })}
        </Div>
      </div>
    );
  }
}

export default Todos;
