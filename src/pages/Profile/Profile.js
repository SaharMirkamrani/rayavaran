import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileDetail from './ProfileDetail';

const baseUrl = `https://api.github.com/users`;

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userDetail, setUserDetail] = useState({});
  const history = useHistory()
  const { username } = useParams();

  let url = `${baseUrl}/${username}`;

  const getProfile = () => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setUserDetail(res.data);
        setIsLoading(false);
        console.log(res.data)
      })
      .catch((err) => {
        history.push('')
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <ProfileDetail userDetail={userDetail} loading={isLoading} />
    </>
  );
};
export default Profile;
