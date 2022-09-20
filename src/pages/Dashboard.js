import React from 'react';
import { Info, Search, Card, Loading } from '../components';
import {GithubContextApi } from '../context/context';
import { useContext } from 'react';
import image from '../logo.png';


const Dashboard = () => {
    const { loading } = useContext(GithubContextApi);
    if(loading){
      return (
        <>
          <h1 className='loading'>Loading...</h1>
          <main>
            <Loading />
          </main>
        </>
      );
    }
  return (
    <>
      <main>
        <div className='heading'>
        <h3 className='header'>Github Developers</h3>
        <img className='github-img' src={image} alt="Github" />
        </div>
        <Search />
        <Info />
        <Card />
      </main>
    </>
  );
};

export default Dashboard;
