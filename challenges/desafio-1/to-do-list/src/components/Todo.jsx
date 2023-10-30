/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {CheckOutlined, DeleteOutlined} from '@ant-design/icons'
const Todo = ({ todo, removeTodo, completeTodo }) => {
    return (
        <div className='todo' style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
        <div className='content'>
          <p>{todo.text}</p>
          <p className='category'>{todo.category}</p>
        </div>
        <div>
          <button className='complete' onClick={()=>completeTodo(todo.id)}><CheckOutlined style={{fontSize: '18px'}}/></button>
          <button className='remove' onClick={()=>removeTodo(todo.id)}><DeleteOutlined style={{fontSize: '18px'}}/></button>
        </div>
      </div>
    );
};
export default Todo