import React     from 'react';
import NewTask  from './NewTask';
import TasksList from './TasksList';

function App() {
  return (
    <main className='page__content'>
      <NewTask />
      <TasksList />
    </main>
  );
}

export default App;
