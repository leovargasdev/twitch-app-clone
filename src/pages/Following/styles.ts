import { Platform, FlatList } from 'react-native';
import styled from 'styled-components/native';
import Contstants from 'expo-constants';
import { ItemFlat } from '.';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
  padding-top: ${Platform.OS === 'android' ? Contstants.statusBarHeight : 0}px;
`;

export const Content = styled.View`
  padding: 0 12px 50px;
`;

export const ComponentsList = styled(
  FlatList as new () => FlatList<ItemFlat>,
)``;

export const FollowingText = styled.Text`
  padding: 10px 0;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 30px;
`;

export const SectionText = styled.Text`
  padding: 8px 0;
  background: ${({ theme }) => theme.colors.primary};

  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.bold};
  text-transform: uppercase;
`;
