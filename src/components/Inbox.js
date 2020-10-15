import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Tasks from 'components/Tasks';
import { useTasks } from 'hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#171717',
  },
}));

export const Inbox = () => {
  const { tasks } = useTasks('1');
  let projectName = '';

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
        <Tasks />
      </div>
    </>
  );
};

export default Inbox;
