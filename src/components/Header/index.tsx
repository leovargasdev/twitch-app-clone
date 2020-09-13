import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { useTheme } from 'styled-components';

import { Container, Avatar, OnlineStatus, RightSide, Button } from './styles';

const Header: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <Avatar>
        <OnlineStatus />
      </Avatar>

      <RightSide>
        <Button>
          <MaterialIcons name="notifications-none" size={26} color={colors.secondary} />
        </Button>
        <Button>
          <MaterialIcons name="notifications-none" size={26} color={colors.secondary} />
        </Button>
        <Button>
          <MaterialIcons name="notifications-none" size={26} color={colors.secondary} />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;