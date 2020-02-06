import React from 'react';
import styles from './CharactersList.css';
import { useCharacters } from '../../hooks/charactersList';
import { Link } from 'react-router-dom';

const CharactersList = () => {
  const { charactersArray, page, handlePageChange } = useCharacters();

  return (
    <div className={styles.CharactersArray}>
      { charactersArray.length ? 
        charactersArray.map(({ name, image, id }) => { 
          return <div key={id} >
            <Link to={`/character/${id}`} >
              <h2>{name}</h2>
              <img src={image}/>
            </Link>
          </div>;}) : null
      }
      <div>
        <button value='prev' onClick={({ target }) => handlePageChange(target.value)}>Previous</button>
        <p>{page}</p>
        <button value='next' onClick={({ target }) => handlePageChange(target.value)}>Next</button>
      </div>
    </div>
  );
};

export default CharactersList;
