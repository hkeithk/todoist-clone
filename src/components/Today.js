import React from 'react';
import { Typography, Box } from '@material-ui/core';

export const Today = () => {
  return (
    <>
      <div>
        <Typography variant='h5' color='inherit'>
          <Box fontWeight='fontWeightBold'>Today</Box>
        </Typography>
      </div>
    </>
  );
};

export default Today;
