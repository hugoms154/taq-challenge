import React from 'react';
import Carousel from 'react-elastic-carousel';

import { Container, DetailContent, CarouselContainer } from './styles';

interface ICharacter {
  id: string;
  name: string;
  image: string;
  status: 'Alive' | 'unknown' | 'Dead';
  episode: Array<{
    id: string;
    name: string;
  }>;
}

interface ICharacterDetailProps {
  character: ICharacter;
  visibility: 'visible' | 'hidden';
  setVisibility(value: 'visible' | 'hidden'): void;
}

const CharacterDetail: React.FC<ICharacterDetailProps> = ({
  character,
  visibility,
  setVisibility,
}) => {
  return (
    <Container visibility={visibility}>
      <DetailContent>
        <span className="goBack" onClick={() => setVisibility('hidden')}>
          back
        </span>
        <img src={character.image} alt="character" />
        <main>
          <h2>{character.name}</h2>

          <span>Episodes:</span>
          <CarouselContainer>
            <Carousel
              verticalMode
              itemsToShow={2}
              itemsToScroll={1}
              itemPadding={[10, 50]}
              renderPagination={() => <></>}
            >
              {character.episode.map(ep => (
                <div key={ep.id}>{ep.name}</div>
              ))}
            </Carousel>
          </CarouselContainer>
        </main>
      </DetailContent>
    </Container>
  );
};

export default CharacterDetail;
