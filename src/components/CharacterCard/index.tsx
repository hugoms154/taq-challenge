import React, { useCallback, useState } from 'react';
import CharacterDetail from '../CharacterDetail';

import { CardContainer, CardContent } from './styles';

interface ICharacter {
  id: string;
  name: string;
  image: string;
  status: 'Alive' | 'Unkown' | 'Dead';
  episode: Array<{
    id: string;
    name: string;
  }>;
}

interface CharacterCardProps {
  character: ICharacter;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const [detailVisibility, setDetailVisibility] = useState<
    'visible' | 'hidden'
  >('hidden');

  const handleDetailVisibility = useCallback(
    (value: 'visible' | 'hidden'): void => {
      setDetailVisibility(value);
    },
    [],
  );

  return (
    <>
      {detailVisibility && (
        <CharacterDetail
          setVisibility={handleDetailVisibility}
          visibility={detailVisibility}
          character={character}
        />
      )}
      <CardContainer>
        <CardContent
          status={character.status}
          onClick={() =>
            detailVisibility === 'visible'
              ? setDetailVisibility('hidden')
              : setDetailVisibility('visible')
          }
        >
          <header>
            <img src={character.image} alt="Character" />
          </header>
          <h2>{character.name}</h2>
          <footer>
            <span className="status">•</span>
            <p>{character.status}</p>
          </footer>
        </CardContent>
      </CardContainer>
    </>
  );
};

export default CharacterCard;
