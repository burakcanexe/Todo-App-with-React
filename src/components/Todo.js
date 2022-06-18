import React, {useEffect, useState} from 'react'
import { FaCheckCircle, FaCircle, FaRegWindowClose } from 'react-icons/fa'

function Todo(props) {

    const [className,setClassName] = useState('')

    useEffect(()=>{
        if (props.todo.complated) {
            setClassName('complated')
        }else{
            setClassName('unComplated')
        }
    },[props.todo])

  return (
    <div className={`todo`}>
        <div className="icon">
            {props.todo.complated?(<FaCheckCircle onClick={()=>props.complatedTodo(props.todo)}/>):(<FaCircle onClick={()=>props.complatedTodo(props.todo)}/>)}
        </div>
        <div className={`todo-text ${props.todo.complated ? ('complated'):('')}`}>
            {props.todo.text}
        </div>
        <div className="close">
            <FaRegWindowClose onClick={()=>props.deleteTodo(props.todo)} />
        </div>
    </div>
  )
}

export default Todo