import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { useTheme } from 'styled-components';

import {
  Container,
  Avatar,
  AvatarImage,
  OnlineStatus,
  ContentIcons,
  ButtonIcon,
} from './styles';

const Header: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <Avatar>
        <AvatarImage />
        <OnlineStatus />
      </Avatar>

      <ContentIcons>
        <ButtonIcon>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.secondary}
          />
        </ButtonIcon>

        <ButtonIcon>
          <MaterialIcons
            name="chat-bubble-outline"
            size={26}
            color={colors.secondary}
          />
        </ButtonIcon>

        <ButtonIcon>
          <MaterialIcons name="search" size={26} color={colors.secondary} />
        </ButtonIcon>
      </ContentIcons>
    </Container>
  );
};

export default Header;
