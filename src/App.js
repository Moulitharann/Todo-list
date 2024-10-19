import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Todolist from './components/Todolist';
import Image from './img/todo.jpg'; // Ensure this path is correct

function App() {
  const initialstate = JSON.parse(localStorage.getItem("todos")) || [];
  
  // Initialize the state with empty string for input
  const [input, setinput] = useState('');
  const [todos, settodos] = useState(initialstate);
  const [editodo, setedittodo] = useState(null);

  // Persist todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div style={{ backgroundImage: `url(${Image})` }}>
      <div className="container">
        <div className="app-wrapper">
          <div><Header /></div>
          <div>
            <Form
              input={input}
              setinput={setinput}
              todos={todos}
              settodos={settodos}
              editodo={editodo}
              setedittodo={setedittodo}
            />
          </div>
          <div>
            <Todolist 
              todos={todos}
              settodos={settodos}
              editodo={editodo}
              setedittodo={setedittodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
