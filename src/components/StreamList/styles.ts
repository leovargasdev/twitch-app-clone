import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Stream = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px 0;
`;

export const StreamImage = styled.Image`
  width: 119px;
  height: 60px;
`;

export const StreamContent = styled.View`
  flex-direction: column;
  flex: 1;
  margin-left: 10px;
`;

export const StreamInfo = styled.View`
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
`;

export const StreamUser = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StreamUserImage = styled.Image`
  width: 20px;
  height: 20px;
  border-radius: 10px;
`;

export const StreamUserText = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  margin-left: 5px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const StreamTitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const StreamCategory = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const StreamTags = styled.View`
  flex-direction: row;
  margin-top: 3px;
`;

export const StreamTagView = styled.View`
  background: ${({ theme }) => theme.colors.tag};
  padding: 2px 8px;
  margin-right: 3px;
  border-radius: 10px;
`;

export const StreamTagText = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 12px;
`;
