import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '100px 20px 30px',
  },
}));

const ProfileDetail = ({ userDetail, loading, repos }) => {
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
        {!loading ? (
          <img
            src={avatar_url}
            alt="profile"
            style={{ height: '150px', marginRight: '50px' }}
          />
        ) : (
          <h2 style={{ textAlign: 'center' }}>...</h2>
        )}
        <Box style={{ marginLeft: '50px' }}>
          {name && <Typography variant="h5">Name: {name} </Typography>}
          <Typography variant="h5">Username: {login} </Typography>
          <Typography variant="h5">Followers: {followers}</Typography>
          <Typography variant="h5">Followings: {following}</Typography>
          {location && (
            <Typography variant="h5">Location: {location}</Typography>
          )}
          {email && <Typography variant="h5">Email: {email}</Typography>}
          {bio && <Typography variant="h5">Bio: {bio}</Typography>}
        </Box>
      </Box>

      <Typography variant="h5" style={{ textAlign: 'center' }}>
        Repositories:
      </Typography>
      {!loading ? (
        <Box style={{ textAlign: 'center' }}>
          {repos &&
            repos.map((repo) => (
              <li style={{ listStyleType: 'none' }} key={repo.id}>
                <Typography variant="body2">
                  {repo.full_name.split('/')[1]}
                </Typography>
              </li>
            ))}
        </Box>
      ) : (
        <h2 style={{ textAlign: 'center' }}>...</h2>
      )}
    </div>
  );
};

export default ProfileDetail;
