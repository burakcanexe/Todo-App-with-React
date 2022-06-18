import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'

function Form(props) {

    const [formData, setFormData] = useState({
        text: '',
        complated: false
    })


    const onSubmit = (e) => {
        e.preventDefault()
        props.addTodo(formData)
        setFormData({
            text:'',
            complated:false
        })
    }
    const onChange = (e) => {
        setFormData({
            text: e.target.value,
            complated: false
        })
    }

    const allCompleted=()=>{
        const newList=[]
        let xss = false
        props.todos.map(todo=>{
            if (todo.complated===false) {
                xss=true
            }
        })
        if (xss) {
            props.todos.map(todo=>{
                if(todo.complated===false){
                    todo.complated=true
                    newList.push(todo)
                }else{
                    newList.push(todo)
                }
            })
        }else{
            props.todos.map(todo=>{
                todo.complated=!todo.complated
                newList.push(todo)
            })
        }

        props.setTodos(newList)
        localStorage.setItem('todos',JSON.stringify(newList))
    }

    return (
        <div className='form'>
            {props.todos.length > 0 && (<button onClick={allCompleted}><FaCaretDown /></button>)}
            <form onSubmit={onSubmit}>
                <input onChange={onChange} type="text" name='text' placeholder='What needs to be done?' value={formData.text} />
            </form>
        </div>
    )
}

export default Form