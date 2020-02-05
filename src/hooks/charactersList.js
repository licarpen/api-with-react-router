import { useEffect, useState } from 'react';
import { getCharacters } from '../services/apiFetch';

export const useCharacters = () => {
  const [charactersArray, setCharactersArray] = useState([]);

  useEffect(() => {
    getCharacters(1)
      .then(characters => setCharactersArray(characters.results));
  }, []);

  return { charactersArray };
};
