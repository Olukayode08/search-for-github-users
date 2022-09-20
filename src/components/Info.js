import React from 'react';
import { GithubContextApi } from '../context/context';
import styled from 'styled-components';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import { useContext } from 'react';
import {motion} from 'framer-motion'

const infoVariant= {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      type: 'spring',
      stiffness: 50
    }
  }
}

const UserInfo = () => {
  const {githubUser} = useContext(GithubContextApi);
  const {public_repos, followers, following, public_gists} = githubUser
  
  const items = [
    {
      id: 1,
      icon: <GoRepo className='icon' />,
      label: 'Repos',
      value: public_repos,
      color: 'pink',
    },
    {
      id: 2,
      icon: <FiUsers className='icon' />,
      label: 'Followers',
      value: followers,
      color: 'green',
    },
    {
      id: 3,
      icon: <FiUserPlus className='icon' />,
      label: 'Following',
      value: following,
      color: 'purple',
    },
    {
      id: 4,
      icon: <GoGist className='icon' />,
      label: 'Gists',
      value: public_gists,
      color: 'yellow',
    },
  ];
  
  return (
    <motion.section
      transition={{ staggerChildren: 0.3 }}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.1 }}
      className='section'
    >
      <Wrapper className='section-center'>
        {items.map((item) => {
          const { id, icon, label, value, color } = item;
          return (
            <motion.article variants={infoVariant} className='item' key={id}>
              <span className={color}>{icon}</span>
              <h3 className='label'>
                {label} ({value})
              </h3>
            </motion.article>
          );
        })}
      </Wrapper>
    </motion.section>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 30px 10px 0 10px;
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    h3{
      width: 70%;
      text-align: left;
      font-size: 18px;
    }
    .label{
      margin: 0 5px 0 20px;
    }
    .icon{
      font-size: 25px;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: #fff;
      color: #000;
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

export default UserInfo;
