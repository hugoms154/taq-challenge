import React from 'react';
import { Button } from '../../components/Button/styles';
import CharacterCard from '../../components/CharacterCard';
import Footer from '../../components/Footer';

import { Container, ListDisplay } from './styles';

const Home: React.FC = () => (
  <>
    <Container>
      <ListDisplay>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </ListDisplay>

      <Button>Carregar mais</Button>
      <Footer />
    </Container>
  </>
);

export default Home;
