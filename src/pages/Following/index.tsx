import React from 'react';

import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList';
import StreamList from '../../components/StreamList';

import { Container, Content, FollowingText, SectionText } from './styles';

const Following: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header />
        <FollowingText>Seguindo</FollowingText>

        <SectionText>Categorias Seguidas</SectionText>
        <CategoryList />

        <SectionText>Canais Online</SectionText>
        <StreamList />

        <SectionText>Continuar Assistindo</SectionText>
        <SectionText>Canais Offline</SectionText>
      </Content>
    </Container>
  );
};

export default Following;
