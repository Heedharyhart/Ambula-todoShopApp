import React from 'react'
import Header from '../components/Header';
import TodoList from '../components/TodoList';

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <TodoList />
      </div>
    </>
  );
}

export default HomePage