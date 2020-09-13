import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Contstants from 'expo-constants';

export const Container = styled.SafeAreaView`
  background: ${({theme}) => theme.colors.primary};
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? 0 : Contstants.statusBarHeight};
`;

export const Content = styled.View`
  padding: 24px;
`;

export const FollowingText = styled.Text`
  padding: 10px 0;
  color: ${({theme}) => theme.colors.secondary};
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 30px;
`;

export const SectionText = styled.Text`
  padding: 8px 0;
  background: ${({theme}) => theme.colors.primary};

  color: ${({theme}) => theme.colors.gray};
  font-family: ${({theme}) => theme.fonts.bold};
  text-transform: uppercase;
`;