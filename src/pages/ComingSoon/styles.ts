import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Contstants from 'expo-constants';

export const Container = styled.SafeAreaView`
  background: #000;
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? 0 : Contstants.statusBarHeight};

  justify-content: center;
  align-items: center;
`;

export const Heading = styled.Text`
  color: #741;
  font-family: roboto_500;
  font-size: 30px;
`;
