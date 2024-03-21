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
import UserSettingScreen from '../screens/User/UserProfileScreen/UserSettingScreen';
import UserEditProfileScreen from '../screens/User/UserProfileScreen/UserEditProfileScreen';
import UserChangePasswordScreen from '../screens/User/UserProfileScreen/UserChangePasswordScreen';
import UserFaqScreen from '../screens/User/UserProfileScreen/UserFaqScreen';
import UserAboutUsScreen from '../screens/User/UserProfileScreen/UserAboutUsScreen';
import HelpScreen from '../screens/User/UserProfileScreen/HelpScreen';
import UserContactUsScreen from '../screens/User/UserProfileScreen/UserContactUsScreen';
import AddTaskScreen from '../screens/User/UserCalenderScreen/AddTaskScreen';
import CreateAddForRentScreen from '../screens/User/CreateAddScreen/CreateAddForRentScreen';
import UploadImageForRentAddScreen from '../screens/User/CreateAddScreen/CreateAddForRentScreen/UploadImageForRentAddScreen';
import DataForRentAddScreen from '../screens/User/CreateAddScreen/CreateAddForRentScreen/DataForRentAddScreen';
import ForRentReviewAdScreen from '../screens/User/CreateAddScreen/CreateAddForRentScreen/ForRentReviewAdScreen';
import ForRentAddPublishScreen from '../screens/User/CreateAddScreen/CreateAddForRentScreen/ForRentAddPublishScreen';
import SuccessfullyScreen from '../screens/SuccessfullyScreen';
import CreateAddForSaleScreen from '../screens/User/CreateAddScreen/CreateAddForSaleScreen';
import UploadImageForSaleAddScreen from '../screens/User/CreateAddScreen/CreateAddForSaleScreen/UploadImageForSaleAddScreen';
import DataForSaleAddScreen from '../screens/User/CreateAddScreen/CreateAddForSaleScreen/DataForSaleAddScreen';
import ForSaleReviewAdScreen from '../screens/User/CreateAddScreen/CreateAddForSaleScreen/ForSaleReviewAdScreen';
import ForSaleAddPublishScreen from '../screens/User/CreateAddScreen/CreateAddForSaleScreen/ForSaleAddPublishScreen';
import UserNewGroupScreen from '../screens/User/UserNewGroupScreen';
import UserCreateNewGroupScreen from '../screens/User/UserNewGroupScreen/CreateNewGroupScreen/UserCreateNewGroupScreen';
import HousingAssociationGroupScreen from '../screens/User/UserNewGroupScreen/HousingAssociationGroupScreen';
import GroupSubmitComplaintScreen from '../screens/User/UserNewGroupScreen/GroupSubmitComplaintScreen';
import UsersContactScreen from '../screens/User/UserNewGroupScreen/UsersContactScreen';
import UserMessangerScreen from '../screens/User/UserNewGroupScreen/UserMessangerScreen';
import MyAdScreen from '../screens/User/MyAdScreen';

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
        <Stack.Screen name="UserSettingScreen" component={UserSettingScreen} />
        <Stack.Screen
          name="UserEditProfileScreen"
          component={UserEditProfileScreen}
        />
        <Stack.Screen
          name="UserChangePasswordScreen"
          component={UserChangePasswordScreen}
        />
        <Stack.Screen name="UserFaqScreen" component={UserFaqScreen} />
        <Stack.Screen name="UserAboutUsScreen" component={UserAboutUsScreen} />
        <Stack.Screen name="HelpScreen" component={HelpScreen} />
        <Stack.Screen
          name="UserContactUsScreen"
          component={UserContactUsScreen}
        />
        <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} />
        <Stack.Screen
          name="CreateAddForRentScreen"
          component={CreateAddForRentScreen}
        />
        <Stack.Screen
          name="UploadImageForRentAddScreen"
          component={UploadImageForRentAddScreen}
        />
        <Stack.Screen
          name="DataForRentAddScreen"
          component={DataForRentAddScreen}
        />
        <Stack.Screen
          name="ForRentReviewAdScreen"
          component={ForRentReviewAdScreen}
        />
        <Stack.Screen
          name="ForRentAddPublishScreen"
          component={ForRentAddPublishScreen}
        />
        <Stack.Screen
          name="CreateAddForSaleScreen"
          component={CreateAddForSaleScreen}
        />
        <Stack.Screen
          name="UploadImageForSaleAddScreen"
          component={UploadImageForSaleAddScreen}
        />
        <Stack.Screen
          name="DataForSaleAddScreen"
          component={DataForSaleAddScreen}
        />
        <Stack.Screen
          name="ForSaleReviewAdScreen"
          component={ForSaleReviewAdScreen}
        />
        <Stack.Screen
          name="ForSaleAddPublishScreen"
          component={ForSaleAddPublishScreen}
        />
        <Stack.Screen
          name="UserNewGroupScreen"
          component={UserNewGroupScreen}
        />
        <Stack.Screen
          name="UserCreateNewGroupScreen"
          component={UserCreateNewGroupScreen}
        />
        <Stack.Screen
          name="HousingAssociationGroupScreen"
          component={HousingAssociationGroupScreen}
        />
        <Stack.Screen
          name="GroupSubmitComplaintScreen"
          component={GroupSubmitComplaintScreen}
        />
        <Stack.Screen
          name="UsersContactScreen"
          component={UsersContactScreen}
        />
        <Stack.Screen
          name="UserMessangerScreen"
          component={UserMessangerScreen}
        />
        <Stack.Screen name="MyAdScreen" component={MyAdScreen} />
        <Stack.Screen
          name="SuccessfullyScreen"
          component={SuccessfullyScreen}
        />
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
