import React from 'react';
import Checkbox from 'components/Checkbox';
import { List, ListItemText, ListItem } from '@material-ui/core';

export const Tasks = (props) => {
  //taskId should be taken from the document Id, currently not stored inside the object
  const { text, taskId } = props;

  //Todo: onClick should open a dialog that shows more details for the listItem
  return (
    <>
      <div>
        <Checkbox />
        <List>
          <ListItem button key={`${taskId}`}>
            <ListItemText className='container--listItem-text'>{text}</ListItemText>
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default Tasks;
