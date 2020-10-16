import React from 'react';
import Checkbox from 'components/Checkbox';
import { List, ListItemText, ListItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'flex-row',
    flexGrow: 1,
  },
  taskItem: {
    flexGrow: 2,
  },
}));

export const Task = (props) => {
  const styles = useStyles();
  const { text, taskId } = props;
  //Todo: onClick should open a dialog that shows more details for the listItem

  return (
    <>
      {/* props intended for ButtonBase can be used for ListItem when it has a button prop */}
      <div className={styles.root}>
        <Checkbox />
        <List className={styles.taskItem}>
          <ListItem button key={`${taskId}`}>
            <ListItemText className='container--listItem-text'>{text}</ListItemText>
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default Task;
