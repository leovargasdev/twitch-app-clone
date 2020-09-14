import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background: ${({ theme }) => theme.colors.primary};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.Text`
  color: ${({ theme }) => theme.colors.purple};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 30px;
`;
