import { Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function Error() {
  const history = useHistory();
  return (
    <div
      style={{
        margin: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h2" style={{ textAlign: 'center', margin: '10px' }}>
        Oops...
      </Typography>
      <Typography style={{ textAlign: 'center' }}>User Not Found!</Typography>
      <Button
        style={{ width: '200px', margin: '20px' }}
        variant="outlined"
        color="secondary"
        onClick={() => history.push('/')}
      >
        Back To Home
      </Button>
    </div>
  );
}
