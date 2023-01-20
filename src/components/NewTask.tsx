import React from 'react';

function NewTasks () {
  return (
    <form className='newtask'>
      <input className='newtask__input' type='text' placeholder='Введите новую задачу'></input>
      <button className='newtask__submit' type='submit'>Добавить</button>
    </form>
  )
}

export default NewTasks;