import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Todolist=({todos,settodos,editodo,setedittodo})=>{
      


    const handleComplete=(todo)=>{
       settodos(
        todos.map((item)=>{
            if(item.id===todo.id)
            {

                return{...item,completed:!item.completed}
            }
            return item;
        })
       )
    }
    const handleedit=({id})=>{
       const findtodo=todos.find((todo)=>todo.id===id)
       setedittodo(findtodo);
    }
    const handledelete=({id})=>{
        settodos(todos.filter((todo)=>todo.id!==id));
    };
    return(
        <div>
            {todos.map((todo)=>(
                <li className='todo-list'key={todo.id}>
                    <input type='text' value={todo.title} className={`list ${todo.completed ? "completed":""}`} onchange={(e)=>e.preventDefault()}></input>
                    <div>
                        {/* <button className='button-complete task-button' onClick={()=> handleComplete(todo)}>com
                         <i className='fa fa-check-circle'></i>
                        </button> */}
                        <button class='button-edit task-button' onClick={()=>handleedit(todo)}>Edit
                         <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                        </button>
                        <button class='button-delete task-button'onClick={()=>handledelete(todo)}>Delete
                         <i className='fa fa-trash'></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    )
}
export default Todolist;