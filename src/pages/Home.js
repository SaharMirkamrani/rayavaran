import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Box } from '@material-ui/core';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '100px',
  },
}));

export default function Search() {
  const classes = useStyles();
  const [search, setSearch] = useState('');

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/profile/${search}`);
  };

  return (
    <Box>
      <form className={classes.root} onSubmit={(e) => handleSubmit(e)}>
        <TextField
          value={search}
          onChange={({ target }) => {
            setSearch(target.value);
          }}
          style={{ width: '400px' }}
          id="outlined-basic"
          placeholder="Please enter the desired username"
          variant="outlined"
        />
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          onSubmit={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}
