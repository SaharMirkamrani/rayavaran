import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileDetail from './ProfileDetail';

const url = `https://api.github.com/users`;

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userDetail, setUserDetail] = useState({});
  const [repos, setRepos] = useState([]);
  const history = useHistory();
  const { username } = useParams();

  const getProfile = () => {
    setIsLoading(true);
    axios
      .get(`${url}/${username}`)
      .then((res) => {
        setUserDetail(res.data);
        setIsLoading(false);
        getRepos();
      })
      .catch((err) => {
        setIsLoading(false);
        history.push('/Error');
      });
  };

  const getRepos = () => {
    setIsLoading(true);
    axios
      .get(`${url}/${username}/repos`)
      .then((res) => {
        setRepos(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <ProfileDetail
        userDetail={userDetail}
        loading={isLoading}
        repos={repos}
      />
    </>
  );
};
export default Profile;
