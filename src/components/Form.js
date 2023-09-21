import React,{useEffect} from "react";
import {v4 as uuidv4} from 'uuid';
const Form =({input,setinput,todos,settodos,editodo,setedittodo})=>{
useEffect(()=>{
    if(editodo){
        setinput(editodo.title);

    }
    else{
        setinput("");
    }
},[setinput,editodo]);

    const oninputchange=(e)=>{
        setinput(e.target.value)
    }
    const updatetodo=(title,id,completed)=>
    {
               const newtodo=todos.map((todo)=>
                todo.id===id?{title,id,completed}: todo
               );
           settodos(newtodo);
           setedittodo("");
    }
    const onformsubmit=(e)=>{
        e.preventDefault();
        if(!editodo)
        {
        settodos([...todos,{id:uuidv4(),title:input,completed:false}]);
        setinput("");
        }else{
            updatetodo(input,editodo.id,editodo.completed)
        }
    }
    return(
        <form onSubmit={onformsubmit}>
            <input type='text' placeholder="Write the content" className="task-input" value={input} required onChange={oninputchange}></input>
            <button className="button-add" type="submit">{editodo?"OK":"Add"}</button>
        </form>
    )
}
export default Form;