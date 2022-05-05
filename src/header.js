import React, { Component } from "react";
import styled from "styled-components";
import Logo1 from "./img/ToDoFLIX.png";
import Perfil1 from "./img/Group 32.png";
import movies from "./movies";
import Search1 from "./img/search.png";
import { Link } from "react-router-dom";

const Header = styled.div`
  height: 45px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;
const Logo = styled.img`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  margin-right: 15px;
`;
const Menu = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
const Li = styled.li`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  color: white;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  a {
    text-decoration: none;
    font-size: 14px;
    color: white;
  }
`;
const DropdownBox = styled.div`
  min-width: 100%;
  width: 150px;
  height: 00px;
  display: ${(props) => (props.hoverIndice ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 2;
  a {
    text-decoration: none;
  }
`;
const DropdownItem = styled.div`
  padding: 6px;
  border: none;
  background: none;
  color: #fff;
  text-align: left;
  text-decoration: none;
  margin-left: 10px;
`;
const Search = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: end;
  margin-right: 80px;
`;
const Botao = styled.button`
  width: 75px;
  margin-right: 10px;
  background-color: #e71b27;
  border: none;
  height: 25px;
  border-radius: 2px;
  color: #ffffff;
  font-size: 10px;
  &:hover {
    border: 1px solid white;
  }
`;
const Pesquisa = styled.div`
  width: 25vw;
  height: 25px;
  border-radius: 2px;
  padding: 0 5px;
  background-color: #2c2c2c;
  display: flex;
  align-items: center;
  a {
    background: none;
    border: none;
    text-transform: none;
  }
  img {
    width: 15px;
    background: none;
    margin-right: 5px;
  }
  input {
    color: white;
    border: none;
    background: none;
    outline: none;
  }
`;
const Perfil = styled.img`
  width: 25px;
  margin-left: 10px;
`;
const Div = styled.div`
  display: flex;
`;

class header extends Component {
  state = {
    categorias: ["Todos", "Favoritos", "Já vistos", "Adicionados"],
    categoria: "",
    hoverIndice: false,
  };
  setCategoria = (value) => {
    this.setState({
      categoria: value,
      hoverIndice: false,
    });
  };
  openDropdown = () => {
    this.setState({
      hoverIndice: true,
    });
  };
  closeDropdown = () => {
    this.setState({
      hoverIndice: false,
    });
  };

  render() {
    return (
      <Header>
        <Logo src={Logo1} alt="" />
        <Menu>
          <Li>
            <Link to="/">Inicio</Link>
          </Li>
          <Li
            onMouseEnter={this.openDropdown}
            onMouseLeave={this.closeDropdown}
          >
            Categorias
            <DropdownBox hoverIndice={this.state.hoverIndice}>
              {this.state.categorias.map((categoria) => {
                return (
                  <Link to="/todos">
                    <DropdownItem
                      key={categoria}
                      onClick={() => this.setCategoria(categoria)}
                    >
                      {categoria}
                    </DropdownItem>
                  </Link>
                );
              })}
            </DropdownBox>
          </Li>
        </Menu>
        <Div>
          <Search>
            <Botao>Adicionar filme</Botao>
            <Pesquisa>
              <Link to="/todos">
                <img src={Search1} alt="" />
              </Link>
              <input
                placeholder="Pesquisar"
                type="text"
                value={this.props.pesquisa}
                onChange={this.props.handleSearch}
              />
            </Pesquisa>
            <Perfil src={Perfil1} alt="" />
          </Search>
        </Div>
      </Header>
    );
  }
}

export default header;
