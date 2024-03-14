import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import ChooseCompanyScreen from '../screens/ChooseCompanyScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import VerifyScreen from '../screens/ForgotPasswordScreen/VerifyScreen';
import ResetPasswordScreen from '../screens/ForgotPasswordScreen/ResetPasswordScreen';
import CompanyBottomTab from './CompanyBottomTab';
import CompanyAboutUsScreen from '../screens/Company/CompanyAboutUsScreen';
import CompanyFaqScreen from '../screens/Company/CompanyFaqScreen';
import CompanyChangePasswordScreen from '../screens/Company/CompanyChangePasswordScreen';
import CompanyEditScreen from '../screens/Company/CompanyEditScreen';
import CompanyAgentScreen from '../screens/Company/CompanyAgentScreen';
import UserBottomTab from './UserBottomTab';
import UserForSaleScreen from '../screens/User/UserForSaleScreen';
import UserForSaleSearchScreen from '../screens/User/UserForSaleScreen/UserForSaleSearchScreen';
import UserForSalePopularScreen from '../screens/User/UserForSaleScreen/UserForSalePopularScreen';
import UserForSaleFillterScreen from '../screens/User/UserForSaleScreen/UserForSaleFillterScreen';
import UserForSaleFillterSearchScreen from '../screens/User/UserForSaleScreen/UserForSaleFillterSearchScreen';
import UserForRentScreen from '../screens/User/UserForRentScreen';
import UserForRentSearchScreen from '../screens/User/UserForRentScreen/UserForRentSearchScreen';
import UserForRentPopularScreen from '../screens/User/UserForRentScreen/UserForRentPopularScreen';
import UserForRentFillterScreen from '../screens/User/UserForRentScreen/UserForRentFillterScreen';
import UserForRentFillterSearchScreen from '../screens/User/UserForRentScreen/UserForRentFillterSearchScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import PropertyDetailScreen from '../screens/PropertyDetailScreen/PropertyDetailScreen';
import OwnerDetailScreen from '../screens/OwnerDetailScreen';
import ChatScreen from '../screens/ChatScreen';
import ClientChatScreen from '../screens/User/ChatsScreen/ClientChatScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const [splashFinished, setSplashFinished] = useState(false);

  useEffect(() => {
    // Simulate splash screen finishing after 3 seconds
    setTimeout(() => {
      setSplashFinished(true);
    }, 3000);
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SplashScreen">
      {!splashFinished && (
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      )}

      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />

      <Stack.Screen
        name="ChooseCompanyScreen"
        component={ChooseCompanyScreen}
      />

      <Stack.Group>
        <Stack.Screen name="CompanyBottomTab" component={CompanyBottomTab} />
        <Stack.Screen
          name="CompanyAboutUsScreen"
          component={CompanyAboutUsScreen}
        />
        <Stack.Screen name="CompanyFaqScreen" component={CompanyFaqScreen} />
        <Stack.Screen
          name="CompanyChangePasswordScreen"
          component={CompanyChangePasswordScreen}
        />
        <Stack.Screen name="CompanyEditScreen" component={CompanyEditScreen} />
        <Stack.Screen
          name="CompanyAgentScreen"
          component={CompanyAgentScreen}
        />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name="UserBottomTab" component={UserBottomTab} />
        <Stack.Screen name="UserForSaleScreen" component={UserForSaleScreen} />
        <Stack.Screen
          name="UserForSaleSearchScreen"
          component={UserForSaleSearchScreen}
        />
        <Stack.Screen
          name="UserForSalePopularScreen"
          component={UserForSalePopularScreen}
        />
        <Stack.Screen
          name="UserForSaleFillterScreen"
          component={UserForSaleFillterScreen}
        />
        <Stack.Screen
          name="UserForSaleFillterSearchScreen"
          component={UserForSaleFillterSearchScreen}
        />

        <Stack.Screen name="UserForRentScreen" component={UserForRentScreen} />
        <Stack.Screen
          name="UserForRentSearchScreen"
          component={UserForRentSearchScreen}
        />
        <Stack.Screen
          name="UserForRentPopularScreen"
          component={UserForRentPopularScreen}
        />
        <Stack.Screen
          name="UserForRentFillterScreen"
          component={UserForRentFillterScreen}
        />
        <Stack.Screen
          name="UserForRentFillterSearchScreen"
          component={UserForRentFillterSearchScreen}
        />
        <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
        <Stack.Screen
          name="PropertyDetailScreen"
          component={PropertyDetailScreen}
        />
        <Stack.Screen name="OwnerDetailScreen" component={OwnerDetailScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="ClientChatScreen" component={ClientChatScreen} />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen name="VerifyScreen" component={VerifyScreen} />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigation;
