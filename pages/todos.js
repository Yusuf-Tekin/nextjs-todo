
import { useEffect, useState } from 'react';
import style from '../styles/todos.module.css';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export default function todos(){

    const [todoText,setTodoText] = useState("");
    const [todos,setTodos] = useState([]);



    const getTodos = async () => {
        const {data} = await axios.get("http://localhost:3000/api/getTodos");
        setTodos(data.data);
    }

    const createNewTodo = async(e) => {
        e.preventDefault();

        const newTodo = {
            id: uuidv4(),
            text:todoText
        };

        const {data} = await axios.post('http://localhost:3000/api/addTodo',{
            todo:newTodo
        });
        
        setTodoText("");
        getTodos();
    }

    useEffect(() => {
        getTodos();
    },[])


    const deleteTodo =async (todo) => {
        const {data} = await axios.post("http://localhost:3000/api/deleteTodos",{
            todo,
            headers: {
                'Content-Type': 'application/json'
           },
        
        })
        console.log(data)
        getTodos();
    }
    

    const onHandleChangeTodoText = (e) => {
        setTodoText(e.target.value);
    }
    return <div className={style.todospage}>
        <div className={style.todoArea}>
            <div className={style.newTodo}>
                <form onSubmit={createNewTodo}>
                    <input onChange={onHandleChangeTodoText} value= {todoText} placeholder='Yeni görev ekle' />
                    <button type='submit'>Ekle</button>
                </form>
            </div>
            <div className={style.todoList}>
                <ul>
                    {
                        todos.map(todo => (
                            <div key = {todo.id} className={style.singletodo}>
                                <li>{todo.text}</li>
                                <button onClick={() => {deleteTodo(todo)}}>Sil</button>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>

}