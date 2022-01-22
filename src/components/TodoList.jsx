import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList'

const TodoList = ({ todos }) => {

  const elements = todos.map((item) => {
    return (
      <li key={item.id} className='list-group-item'>
        <TodoListItem {...item } />
      </li>
    )
  })
  return (
    <ul className='list-group todo-list'>
      {elements}
    </ul>
  )
}


export default TodoList;