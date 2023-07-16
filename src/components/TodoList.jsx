import React from 'react'
import { useContext } from 'react';
import ShoppingAppContext from '../context/ShoppingAppContext';
import TodoInput from './TodoInput';
import TodoItems from './TodoItems';
import "../styles/TodoItems.css"
import TodoStat from './TodoStat';

const TodoList = () => {
  const {todosItem} = useContext(ShoppingAppContext)
   if (!todosItem || todosItem.length === 0) {
     return <p>No Todo Yet</p>;
   }

  return (
    <div>
    <h2 className="container todo-headings">Create Todo</h2>
      <TodoInput />
      <TodoStat />
      {todosItem &&
        todosItem.map((data) => <TodoItems key={data.id} item={data} />)}
    </div>
  );
}

export default TodoList;