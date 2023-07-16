import React from 'react';
import { useState, useContext } from "react";
import Button from './Button';
import "../styles/TodoInput.css";
import Card from './Card';
import ShoppingAppContext from '../context/ShoppingAppContext';




const TodoInput = () => {

  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const { addTodo, markTodoComplete, completedTodo } = useContext(ShoppingAppContext);
  
  const textChangeHandler = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 15) {
      setMessage("input text must be above 15 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length > 15) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: completedTodo,
      };

      addTodo(newTodo);
      //markTodoComplete(newTodo.id)
      //console.log(markTodoComplete(newTodo.id), "complete");
      setText("");
    }
  };

  return (
   
      <Card>
        <form onSubmit={formSubmit}>
          <h4 className="head">
            Kindly Add new Todo!
          </h4>


          <div className="input-group">
            <input
              onChange={textChangeHandler}
              type="text"
              placeholder="write us a review"
              value={text}
            />
            <Button type="submit" isDisabled={btnDisabled}>
              Submit
            </Button>
          </div>
          {message && <div className="message">{message}</div>}
        </form>
      </Card>
    
  );
}

export default TodoInput;