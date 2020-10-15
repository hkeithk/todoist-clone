import React from 'react';
import db from 'services/firebase';
import MuiCheckbox from '@material-ui/core/Checkbox';

export const Checkbox = (id) => {
  const archiveTask = () => {
    db.collection('tasks').doc(id).update({ archived: true });
  };

  return (
    <div>
      <MuiCheckbox onClick={() => archiveTask()} />
    </div>
  );
};

export default Checkbox;
