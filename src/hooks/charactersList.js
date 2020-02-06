import { useEffect, useState } from 'react';
import { getCharacters, getCharacter } from '../services/apiFetch';

export const useCharacters = () => {
  const [charactersArray, setCharactersArray] = useState([]);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    getCharacters(page)
      .then(characters => setCharactersArray(characters.results));
  }, [page]);

  const handlePageChange = (direction) => {
    if(direction === 'prev' && page !== 1){
      setPage(page - 1);
      return;
    }
    else if(direction === 'next') {
      setPage(page + 1);
      return;
    }
    else return;
  };

  return { charactersArray, page, handlePageChange };
};

export const useCharacter = id => {
  const [selectedCharacter, setSelectedCharacter] = useState({});
  
  useEffect(() => {
    getCharacter(id)
      .then(character => setSelectedCharacter(character));
  }, [id]);

  return { selectedCharacter };
};
