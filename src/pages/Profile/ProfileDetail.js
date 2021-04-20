import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '100px 20px 30px',
  },
}));

const ProfileDetail = ({ userDetail, loading }) => {
  const {
    name,
    login,
    following,
    followers,
    avatar_url,
    email,
		location,
    bio,
  } = userDetail;
  const classes = useStyles();
  return (
		<div>
      <Box className={classes.info}>
        <img src={avatar_url} alt="profile" style={{ height: '150px' }} />
        <Box>
          <Typography variant="h5">Name: {name} </Typography>
          <Typography variant="h5">Username: {login} </Typography>
          <Typography variant="h5">Followers: {followers}</Typography>
          <Typography variant="h5">Followings: {following}</Typography>
					<Typography variant="h5">Location: {location}</Typography>
          {email && <Typography variant="h5">Email: {email}</Typography>}
        </Box>
      </Box>
      {bio && (
        <Typography variant="h5" style={{ textAlign: 'center' }}>
          Bio: {bio}
        </Typography>
      )}
    </div>
  );
};

export default ProfileDetail;
