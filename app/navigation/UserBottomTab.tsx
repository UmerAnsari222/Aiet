import {View, Text, Platform} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CompanyProfileScreen from '../screens/Company/CompanyProfileScreen';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {
  Activity,
  AddEmploy,
  Home1,
  Profile,
  Setting,
  SolarCalendar,
  Stats,
} from '../../assets/icons/icons';
import {Font_BOLD} from '../themes/typogrphy';
import CompanyStatScreen from '../screens/Company/CompanyStatScreen';
import CompanyAddEmployeeScreen from '../screens/Company/CompanyAddEmployeeScreen';
import CompanySettingScreen from '../screens/Company/CompanySettingScreen';
import UserHomeScreen from '../screens/User/UserHomeScreen';
import Working from '../components/Working';

const Tab = createBottomTabNavigator();

export default function UserBottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="UserHomeScreen"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const rn = route.name;
          let Icon = Home1;

          if (rn === 'UserHomeScreen') {
            Icon = Home1;
          } else if (rn === 'UserCalendarScreen') {
            Icon = SolarCalendar;
          } else if (rn === 'UserCreateAddScreen') {
            Icon = AddEmploy;
          } else if (rn === 'UserChatsScreen') {
            Icon = Activity;
          } else if (rn === 'UserProfileScreen') {
            Icon = Profile;
          }

          return <Icon fill={focused ? '#E3851E' : '#FBD9B3'} />;
        },
        tabBarStyle: {
          backgroundColor: '#F6F6F6',
          // borderTopStartRadius: 20,
          // borderTopEndRadius: 20,
          borderTopColor: '#D07D36',
          borderWidth: 1.5,
          height:
            Platform.OS === 'ios'
              ? heightPercentageToDP('10')
              : heightPercentageToDP('10'),
        },
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#E3851E',
        tabBarInactiveTintColor: '#FBD9B3',
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            fontFamily: Font_BOLD,
            fontWeight: '900',
            marginBottom: 15,
          },
        }}
        name="UserHomeScreen"
        component={UserHomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Calendar',
          tabBarLabelStyle: {
            fontFamily: Font_BOLD,
            fontWeight: '900',
            marginBottom: 15,
          },
        }}
        name="UserCalendarScreen"
        component={Working}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Create',
          tabBarLabelStyle: {
            fontFamily: Font_BOLD,
            fontWeight: '900',
            marginBottom: 15,
          },
        }}
        name="UserCreateAddScreen"
        component={Working}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Chats',
          tabBarLabelStyle: {
            fontFamily: Font_BOLD,
            fontWeight: '900',
            marginBottom: 15,
          },
        }}
        name="UserChatsScreen"
        component={Working}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {
            fontFamily: Font_BOLD,
            fontWeight: '900',
            marginBottom: 15,
          },
        }}
        name="UserProfileScreen"
        component={Working}
      />
    </Tab.Navigator>
  );
}
