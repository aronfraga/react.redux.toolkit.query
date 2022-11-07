import React from 'react';
import Pagination from './Pagination';

const Footer = ({ inHome }) => {

  return(
    <nav className='navbar bg-dark fixed-bottom' style={{ height: '3.4rem' }}>
      <div className='container d-flex justify-content-center'>
        <Pagination inHome={inHome} />
      </div>
    </nav>
  )
}

export default Footer;