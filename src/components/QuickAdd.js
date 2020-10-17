import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  InputBase,
  makeStyles,
  Button,
  IconButton,
} from '@material-ui/core';
import { AiOutlineClose } from 'react-icons/ai';

const useStyles = makeStyles((theme) => ({
  editArea: {
    border: '1px',
    borderRadius: '10px',
    backgroundColor: '#171717',
    marginLeft: '25px',
    marginRight: '25px',
    marginBottom: '20px',
  },
  buttonContainer: {
    marginLeft: '25px',
    marginBottom: '20px',
  },
  buttonBase: {
    backgroundColor: '#de4c4a',
    color: '#ffffff',
    textTransform: 'none',
  },
  headerArea: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export const QuickAdd = (props) => {
  const { handleClose, modalState } = props;
  //need to set a buttonState for disabled button unless there is input
  const styles = useStyles();
  return (
    <Dialog
      onClose={handleClose}
      open={modalState}
      fullWidth
      PaperProps={{ style: { backgroundColor: '#1f1f1f' } }}
      maxWidth='sm'
    >
      <div className={styles.headerArea}>
        <DialogTitle>Quick Add Task</DialogTitle>
        <IconButton classes={{ style: { backgroundColor: '#ffffff' } }} color='secondary'>
          <AiOutlineClose />
        </IconButton>
      </div>

      {/* give this div a rounded border */}
      <div className={styles.editArea}>
        <DialogContent>
          <InputBase placeholder='e.g. Read every day ' />
        </DialogContent>
      </div>
      <div className={styles.buttonContainer}>
        <Button variant='contained' className={styles.buttonBase}>
          Add Task
        </Button>
      </div>
    </Dialog>
  );
};

export default QuickAdd;
