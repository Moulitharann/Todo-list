
import './App.css';
import React,{useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Todolist from './components/Todolist';
import { useEffect } from 'react';
import Image from './img/todo.jpg';

function App() {
  const intialstate= JSON.parse(localStorage.getItem("todos"))||[];
  const[input,setinput]=useState();
  const[todos,settodos]=useState(intialstate);
  const[editodo,setedittodo]=useState(null);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);
  return (
    <div style={{backgroundImage:`url(${Image})`}}>
    <div className="container">
      <div className='app-wrapper'>
        <div><Header/></div>
        <div><Form
            input={input}
            setinput={setinput}
            todos={todos}
            settodos={settodos}
            editodo={editodo}
            setedittodo={setedittodo}
        /></div>
        <div><Todolist todos={todos}
           settodos={settodos}
           editodo={editodo}
           setedittodo={setedittodo}/>
           </div>
      </div>
    </div>
    </div>
  );
}

export default App;
