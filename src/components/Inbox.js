import React from 'react';
import { Typography } from '@material-ui/core';
import Task from 'components/Task';
import { useTasks } from 'hooks';

export const Inbox = () => {
  const { tasks } = useTasks('1');
  // let projectName = '';
  // console.log(tasks);

  {
    /* <div>
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} />
            <span> {task.task}</span>
          </li>
        ))}
      </div> */
  }

  return (
    <>
      <div>
        <Typography variant='h4' color='inherit'>
          Inbox
        </Typography>
        {tasks.map((task) => (
          <Task text={task.task} taskId={task.id} key={task.id} />
        ))}
      </div>
    </>
  );
};

export default Inbox;
