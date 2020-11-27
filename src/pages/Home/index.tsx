import { gql, useQuery } from '@apollo/client';
import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '../../components/Button/styles';
import CharacterCard from '../../components/CharacterCard';
import Footer from '../../components/Footer';

import { Container, ListDisplay } from './styles';

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

interface IResponse {
  characters: {
    info: {
      pages: number;
      next: number;
      prev: number;
    };
    results: Array<ICharacter>;
  };
}

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [nextPage, setNextPage] = useState<number | null>(1);
  const query = gql`
    query($page: Int) {
      characters(page: $page) {
        info {
          next
          pages
        }
        results {
          id
          name
          image
          status
          episode {
            name
          }
        }
      }
    }
  `;

  const { data, loading } = useQuery<IResponse>(query, {
    variables: { page: nextPage },
  });

  const handleLoadNextPage = useCallback(() => {
    if (data?.characters.info.next) {
      setNextPage(data.characters.info.next);
    } else setNextPage(null);

    if (data) {
      const newCharacters = data.characters.results;
      setCharacters([...characters, ...newCharacters]);
    }
  }, [data, characters]);

  useEffect(() => {
    if (data && characters.length === 0) {
      setCharacters(data.characters.results);
      setNextPage(data.characters.info.next);
    }
  }, [data, characters]);

  return (
    <>
      <Container>
        <ListDisplay>
          {characters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </ListDisplay>

        {nextPage && nextPage !== null ? (
          <Button disabled={loading} onClick={() => handleLoadNextPage()}>
            Load More
          </Button>
        ) : loading ? (
          <h3>Loading</h3>
        ) : (
          <h3>End of the list.</h3>
        )}
        <Footer />
      </Container>
    </>
  );
};

export default Home;
