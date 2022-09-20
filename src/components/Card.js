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
          <div className='user-info'>
            <img src={avatar_url} alt={name} />
          </div>
          <div className='user-info'>
            <h4 className='location'>{name ? name : 'Name not found'}</h4>
            <p className='location'>
              <FaTwitter />{twitter_username ? `@${twitter_username}` : 'Unavailable'}
            </p>
          </div>
        </motion.header>
        <a className='follow' href={html_url}>
          Preview
        </a>
        <motion.p className='bio' variants={linkVariants}>
          {bio}
        </motion.p>
        <div className='about'>
          <motion.div variants={linkVariants} className='location'>
            <p>
              <MdBusiness className='icon' />
            </p>
            <p className='text'>{company ? company : 'No company found'}</p>
          </motion.div>
          <motion.div variants={linkVariants} className='location'>
            <p>
              <MdLocationOn className='icon' />
            </p>
            <p className='text'>{location ? location : 'No location found'}</p>
          </motion.div>
          <motion.div variants={linkVariants} className='location'>
            <p>
              <MdLink className='icon' />
            </p>
            <a className='text' href={`https://${blog}`}>
              {blog ? blog : 'Portfolio not found'}
            </a>
          </motion.div>
        </div>
      </motion.article>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .follow {
    border: 1px solid black;
    border-radius: 10px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    max-width: 100px;
    margin: auto;
    padding: 7px 10px;
    border-radius: 1rem;
    cursor: pointer;
    :hover {
      scale: 1.09;
    }
  }
  header {
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
    max-width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 5px 0px;
    height: 30px;
    margin: auto;
    .text {
      padding-left: 5px;
      text-decoration: none;
    }
    .icon {
      font-size: 25px;
    }
  }
`;
export default Card;
