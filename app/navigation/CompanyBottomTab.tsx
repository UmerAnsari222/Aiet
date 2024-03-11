import {View, Text, Platform} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CompanyProfileScreen from '../screens/Company/CompanyProfileScreen';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {AddEmploy, Profile, Setting, Stats} from '../../assets/icons/icons';
import {Font_BOLD} from '../themes/typogrphy';
import CompanyStatScreen from '../screens/Company/CompanyStatScreen';
import CompanyAddEmployeeScreen from '../screens/Company/CompanyAddEmployeeScreen';
import CompanySettingScreen from '../screens/Company/CompanySettingScreen';

const Tab = createBottomTabNavigator();

export default function CompanyBottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="CompanyProfileScreen"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const rn = route.name;
          let Icon = Profile;

          if (rn === 'CompanyProfileScreen') {
            Icon = Profile;
          } else if (rn === 'CompanyStatScreen') {
            Icon = Stats;
          } else if (rn === 'CompanyAddEmployeeScreen') {
            Icon = AddEmploy;
          } else if (rn === 'CompanySettingScreen') {
            Icon = Setting;
          }
          // else if (rn === 'OngoingScreen') {
          //     Icon = ElectionRepo;
          //   } else if (rn === 'ProfileScreen') {
          //     Icon = SmProfileIcon;
          //   }

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
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {
            fontFamily: Font_BOLD,
            fontWeight: '900',
            marginBottom: 15,
          },
        }}
        name="CompanyProfileScreen"
        component={CompanyProfileScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Stats',
          tabBarLabelStyle: {
            fontFamily: Font_BOLD,
            fontWeight: '900',
            marginBottom: 15,
          },
        }}
        name="CompanyStatScreen"
        component={CompanyStatScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Add Employee',
          tabBarLabelStyle: {
            fontFamily: Font_BOLD,
            fontWeight: '900',
            marginBottom: 15,
          },
        }}
        name="CompanyAddEmployeeScreen"
        component={CompanyAddEmployeeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Settings',
          tabBarLabelStyle: {
            fontFamily: Font_BOLD,
            fontWeight: '900',
            marginBottom: 15,
          },
        }}
        name="CompanySettingScreen"
        component={CompanySettingScreen}
      />
    </Tab.Navigator>
  );
}
