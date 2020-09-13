import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Following from './pages/Following';
import Empty from './pages/Empty';

const { Navigator, Screen } = createBottomTabNavigator();

const IconNav = ({name, ...props}: {name: string}) => (
  <MaterialCommunityIcons name={name} {...props}/>
);

const Routes: React.FC = () => {
  const {colors, fonts} = useTheme();
  return (
    <NavigationContainer>
      <Navigator tabBarOptions={{
        style: {
          backgroundColor: colors.primary,
          borderTopWidth: 0,
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: fonts.regular,
          fontSize: 11,
        },
        inactiveTintColor: colors.secondary,
        activeTintColor: colors.purple
      }}>
        <Screen name="Following" component={Following} options={{
          tabBarIcon: ({...props}) => <IconNav name="heart" {...props}/>
        }}
        />
        <Screen name="Discover" component={Empty} options={{
          tabBarIcon: ({...props}) => <IconNav name="compass-outline" {...props}/>
        }}
        />
        <Screen name="Browse" component={Empty} options={{
          tabBarIcon: ({...props}) => <IconNav name="magnify" {...props}/>
        }}
        />
        <Screen name="Esports" component={Empty} options={{
          tabBarIcon: ({...props}) => <IconNav name="trophy-outline" {...props}/>
        }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
