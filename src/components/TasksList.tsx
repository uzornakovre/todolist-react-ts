import React from 'react';
import Task from './Task';

function TasksList () {
  return (
    <ul className='taskslist'>
      <li className='taskslist__item'>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </li>
    </ul>
  );
}

export default TasksList;