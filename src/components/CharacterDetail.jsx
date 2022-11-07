import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCharacterDetailQuery } from '../redux/query/api';
import NavBar from './NavBar';
import Footer from './Footer';

const CharacterDetail = () => {

  const { id } = useParams();
  const { data: apiResponse, isLoading } = useGetCharacterDetailQuery(id);

  function responseRender(){
    return (
      <div className='container d-flex justify-content-center' style={{ marginTop: '5rem' }}>
        <div className='card mb-3 border border-secondary shadow p-3 mb-5 bg-body rounded' style={{ width: '1000px' }}>
          <div className='row g-0'>
            <div className='col-md-4'>
              <img src={apiResponse[0].img} className='img-fluid rounded-start' alt='image not found'/>
            </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title fs-1'>{apiResponse[0].name}</h5>
              <p className='card-text mt-4'>Birthday: {apiResponse[0].birthday}</p>
              <p className='card-text'>Status: {apiResponse[0].status}</p>
              <p className='card-text'>Nickname: {apiResponse[0].nickname}</p>
              <p className='card-text mt-5'><small className='text-muted'>{`Last updated ${Math.ceil(Math.random()*60)} mins ago`}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }

  function spinnerRender(){
    return (
      <div className='d-flex justify-content-center mt-5'>
        <div className='spinner-border text-warning mt-5' style={{width: '6rem', height: '6rem' }} role='status'>
          <span className='sr-only'></span>
        </div>
      </div>  
    )
  }

  return (
    <div>
      <NavBar inHome={false}/>
      <br />
      {isLoading?spinnerRender():responseRender()}
      <Footer inHome={false}/>
    </div>
  )
}

export default CharacterDetail;