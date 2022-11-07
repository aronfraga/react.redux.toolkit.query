import React from 'react';
import { useState } from 'react';
//import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo_redux.png';

const NavBar = ({ inHome }) => {

  const [ input, setInput ] = useState('');
  const navigate = useNavigate();
  //const dispatch = useDispatch();
  

  function handlerOnChange(event) {
    event.preventDefault();
    setInput(event.target.value);
  }

  function handlerSearchClick(event) {
    event.preventDefault();

  }

  function handlerSearch(event) {
    event.preventDefault();
  }

  return(
    <nav className='navbar navbar-dark bg-dark fixed-top'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/home'>
          <img src={logo} alt='Logo' width='30' height='30' className='d-inline-block align-text-top mx-1'/>
          Redux Toolkit Query
        </a>
        <form className='d-flex' role='search'>
          <button hidden={inHome} type='button' className='btn btn-secondary mx-2' onClick={() => navigate('/home')}>Back</button>
          <input className='form-control me-2' type='search' placeholder='Search' onClick={(event) => handlerSearchClick(event)} onChange={(event) => handlerOnChange(event)} aria-label='Search' value={input}/>
          <button type='button' className='btn btn-warning' onClick={(event) => handlerSearch(event)}>Search</button>
        </form>
      </div>
    </nav>
  )
}

export default NavBar;