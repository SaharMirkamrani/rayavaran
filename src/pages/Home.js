import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '100px',
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <Box>
      <form className={classes.root}>
        <TextField
          style={{ width: '400px' }}
          id="outlined-basic"
          placeholder="Please enter the desired username"
          variant="outlined"
        />
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}
