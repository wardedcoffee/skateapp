/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Login from '../screens/Login';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Group>
      {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
      </Stack.Group> */}
        {/* <Stack.Screen name="LoginPage" component={LoginPage} /> */}
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  // function handleExitApp(arg0: { navigation: import("@react-navigation/native").CompositeNavigationProp<import("@react-navigation/bottom-tabs").BottomTabNavigationProp<RootTabParamList, "TabThree", undefined>, import("@react-navigation/native-stack").NativeStackNavigationProp<RootStackParamList, string, undefined>>; }): void {
  //   throw new Error('Function not implemented.');
  // }
  // const handleExitApp = ({ navigation }) => {
  //   navigation.navigate('Login');
  // };

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={() => ({
          headerShown: false,
          title: 'Destaques',
          tabBarIcon: ({ color }) => <TabBarIcon name="whatshot" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={() => ({
          headerShown: false,
          title: 'Favoritos',
          tabBarIcon: ({ color }) => <TabBarIcon name="favorite-border" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabThreeScreen}
        // options={{
          options={() => ({
          headerShown: false,
          title: 'Perfil',
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ color }) => <TabBarIcon name='person-outline' color={color} />,
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  color: string;
}) {
  return <MaterialIcons size={24} style={{ marginBottom: -3 }} {...props} />;
}
