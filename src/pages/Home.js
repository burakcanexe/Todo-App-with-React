import React, { useEffect, useState } from 'react'
import Form from '../components/Form'
import List from '../components/List'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {AiFillMail} from 'react-icons/ai'

function Home() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const todoList = JSON.parse(localStorage.getItem('todos'))
        if (todoList) {
            setTodos(todoList)
        } else {
            localStorage.setItem('todos', JSON.stringify(todos))
        }
    }, [])

    const addTodo = (todo) => {
        const todoList = JSON.parse(localStorage.getItem('todos'))
        todoList.unshift(todo)
        localStorage.setItem('todos', JSON.stringify(todoList))
        setTodos(todoList)
    }

    const complatedTodo = (editTodo) => {
        const todoList = JSON.parse(localStorage.getItem('todos'))
        todoList.map(todo => {
            if (editTodo.text === todo.text) {
                if (todo.complated) {
                    todo.complated = false
                } else {
                    todo.complated = true
                }
            }
        })
        setTodos(todoList)
        localStorage.setItem('todos', JSON.stringify(todoList))
    }

    const deleteTodo = (deleteTodo) => {
        const todoList = JSON.parse(localStorage.getItem('todos'))
        todoList.map((todo, index) => {
            if (deleteTodo.text === todo.text) {
                todoList.splice(index, 1)
            }
        })
        localStorage.setItem('todos', JSON.stringify(todoList))
        setTodos(todoList)
    }


    return (
        <>
            <section className='home'>
                <h1>todos</h1>
                <div className="todos-box">
                    <div className="todos">
                        <Form todos={todos} addTodo={addTodo} setTodos={setTodos} />
                        <List todos={todos} setTodos={setTodos} deleteTodo={deleteTodo} complatedTodo={complatedTodo} />
                    </div>
                </div>
            </section>
            <footer>
                <p>Bu uygulama <span>Burak Can Yıldırım</span> tarafından geliştirilmiştir</p>
                <div className="buttons">
                    <a target='_blakn' href="https://www.linkedin.com/in/burak-can-y%C4%B1ld%C4%B1r%C4%B1m-27b58616b/"><FaLinkedin /></a>
                    <a target='_blank' href="https://github.com/burakcanexe"><FaGithub /></a>
                    <a href="mailto:burakcanexe@gmail.com"><AiFillMail /></a>
                </div>
            </footer>
        </>
    )
}

export default Home