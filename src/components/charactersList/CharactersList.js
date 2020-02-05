import React from 'react';
import styles from './CharactersList.css';
import { useCharacters } from '../../hooks/charactersList';

const CharactersList = () => {
  const { charactersArray } = useCharacters();

  return (
    <div className={styles.CharactersArray}>
      { charactersArray.length ? 
        charactersArray.map(({ name, image }) => { 
          return <div key={name}>
            <h2>{name}</h2>
            <img src={image}/>
          </div>;}) : null
      }
    </div>
  );
};

export default CharactersList;
