import { useState } from 'react';
import "./App.css";
import Todo from './components/Todo';
import TodoForm from './components/Todoform';
import Search from './components/Search';
import Filter from './components/Filter';


function App() {
  // eslint-disable-next-line no-unused-vars
  // const [todos, setTodos] = useState(
  //   [
  //     {
  //       id: 1,
  //       text: "Ler livro de Steve Jobs",
  //       category: "Pessoal",
  //       isCompleted: false,
  //     },
  //     {
  //       id: 2,
  //       text: "Aprender ReactJS",
  //       category: "Estágio",
  //       isCompleted: false,
  //     },
  //     {
  //       id: 3,  
  //       text: "Academia",
  //       category: "Pessoal",
  //       isCompleted: false,
  //     },
  //   ]
  // );

    const [todos, setTodos] = useState(() => {
    const todo = window.localStorage.getItem("todos");
    return todo !== null
      ? JSON.parse(todo)
      : [];
  })

  const addTodo = (text, category) => {
    const newTodos = [...todos,{
        id: Math.floor(Math.random()*10000),
        text,
        category,
        isCompleted: false,
      }
    ]

    localStorage.setItem("todos", JSON.stringify(newTodos))
    setTodos(newTodos) //atualizar o componente
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => 
    todo.id !== id? todo : null);
    localStorage.setItem("todos", JSON.stringify(filteredTodos))
    setTodos(filteredTodos) //atualizar o componente
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    // o map modifica o array original diferente do filtered
    newTodos.map((todo)=> todo.id === id? todo.isCompleted = !todo.isCompleted:todo)
    localStorage.setItem("todos", JSON.stringify(newTodos))
    setTodos(newTodos) //atualizar o componente
  }

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  return <div className='app to-do'>
    <h1>To-do List</h1>
    <Search search={search} setSearch={setSearch}/>
    <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
    <div className='todo-list'>
      {todos
      .filter((todo)=> filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
      .filter((todo)=>todo.text.toLowerCase().includes(search.toLowerCase()))
      .sort((a,b)=> sort === "Asc" ? a.text.localeCompare(b.text) :b.text.localeCompare(a.text))
      .map((todo)=> (
        // eslint-disable-next-line react/jsx-key
       <Todo key={todo.id} todo = {todo} removeTodo={removeTodo} completeTodo={completeTodo}/>

      )
      )}
    </div>
        <TodoForm addTodo={addTodo}/>
  </div>
  
}

export default App