import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEdit, faTrashCan,faCircle } from '@fortawesome/free-solid-svg-icons'; // Import icons

const Todolist = ({ todos, settodos, editodo, setedittodo }) => {

  const handleComplete = (todo) => {
    settodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleedit = ({ id }) => {
    const findtodo = todos.find((todo) => todo.id === id);
    setedittodo(findtodo);
  };

  const handledelete = ({ id }) => {
    settodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      {todos.map((todo) => (
        <li className='todo-item' key={todo.id}>
          <input
            type='text'
            value={todo.title}
            className={`todo-text ${todo.completed ? 'completed' : ''}`}
            onChange={(e) => e.preventDefault()}
            readOnly
          />
          <div className="buttons-container">
          <button className='button-complete' onClick={() => handleComplete(todo)}>
              <FontAwesomeIcon icon={todo.completed ? faCheckCircle : faCircle} />
            </button>
            <button className='button-edit' onClick={() => handleedit(todo)}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className='button-delete' onClick={() => handledelete(todo)}>
              <FontAwesomeIcon icon={faTrashCan} /> 
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Todolist;
