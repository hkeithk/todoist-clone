import React from 'react';
import {
  Dialog,
  DialogContent,
  Typography,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Tabs,
  Tab,
} from '@material-ui/core';
import Checkbox from 'components/Checkbox';

const useStyles = makeStyles(() => ({
  header: {
    display: 'flex',
    flexDirection: 'flex-column',
  },
  content: {
    display: 'flex',
    flexDirection: 'flex-row',
    flexGrow: 1,
  },
  taskItem: {
    flexGrow: 2,
  },
}));

export const TaskModal = (props) => {
  const { task, handleClose, modalState, name } = props;
  const styles = useStyles();

  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleEditContent = () => {};

  return (
    <Dialog
      open={modalState}
      onClose={handleClose}
      fullWidth={true}
      PaperProps={{ style: { backgroundColor: '#363636' } }}
      maxWidth='md'
    >
      <DialogTitle>
        <Typography>{name}</Typography>
      </DialogTitle>
      <DialogContent className={styles.content}>
        <Checkbox id={task.id} />
        <List className={styles.taskItem}>
          <ListItem button onClick={() => handleEditContent()}>
            <ListItemText>{task.task}</ListItemText>
          </ListItem>
        </List>
      </DialogContent>
      <div className='task-tabs'>
        <Tabs centered value={value} onChange={handleTabChange}>
          <Tab value={0} label='Sub-Tasks' />
          <Tab value={1} label='Comments' />
          <Tab value={2} label='Activity' />
        </Tabs>
      </div>
    </Dialog>
  );
};

export default TaskModal;
