import React from 'react';
import styles from './CharactersList.css';
import { useCharacters } from '../../hooks/charactersList';

const CharactersList = () => {
  const { charactersArray, page, handlePageChange } = useCharacters();

  return (
    <div className={styles.CharactersArray}>
      { charactersArray.length ? 
        charactersArray.map(({ name, image }) => { 
          return <div key={image}>
            <h2>{name}</h2>
            <img src={image}/>
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
