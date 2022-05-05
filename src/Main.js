import React, { Component } from "react";
import styled from "styled-components";
import movies from "./movies";
import Carousel from "nuka-carousel";
import Next1 from "./img/right-arrow.png"
const RecentView = styled.div`
  display: flex;
  align-items: center;
  margin-top: 70px;
  margin-left: 54px;
`;
const Filme = styled.img`
  width: 375px;
  border-radius: 4px;
`;
const RecentViewText = styled.div`
  display: flex;
  align-items: cente;
  flex-direction: column;
  width: 50%;
  color: white;
  margin-left: 30px;
`;

const Main = styled.main`
  width: 100vw;
  margin: 0;
`;
const SlideContainer = styled.div`
  width: 95%;
  margin-left: 49px;
  color: white;
  margin-top: 50px;
`;
const Next = styled.button`
  background: none;
  width:20px;
  border:none;
  
`
const NextImg = styled.img``
const Highlights = styled.h4`
  display: flex;
  align-items: center;
  margin: 7px 5px;
`;
const Filmes = styled.div`
  background-color: black;
  text-align: center;
  margin-bottom: 10px;
`;
const ImgF = styled.img`
  width: 100%;
  height: 125px;
  border-radius: 4px;
`;
const NomeF = styled.p`
  width: 100%;
  text-align: left;
  color: #fff;
  font-weight: 700;
`;
const Description1 = styled.p`
  width: 100%;
  font-size: 15px;
  text-align: left;
  color: #fff;
`;
const Description2 = styled.p`
  width: 100%;
  height: 50%;
  font-size: 8px;
  text-align: left;
  color: #fff;
`;

class Main1 extends Component {
  render() {
    return (
      <Main>
        <RecentView>
          <Filme
            src="https://universoheroico.com.br/wp-content/uploads/2021/12/Homem-Aranha-Sem-Volta-Para-Casa-Poster-Variacao-01.png"
            alt=""
          />
          <RecentViewText>
            <h5>Visto Recentemente</h5>
            <h1>Homem-Aranha: Sem Volta para Casa</h1>
            <Description1>
              Pela primeira vez na história cinematográfica do Homem-Aranha,
              nosso herói amigo da vizinhança é desmascarado e não consegue mais
              separar sua vida normal dos grandes riscos de ser um super-herói.
              Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam
              ainda mais perigosos, e o forçam a descobrir o que realmente
              significa ser o Homem-Aranha.
            </Description1>
          </RecentViewText>
        </RecentView>
        <SlideContainer>
          <Highlights>Destaques</Highlights>
          <Carousel
            cellSpacing={10}
            wrapAround={true}
            slidesToShow={5}
            renderCenterLeftControls={({ previousSlide }) => null}
            renderCenterRightControls={({ nextSlide }) => (
              <Next onClick={nextSlide}>{<NextImg src={Next1} alt=""/>}</Next>
            )} autoplay={true} autoplayReverse={true}
          >
            {movies.map((movie, index) => {
              return (
                <Filmes key={movie.id}>
                  <ImgF src={movie.urlImg} alt="" />
                  <NomeF>{movie.name}</NomeF>
                  <Description2>{movie.description}</Description2>
                </Filmes>
              );
            })}
          </Carousel>
        </SlideContainer>
      </Main>
    );
  }
}

export default Main1;
