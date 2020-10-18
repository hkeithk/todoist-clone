import React from 'react';
import Task from 'components/Task';
import { Typography, Box } from '@material-ui/core';
import { useTasks } from 'hooks';

export const Inbox = () => {
  const { tasks } = useTasks('1');

  return (
    <>
      <div>
        <Typography variant='h5' color='inherit'>
          <Box fontWeight='fontWeightBold'>Inbox</Box>
        </Typography>
        {/* using index not the most ideal way but solved the console err for now */}
        {tasks.map((task, index) => (
          <React.Fragment key={index}>
            <Task task={task} taskId={task.taskId} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Inbox;
