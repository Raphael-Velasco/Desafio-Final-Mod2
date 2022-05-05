import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Header from "./header";
import Main from "./Main";
import Todos from "./Todos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    list-style:none;
    background-color:black;
  }
`;

class Desafio extends Component {
  state = {
    pesquisa: "",
  };

  handleSearch = (event) => {
    this.setState({ pesquisa: event.target.value });
  };

  render() {
    return (
      <Router>
        <GlobalStyle />
        <Header
          pesquisa={this.state.pesquisa}
          handleSearch={this.handleSearch}
        />
        <Routes>
          <Route path="/" element={<Main pesquisa={this.state.pesquisa} />} />
          <Route path="/todos" element={<Todos pesquisa={this.state.pesquisa} />} />
        </Routes>
      </Router>
    );
  }
}
export default Desafio;
