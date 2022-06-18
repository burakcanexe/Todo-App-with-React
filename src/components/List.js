import React, { useEffect, useState } from 'react'
import Todo from './Todo'

function List(props) {

    const [todos, setTodos] = useState([])
    const [active, setActive] = useState('all')

    useEffect(() => {
        setTodos(props.todos)
    }, [props.todos])

    const onlyActive = () => {
        const newTodos = []
        props.todos.map(todo => {
            if (todo.complated === false) {
                newTodos.push(todo)
            }
        })
        setTodos(newTodos)
    }

    const onlyComplated = () => {
        const newTodos = []
        props.todos.map(todo => {
            if (todo.complated === true) {
                newTodos.push(todo)
            }
        })
        setTodos(newTodos)
    }

    const getAll = () => {
        const newTodos = JSON.parse(localStorage.getItem('todos'))
        setTodos(newTodos)
    }

    const clearCompleted = () => {
        const newList = []
        props.todos.map(todo => {
            if (!todo.complated) {
                newList.push(todo)
            }
        })
        setTodos(newList)
        props.setTodos(newList)
        localStorage.setItem('todos', JSON.stringify(newList))
    }

    return (
        <>
            <ul className='todoList'>
                {todos.map(todo => (
                    <Todo key={todo.text} todo={todo} deleteTodo={props.deleteTodo} complatedTodo={props.complatedTodo} />
                ))}
            </ul>
            {props.todos.length > 0 && (
                <div className="footer">
                    <p>{todos.length} items left</p>
                    <div className="buttons">
                        <button className={`${active==='all' && ('active')}`} onClick={()=>{
                            getAll()
                            setActive('all')
                        }}>All</button>
                        <button className={`${active==='active' && ('active')}`} onClick={()=>{
                            onlyActive()
                            setActive('active')
                        }}>Active</button>
                        <button className={`${active==='completed' && ('active')}`} onClick={()=>{
                            onlyComplated()
                            setActive('completed')
                        }}>Completed</button>
                    </div>
                    <button onClick={clearCompleted}>Clear Complated</button>
                </div>
            )}
        </>
    )
}

export default List