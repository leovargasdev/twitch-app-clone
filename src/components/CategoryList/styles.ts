import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
})`
  padding: 8px 0 24px;
`;

export const Category = styled.TouchableOpacity`
  background: black;
  margin-right: 10px;
`;

export const CategoryImage = styled.Image`
  width: 98px;
  height: 130px;
`;

export const CategoryName = styled.Text`
  margin-top: 5px;
  max-width: 98px;

  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 13px;
`;

export const CategoryStatus = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RedCircle = styled.View`
  background: ${({ theme }) => theme.colors.red};
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
`;

export const CategoryStatusText = styled.Text`
  margin-left: 4px;
  padding-bottom: 1px;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.medium};
`;
