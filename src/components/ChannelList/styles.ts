import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Channel = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 10px;
`;

export const User = styled.View`
  flex-direction: row;
  align-items: center;
  height: 50px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const UserInfo = styled.View`
  padding-left: 10px;
  align-items: flex-start;
`;

export const Username = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 18px;
`;

export const UserInfoUpdate = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
`;

export const WhiteCircle = styled.View`
  background: ${({ theme }) => theme.colors.secondary};
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
  opacity: 0.4;
`;
