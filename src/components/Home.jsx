import React from 'react';
import CharactersList from './CharactersList';
import Footer from './Footer';
import NavBar from './NavBar';

const Home = () => {
  return(
    <div>
      <NavBar inHome={true} />
      <CharactersList />
      <Footer inHome={true} />
    </div>
  )
}

export default Home;