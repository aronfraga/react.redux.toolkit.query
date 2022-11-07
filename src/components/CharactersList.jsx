import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetAllCharactersQuery } from '../redux/query/api';

const CharactersList = () => {
  
  const { currentPage } = useSelector((state) => state.currentPage);
  const { data: apiResponse, isLoading } = useGetAllCharactersQuery(currentPage);

  function responseRender(){
    return (
      <div>
        <div className='container' style={{ marginTop: '5rem' }}>
          <div className='row'>
            {apiResponse?.map((data, idx) => (
              <div key={idx} className='col-md-3 mb-4'>
                <div className='card border border-secondary shadow p-3 mb-2 bg-body rounded' style={{ height: '30rem' }}>
                  <Link to={`/character/${data.char_id}`} className='card'>
                    <img src={data.img} alt='avatar' style={{ height: '18rem' }}/>
                  </Link>
                  <div className='card-body'>
                    <h5 className='card-title'>{data.name}</h5>
                    <p className='card-text'>{`Birthday: ${data.birthday}`}</p>
                    <p className='card-text'>{`Nickname: ${data.nickname}`}</p>
                    <p className='card-text'>{`Status: ${data.status}`}</p>
                  </div>
                </div>
              </div>
            ))}
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

  return isLoading?spinnerRender():responseRender();

}

export default CharactersList;