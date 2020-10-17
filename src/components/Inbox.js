import React from 'react';
import Task from 'components/Task';
import { Typography, Divider, makeStyles, Box } from '@material-ui/core';
import { useTasks } from 'hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#363636',
  },
}));

export const Inbox = () => {
  const { tasks } = useTasks('1');
  const styles = useStyles();

  return (
    <>
      <div>
        <Typography variant='h5' color='inherit'>
          <Box fontWeight='fontWeightBold'>Inbox</Box>
        </Typography>
        {tasks.map((task) => (
          <>
            <Task task={task} taskId={task.taskId} key={task.taskId} />
            <Divider light={true} variant='middle' className={styles.root} />
          </>
        ))}
      </div>
    </>
  );
};

export default Inbox;
