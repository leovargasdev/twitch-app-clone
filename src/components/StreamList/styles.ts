import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Stream = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px 0;
`;

export const StreamThumb = styled.View`
  width: 124px;
  height: 70px;

  position: relative;
`;

export const StreamThumbImage = styled.Image`
  width: 124px;
  height: 70px;
`;

interface StreamThumbInfoProps {
  live?: boolean;
}

export const StreamThumbInfo = styled.View<StreamThumbInfoProps>`
  position: absolute;
  flex-direction: row;
  align-items: center;
  bottom: 2px;
  ${props =>
    props.live
      ? css`
          left: 5px;
        `
      : css`
          right: 5px;
        `}
`;

export const CircleRed = styled.View`
  background: ${({ theme }) => theme.colors.red};
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
`;

export const StreamThumbInfoText = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 13px;
  padding-left: 5px;
`;

export const StreamContent = styled.View`
  flex: 1;
  flex-direction: column;
  margin-left: 10px;
`;

export const StreamInfo = styled.View`
  flex-direction: column;
  justify-content: space-between;
  height: 70px;
  padding: 2px 0;
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
  font-size: 17px;
`;

export const StreamCategory = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 15px;
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

export const StreamControll = styled.TouchableOpacity`
  height: 70px;
  padding-left: 10px;
  justify-content: center;
`;
