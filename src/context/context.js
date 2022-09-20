import React, { useState } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = `https://api.github.com`;
const GithubContextApi = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });

  function showError(show = false, msg = '') {
    setError({ show, msg });
  }

  const searchGithubUser = async (user) => {
    showError();
    setLoading(true);
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err)
    );
    if (response) {
      setGithubUser(response.data);
      const { login, followers_url } = response.data;
      await Promise.allSettled([
        axios(`${rootUrl}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ]).then((results) => {
        const [repos, followers] = results;
        const status = 'fulfilled';
        if (repos.status === status) {
          setRepos(repos.value.data);
        }
        if (followers.status === status) {
          setFollowers(followers.value.data);
        }
      });
    } else {
      showError(true, 'This user does not exist');
    }
    setLoading(false);
  };

  return (
    <GithubContextApi.Provider
      value={{ githubUser, repos, followers, searchGithubUser, error, loading }}
    >
      {children}
    </GithubContextApi.Provider>
  );
};
export { GithubProvider, GithubContextApi };
