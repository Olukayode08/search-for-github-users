import React from 'react';
import { GithubContextApi } from '../context/context';
import styled from 'styled-components';
import {FaTwitter } from 'react-icons/fa';
import {motion} from 'framer-motion'
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
import { useContext } from 'react';

const linkVariants={
  hidden: {
    opacity: 0,
    y: '100vh'
  },
  visible:{
      opacity: 1,
      y: 0,
      transition:{
        duration: 1,
        type: 'spring',
        stiffness: 30,
      }
  }
}
const infoVariant = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      type: 'spring',
      stiffness: 50,
    },
  },
};
const Card = () => {
  const {githubUser} = useContext(GithubContextApi)
  const {avatar_url, name, html_url, company, blog, bio, location, twitter_username } = githubUser

  return (
    <Wrapper>
      <motion.article
        className='article'
        transition={{ staggerChildren: 0.3 }}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.header variants={infoVariant}>
          <div className='about-user'>
            <img src={avatar_url} alt={name} />
            <div className='user-info'>
              <h4 className='location'>{name}</h4>
              <p className='location'>
                <FaTwitter />@{twitter_username}
              </p>
            </div>
          </div>
          <a className='follow' href={html_url}>
            Follow
          </a>
        </motion.header>
        <motion.p className='bio' variants={linkVariants}>
          {bio}
        </motion.p>
        <div className='about'>
          <motion.div variants={linkVariants} className='location'>
            <p>
              <MdBusiness className='icon' />
            </p>
            <p className='text'>{company}</p>
          </motion.div>
          <motion.div variants={linkVariants} className='location'>
            <p>
              <MdLocationOn className='icon' />
            </p>
            <p className='text'>{location}</p>
          </motion.div>
          <motion.div variants={linkVariants} className='location'>
            <p>
              <MdLink className='icon' />
            </p>
            <a className='text' href={`https://${blog}`}>
              {blog}
            </a>
          </motion.div>
        </div>
      </motion.article>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  padding: 10px;
  margin-top: 20px;
  border-radius: 50px;
  .follow {
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 20px;
    :hover {
      scale: 1.09;
    }
  }
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    .about-user {
      display: flex;
      align-items: center;
      justify-content: center;
      .user-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
    h4 {
      font-size: 20px;
    }
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    a {
      color: blue;
      text-decoration: none;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      cursor: pointer;
      color: #000;
    }
  }
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .bio {
    max-width: 350px;
    text-align: center;
    margin: auto;
  }
  .location {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 0px;
    height: 30px;
    margin: 5px 0;
    .text {
      padding: 0 10px;
      text-decoration: none;
    }
    .icon {
      font-size: 25px;
    }
  }
`;
export default Card;
