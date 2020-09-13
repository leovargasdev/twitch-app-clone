import React from 'react';

import streamThumb from '../../images/stream_thumbnail.jpg';

import {
  Container,
  Stream,
  StreamImage,
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
} from './styles';

import content from './content';

const StreamList: React.FC = () => (
  <Container>
    {content.map(stream => (
      <Stream key={stream.user}>
        <StreamImage source={streamThumb} />

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

          <StreamTags>
            {stream.tags.map((tag, index) => (
              <StreamTagView key={index.toString()}>
                <StreamTagText>{tag}</StreamTagText>
              </StreamTagView>
            ))}
          </StreamTags>
        </StreamContent>
      </Stream>
    ))}
  </Container>
);

export default StreamList;
