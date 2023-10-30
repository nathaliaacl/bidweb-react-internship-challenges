import axios from 'axios';
import { useState, useEffect } from 'react';
import Book from '../Book/Book';
import PropTypes from 'prop-types';
import {SortAscendingOutlined, CloseOutlined,FallOutlined } from "@ant-design/icons"
import './BookList.css'

export default function BookList({search}){
  const [sortType, setSortType] = useState("");

    const [livros, setLivros] = useState([])

    useEffect(() => {
      axios.get('http://localhost:3000/items')
        .then(response => {
          setLivros(response.data);
        })
        .catch(error => {
          console.error('Erro ao buscar os livros:', error);
        });
    }, []);

    const filteredData = livros.filter((item) => {
      return item.titulo.toLowerCase().includes(search.toLowerCase());
    }).sort((a, b) => {
      switch (sortType) {
        case "nome":
          return a.titulo.localeCompare(b.titulo);
        case "preço":
          return a.preço - b.preço;
        default:
          return 0;
      }
    });

    return (
      <>
      <button className="ordenar_nome" onClick={() => setSortType("nome")}>Ordenar por Nome <SortAscendingOutlined /></button>
      <button className="ordenar_preco"onClick={() => setSortType("preço")}>Ordenar por Preço <FallOutlined /></button>
      <button className="remover_ordem"onClick={() => setSortType("")}><CloseOutlined /></button>
        <div className='books'>
          {filteredData.map((item) => {
            return(
              <ul key={item.id}>
                <Book title={item.titulo} autor={item.autor} img={item.capa} preco={item.preço.toString()} editora={item.editora} id={item.id} />
              </ul>
            )
          })}
        </div>
          </>
      );
}

BookList.propTypes = {
  search: PropTypes.string.isRequired,
};