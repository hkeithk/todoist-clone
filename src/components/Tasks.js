import React from 'react';
import Checkbox from 'components/Checkbox';
import { useTasks } from 'hooks';

export const Tasks = () => {
  const { tasks } = useTasks('1');
  let projectName = '';

  return (
    <div className='tasks'>
      <h2>{projectName}</h2>
      <ul>
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} />
            <span> {task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;