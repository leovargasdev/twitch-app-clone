/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/display-name */
import React from 'react';
import { View } from 'react-native';

import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList';
import StreamList from '../../components/StreamList';
import ChannelList from '../../components/ChannelList';

import {
  Container,
  Content,
  ComponentsList,
  FollowingText,
  SectionText,
} from './styles';

export interface ItemFlat {
  key: string;
  render: () => JSX.Element;
}

const Following: React.FC = () => {
  const itemsFlat: ItemFlat[] = [
    {
      key: 'TitleFollowing',
      render: () => <FollowingText>Seguindo</FollowingText>,
    },

    {
      key: 'SectionCategories',
      render: () => <SectionText>Categorias Seguidas</SectionText>,
    },
    { key: 'Categories', render: () => <CategoryList /> },

    {
      key: 'SectionLiveChannels',
      render: () => <SectionText>Canais ao Vivo</SectionText>,
    },
    { key: 'LiveChannels', render: () => <StreamList /> },

    {
      key: 'SectionContinueWatching',
      render: () => <SectionText>Continuar Assistindo</SectionText>,
    },
    { key: 'ContinueWatching', render: () => <StreamList /> },

    {
      key: 'SectionOfflineChannels',
      render: () => <SectionText>Canais Offline</SectionText>,
    },
    { key: 'OfflineChannels', render: () => <ChannelList /> },
  ];

  return (
    <Container>
      <Content>
        <Header />
        <ComponentsList
          data={itemsFlat}
          renderItem={({ item }) => item.render()}
          keyExtractor={item => item.key}
          stickyHeaderIndices={[1, 3, 5, 7]}
          onRefresh={() => {}}
          refreshing={false}
        />
      </Content>
    </Container>
  );
};

export default Following;
