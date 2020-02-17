import React from 'react';
import styles from './CharacterDetail.css';
import PropTypes from 'prop-types';
import { useCharacter } from '../../hooks/charactersList';


const CharacterDetail = ({ match }) => {
  const { selectedCharacter } = useCharacter(match.params.id);

  return (
    <div className={styles.CharacterDetail}>
      <h1>{selectedCharacter.name}</h1>
      <img src={selectedCharacter.image}/>
      <ul>
        <li>Species: {selectedCharacter.species}</li>
        <li>Status: {selectedCharacter.status}</li>
        <li>Gender: {selectedCharacter.gender}</li>
      </ul>
    </div>
  );
};

CharacterDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default CharacterDetail;
