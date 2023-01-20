import React from 'react';

function Task () {
  return (
  <div className='task'>
    <input className='task__checkbox' type='checkbox' name='taskcheck' id="taskcheck"></input>
    <label className='task__content' htmlFor='taskcheck'>test task</label>
    <button className='task__remove-button' type='button'>Удалить</button>
  </div>
  )
}

export default Task;