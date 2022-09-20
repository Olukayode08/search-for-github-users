import React from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { GithubContextApi } from '../context/context';
import { useState } from 'react';
import { useContext } from 'react';
const Search = () => {
  const [user, setUser] = useState('')
  const {searchGithubUser, error, loading} = useContext(GithubContextApi)

  const submitForm = (e)=>{
    e.preventDefault()
    if (user) {
      searchGithubUser(user)
    }
  }
  return (
    <section>
      <Wrapper className='section-center'>
        <ErrorWrapper>{error.show && <p>{error.msg}</p>}</ErrorWrapper>
        <form onSubmit={submitForm}>
          <div className='form-control'>
            <MdSearch className='search'/>
            <input
              type='text'
              placeholder='Enter Github user'
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {!loading && <button type='submit'>Search</button>}
          </div>
        </form>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  .form-control {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    padding: 0.5rem;
    input {
      border-color: transparent;
      :focus {
        outline: none;
      }
    }

    input::placeholder {
      color: #000;
      text-transform: capitalize;
    }
    button {
      border-radius: 5px;
      border-color: transparent;
      padding: 5px 10px;
      text-transform: capitalize;
      background: #000;
      border-radius: 20px;
      cursor: pointer;
      font-size: 17px;
      color: #fff;
      :active{
        scale: 1.07;
      }
    }
    input,
    button {
      font-size: 1.3rem;
    }
    .search {
      font-size: 2rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
`;
const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: red;
  }
`;
export default Search;
