import React, {useContext} from "react";
import ShoppingAppContext from "../context/ShoppingAppContext";
import "../styles/TodoStat.css";

const TodoStat = () => {
  const { todosItem } = useContext(ShoppingAppContext);
  
  let totalCompleted = todosItem.map(todo => todo.completed)
   let getCompleted =  totalCompleted.filter((todo) => todo !== false)
  
  

  return (
    <div className="todo-stats">
      <h3>Total Todos: {todosItem.length}</h3>
      <h3>Completed Todo: {getCompleted.length} </h3>
    </div>
  );
};

export default TodoStat;
