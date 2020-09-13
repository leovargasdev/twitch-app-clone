import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 14px;
`;

export const Avatar = styled.TouchableOpacity`
  position: relative;
`;

export const AvatarImage = styled.Image.attrs({
  source: { uri: 'https://api.adorable.io/avatars/42/abott@adorable.png' },
})`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const OnlineStatus = styled.View`
  background: ${({ theme }) => theme.colors.green};

  width: 10px;
  height: 10px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.primary};

  position: absolute;
  bottom: 0;
  right: 0;
`;

export const ContentIcons = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonIcon = styled.TouchableOpacity`
  margin-left: 10px;
`;
