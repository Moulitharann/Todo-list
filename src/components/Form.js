import React, { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const Form = ({ input, setinput, todos, settodos, editodo, setedittodo }) => {

  useEffect(() => {
    if (editodo) {
      setinput(editodo.title); // Populate input when editing
    } else {
      setinput(""); // Clear input if not editing
    }
  }, [setinput, editodo]);

  const oninputchange = (e) => {
    setinput(e.target.value); // Handle input change
  };

  const updatetodo = (title, id, completed) => {
    const newtodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    settodos(newtodo);
    setedittodo(""); // Reset edit state
  };

  const onformsubmit = (e) => {
    e.preventDefault();
    if (!editodo) {
      // Add new todo if not editing
      settodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setinput(""); // Reset input
    } else {
      // Update existing todo
      updatetodo(input, editodo.id, editodo.completed);
    }
  };

  return (
    <form onSubmit={onformsubmit} style={{alignItems:"center",justifyContent:"center"}}>
      <input
        type='text'
        placeholder="Write the content"
        className="task-input"
        value={input}
        required
        onChange={oninputchange}
      />
      <button className="button-add" type="submit">
        {editodo ? "OK" : "Add"}
      </button>
    </form>
  );
};

export default Form;
