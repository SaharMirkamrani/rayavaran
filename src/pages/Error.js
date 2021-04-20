import { Typography } from '@material-ui/core';

export default function Error() {
  return (
    <div style={{ margin: '100px' }}>
      <Typography variant="h2" style={{ textAlign: 'center' }}>
        Oops...
      </Typography>
      <Typography style={{ textAlign: 'center' }}>User Not Found!</Typography>
    </div>
  );
}
