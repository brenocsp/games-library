import React from "react";
import { Container, Table, Badge, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SideNav from "../../components/SideNav/SideNav";

import "bootstrap/dist/css/bootstrap.min.css";
import "./meus-jogos.css";

function MeusJogos() {
  const generos = ["Ação", "Aventura", "Mistério"];

  function handleGenres(genres) {
    return (
      <div>
        {genres.map((genre) => (
          <Badge bg="primary" className="tags">
            {genre}
          </Badge>
        ))}
      </div>
    );
  }

  return (
    <div className="d-flex align-items-center justify-content-center meus-jogos-page">
      <SideNav />

      <Container>
        <h1>Meus Jogos</h1>
        <Table bordeless className="tabela">
          <thead>
            <tr>
              <th>Título</th>
              <th>Preço</th>
              <th>Gênero</th>
              <th>
                <Link to="/">
                  Adicionar um Jogo
                  <img src="./assets/add_purple.png" alt="adicionar um jogo" />
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tabela linhas-tabela">Dark Souls</td>
              <td>R$ 169,95</td>
              <td>{handleGenres(generos)}</td>
              <td>
                <Link to="/">
                  <img src="./assets/edit.png" alt="editar um jogo" />
                </Link>
              </td>
              <td>
                <Link to="/">
                  <img src="./assets/trash.png" alt="excluir um jogo" />
                </Link>
              </td>
            </tr>
            <tr>
              <td>Cyber Punk</td>
              <td>R$ 349,24</td>
              <td>{handleGenres(generos)}</td>
              <td>
                <Link to="/">
                  <img src="./assets/edit.png" alt="editar um jogo" />
                </Link>
              </td>
              <td>
                <Link to="/">
                  <img src="./assets/trash.png" alt="excluir um jogo" />
                </Link>
              </td>
            </tr>
          </tbody>
        </Table>
        <Link to="/">
          Adicionar um Jogo
          <img src="./assets/add_purple.png" alt="adicionar um jogo" />
        </Link>
      </Container>
    </div>
  );
}
export default MeusJogos;
