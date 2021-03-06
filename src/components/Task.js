import React, { useState } from 'react';
import Checkbox from 'components/Checkbox';
import { List, ListItemText, ListItem, makeStyles, Divider } from '@material-ui/core';
import TaskModal from 'components/TaskModal';
import { useProjects } from 'hooks';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'flex-row',
    flexGrow: 1,
  },
  taskItem: {
    flexGrow: 2,
  },
  divider: {
    backgroundColor: '#363636',
  },
}));

export const Task = (props) => {
  const styles = useStyles();
  const { task, taskId, key } = props;

  const [taskModal, setTaskModal] = useState(false);
  const projects = useProjects();

  //might need to find a better way to do this
  let projectName = '';
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].projectId === task.projectId) {
      projectName = projects[i].Name;
      break;
    }
  }

  const handleModalOpen = () => {
    setTaskModal(true);
  };

  const handleModalClose = () => {
    setTaskModal(false);
  };

  //Todo: onClick should open a dialog that shows more details for the listItem

  return (
    // <React.Fragment key={taskId}>
    <div className={styles.root}>
      {/* props intended for ButtonBase can be used for ListItem when it has a button prop */}
      <Checkbox id={taskId} />
      <List className={styles.taskItem}>
        <ListItem button key={`${taskId}`} onClick={() => handleModalOpen()}>
          <ListItemText className='container--listItem-text'>{task.task}</ListItemText>
        </ListItem>
        <Divider light={true} variant='middle' className={styles.divider} />
      </List>

      <TaskModal handleClose={handleModalClose} task={task} modalState={taskModal} name={projectName} />
    </div>
    // </React.Fragment>
  );
};

export default Task;
