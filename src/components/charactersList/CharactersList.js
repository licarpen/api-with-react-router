import React from 'react';
import styles from './CharactersList.css';
import { useCharacters } from '../../hooks/charactersList';
import { Link } from 'react-router-dom';

const CharactersList = () => {
  const { charactersArray, page, handlePageChange } = useCharacters();

  return (
    <div className={styles.CharactersList}>
      <div className='pagination'>
        <button value='prev' onClick={({ target }) => handlePageChange(target.value)}>Prev</button>
        <span> Page {page} </span>
        <button value='next' onClick={({ target }) => handlePageChange(target.value)}>Next</button>
      </div>
      <ul>
        { charactersArray.length ? 
          charactersArray.map(({ name, image, id }) => { 
            return <li key={id} >
              <Link to={`/character/${id}`} >
                <h2>{name}</h2>
                <img src={image}/>
              </Link>
            </li>;}) : null
        }
      </ul>

    </div>
  );
};

export default CharactersList;
