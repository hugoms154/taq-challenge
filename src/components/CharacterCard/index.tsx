import React from 'react';

import { CardContainer, CardContent } from './styles';

interface ICharacter {
  id: string;
  name: string;
  image: string;
  status: 'Alive' | 'Unkown' | 'Dead';
}

interface CharacterCardProps {
  character: ICharacter;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => (
  <>
    <CardContainer>
      <CardContent status={character.status}>
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

export default CharacterCard;
