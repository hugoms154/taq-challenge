import React from 'react';

import { CardContainer, CardContent } from './styles';

const CharacterCard: React.FC = () => (
  <>
    <CardContainer>
      <CardContent>
        <header>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/81.jpeg"
            alt="Character"
          />
        </header>
        <h2>Crocubot</h2>
        <footer>
          <span className="status">•</span>
          <p>Situação desconhecida</p>
        </footer>
      </CardContent>
    </CardContainer>
  </>
);

export default CharacterCard;
