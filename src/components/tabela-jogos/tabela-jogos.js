import React from "react";
import { Table, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./tabela-jogos.css";

function TabelaJogos() {
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
    <div className="div-tabela">
        <Table className="tabela">
          <thead className="cabecalho">
            <tr>
              <th className="texto-cabecalho largura-pequena">Título</th>
              <th className="texto-cabecalho largura-pequena">Preço</th>
              <th className="texto-cabecalho">Gênero</th>
              <th className="texto-cabecalho texto-add-jogos largura-media">
                <Link to="/">Adicionar um Jogo<img className="icons" src="./assets/add_purple.svg" alt="adicionar um jogo" /></Link>
              </th>
            </tr>
          </thead>
          <tbody className="linhas-tabela">
            <tr className="linhas-tabela">
              <td className="texto-linhas largura-pequena">Dark Souls</td>
              <td className="texto-linhas largura-pequena">R$ 169,95</td>
              <td className="texto-linhas">{handleGenres(generos)}</td>
              <td className="texto-linhas icones-tabela largura-media">
                <Link to="/"><img className="icons" src="./assets/edit.svg" alt="editar um jogo" /></Link>
                <Link to="/"><img className="icons" src="./assets/trash.svg" alt="excluir um jogo" /></Link>
              </td>
            </tr>
            <tr>
              <td className="texto-linhas largura-pequena">Cyber Punk</td>
              <td className="texto-linhas largura-pequena">R$ 349,24</td>
              <td className="texto-linhas">{handleGenres(generos)}</td>
              <td className="texto-linhas icones-tabela largura-media">
                <Link to="/"><img className="icons" src="./assets/edit.svg" alt="editar um jogo" /></Link>
                <Link to="/"><img className="icons" src="./assets/trash.svg" alt="excluir um jogo" /></Link>
              </td>
            </tr>
          </tbody>
        </Table>
        <p className="texto-add-jogos-final"><Link to="/">Adicionar um Jogo<img className="icons" src="./assets/add_purple.svg" alt="adicionar um jogo"/></Link> </p>     
    </div>
  );
}

export default TabelaJogos;