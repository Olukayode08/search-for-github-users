import React from 'react';
import { Info, Search, Card, Loading } from '../components';
import {GithubContextApi } from '../context/context';
import { useContext } from 'react';
import logo from './download.png'

const Dashboard = () => {
    const { loading } = useContext(GithubContextApi);
    if(loading){
      return (
        <main>
          <Search />
          <Loading />
        </main>
      );
    }
  return (
    <>
      <main>
        <img src={logo} alt="" />
        <Search />
        <Info />
        <Card />
      </main>
    </>
  );
};

export default Dashboard;
