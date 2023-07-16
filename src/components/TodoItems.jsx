import React from "react";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import ShoppingAppContext from "../context/ShoppingAppContext";
import Card from "./Card";

const TodoItems = ({ item }) => {
  const { deleteTodo } = useContext(ShoppingAppContext);
 
  return (
    <Card>
      <div className="num-display"></div>
      <button
        onClick={() => {
          deleteTodo(item.id);
        }}
        className="close"
      >
        <FaTimes color="#FF6A95" />
      </button>
      <p>{item.todo}</p>
    </Card>
  );
};



export default TodoItems;
