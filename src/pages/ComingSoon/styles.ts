import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Contstants from 'expo-constants';

export const Container = styled.SafeAreaView`
  background: ${({theme}) => theme.colors.primary};
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? 0 : Contstants.statusBarHeight};

  justify-content: center;
  align-items: center;
`;

export const Heading = styled.Text`
  color: ${({theme}) => theme.colors.purple};
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 30px;
`;
