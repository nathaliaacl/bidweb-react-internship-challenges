/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { EditOutlined} from '@ant-design/icons'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const[category, setCategory] = useState("")

    const handleSubmit = (e) => {
       e.preventDefault();
       // nao permitir que tarefas sem nome ou sem categoria sejam criadas
       if (!value || !category) return;
       //console.log(value, category);
       addTodo(value, category);
       setValue("");
       setCategory("");

    }

    return (
        <div>
            <h2>
                Criar tarefa
            </h2>
            <form onSubmit={handleSubmit} className='form'>
                <input type="text" placeholder='Digite o título' 
                value={value}
                onChange={(e) => setValue(e.target.value)}/>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value=''>Selecione uma categoria</option>
                    <option value='Pessoal'>Pessoal</option>
                    <option value='Faculdade'>Faculdade</option>
                    <option value='Estágio'>Estágio</option>
                </select>
                <button type='submit'><EditOutlined style={{fontSize: '16px'}} /></button>
                
            </form>
        </div>
    );
};
export default TodoForm;