/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Search = ({search, setSearch})=>{
    return (
    <div className='search'>
        <h2>Pesquisar</h2>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Busque por uma atividade...' ></input>
    </div>
    );
};
export default Search