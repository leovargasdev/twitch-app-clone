import React from 'react';

import {
  Container,
  Channel,
  User,
  Avatar,
  UserInfo,
  Username,
  UserInfoUpdate,
  WhiteCircle,
} from './styles';

import channels from './content';

const ChannelList: React.FC = () => (
  <Container>
    {channels.map(channel => (
      <Channel key={channel.name}>
        <User>
          <Avatar
            source={{
              uri: `https://api.adorable.io/avatars/20/${channel.name}.png`,
            }}
          />
          <UserInfo>
            <Username>{channel.name}</Username>
            {channel.update && (
              <UserInfoUpdate>{channel.update}</UserInfoUpdate>
            )}
          </UserInfo>
        </User>

        <WhiteCircle />
      </Channel>
    ))}
  </Container>
);

export default ChannelList;
