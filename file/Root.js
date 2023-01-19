import React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  FlatList,
  TouchableHighlight,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Discover from './Discover';
import User from './User';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const DiscoverStack = createNativeStackNavigator();
function DiscoverStackScreen() {
  return (
    <DiscoverStack.Navigator>
      <DiscoverStack.Screen name="Discover" component={Discover} />
    </DiscoverStack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const UserStack = createNativeStackNavigator();
function UserStackScreen() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="User" component={User} />
    </UserStack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <Ionicons name="albums" color={ color } size={26} />
            );
          }

          if (route.name === 'Discover') {
            return (
              <Ionicons name="aperture" color={ color } size={26} />
            );
          }

          if (route.name === 'User') {
            return (
              <Ionicons name="person" color={ color } size={26} />
            );
          }
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'black',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Discover" component={DiscoverStackScreen} />
      <Tab.Screen name="User" component={UserStackScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}