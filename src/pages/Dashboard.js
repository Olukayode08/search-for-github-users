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
          <main className='load'>
          <h1 className='loading'>Loading...</h1>
            <Loading />
          </main>
        </>
      );
    }
  return (
    <>
      <main className='main'>
        <div className='heading'>
        <h3 className='header'>Github Developers</h3>
        <div className='underline'></div>
        </div>
        <Search className='border' />
        <Info />
        <Card />
      </main>
    </>
  );
};

export default Dashboard;
