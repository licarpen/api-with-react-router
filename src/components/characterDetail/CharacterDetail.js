import React from 'react';
import PropTypes from 'prop-types';
import { useCharacter } from '../../hooks/charactersList';

const CharacterDetail = ({ match }) => {
  const { selectedCharacter } = useCharacter(match.params.id);

  return (
    <div>
      <h1>{selectedCharacter.name}</h1>
    </div>
  );
};

CharacterDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};

export default CharacterDetail;
