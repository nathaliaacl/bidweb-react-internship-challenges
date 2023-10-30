/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {SortAscendingOutlined, SortDescendingOutlined} from '@ant-design/icons'

const Filter = ({filter, setFilter, setSort})=>{
    return (
    <div className='filter'>
        <h2>Filtrar</h2>
        <div className='filter__content'>

            <div className='filter__item'>
                <p>
                    Status
                </p>
                <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>

                </select>
            </div>
            <div className='filter__item'>
                <p>
                    Ordenar 
                </p>
                <button onClick={()=> setSort("Asc")}><SortAscendingOutlined style={{fontSize: '20px'}}/></button>
                <button onClick={()=> setSort("Desc")}><SortDescendingOutlined style={{fontSize: '20px'}}/></button>
            </div>
        </div>
    </div>
    );
};
export default Filter