import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import streamThumb from '../../images/stream_thumbnail.jpg';

import {
  Container,
  Stream,
  StreamThumb,
  StreamThumbImage,
  StreamThumbInfo,
  CircleRed,
  StreamThumbInfoText,
  StreamContent,
  StreamInfo,
  StreamUser,
  StreamUserImage,
  StreamUserText,
  StreamTitle,
  StreamCategory,
  StreamTags,
  StreamTagView,
  StreamTagText,
  StreamControll,
} from './styles';

import streams from './content';

interface StreamProps {
  category: string;
  user: string;
  title: string;
  tags?: string[];
  views?: string;
  time?: string;
}

const StreamList: React.FC<{ live?: boolean }> = ({ live = false }) => {
  const { colors } = useTheme();

  const data: StreamProps[] = streams[live ? 'live' : 'off'];

  return (
    <Container>
      {data.map(stream => (
        <Stream key={stream.user}>
          <StreamThumb>
            <StreamThumbImage source={streamThumb} />
            <StreamThumbInfo live={live}>
              {live ? (
                <>
                  <CircleRed />
                  <StreamThumbInfoText>{stream.views}</StreamThumbInfoText>
                </>
              ) : (
                <StreamThumbInfoText>{stream.time}</StreamThumbInfoText>
              )}
            </StreamThumbInfo>
          </StreamThumb>

          <StreamContent>
            <StreamInfo>
              <StreamUser>
                <StreamUserImage
                  source={{
                    uri: `https://api.adorable.io/avatars/20/${stream.user}.png`,
                  }}
                />
                <StreamUserText>{stream.user}</StreamUserText>
              </StreamUser>

              <StreamTitle numberOfLines={1}>{stream.title}</StreamTitle>
              <StreamCategory>{stream.category}</StreamCategory>
            </StreamInfo>
            {live && stream.tags && (
              <StreamTags>
                {stream.tags.map((tag, index) => (
                  <StreamTagView key={index.toString()}>
                    <StreamTagText>{tag}</StreamTagText>
                  </StreamTagView>
                ))}
              </StreamTags>
            )}
          </StreamContent>
          {live && (
            <StreamControll>
              <FontAwesome5 name="ellipsis-v" size={18} color={colors.gray} />
            </StreamControll>
          )}
        </Stream>
      ))}
    </Container>
  );
};

export default StreamList;
