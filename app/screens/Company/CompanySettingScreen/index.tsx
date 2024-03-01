import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Switch,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {styles} from './style';
import {
  LeftCurve,
  Logout,
  More2,
  Notification,
} from '../../../../assets/icons/icons';
import {Font_MEDIUM} from '../../../themes/typogrphy';
import {useNavigation} from '@react-navigation/native';

const CompanySettingScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navigation = useNavigation();

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  const toggleMode = () => {
    setIsDarkMode(previousState => !previousState);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: widthPercentageToDP('90'),
            alignSelf: 'center',
            paddingVertical: heightPercentageToDP('4'),
          }}>
          <View
            style={{
              marginTop: heightPercentageToDP('2'),
              marginBottom: heightPercentageToDP('4'),
            }}>
            <Text style={styles.heading}>Settings</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <Notification />
            <Text style={styles.notificationsText}>Notifications</Text>
          </View>
          <View
            style={{
              borderWidth: 0.4,
              marginVertical: heightPercentageToDP('2'),
              borderColor: '#BBBBBB',
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.pushNotificationsText}>Push Notifications</Text>

            <Switch
              trackColor={{false: '#767577', true: '#FFF4E9'}}
              thumbColor={isEnabled ? '#F59B3B' : '#f4f3f4'}
              ios_backgroundColor="#FFF4E9"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 4,
              marginTop: heightPercentageToDP('2'),
            }}>
            <More2 />
            <Text style={styles.notificationsText}>More</Text>
          </View>
          <View
            style={{
              borderWidth: 0.4,
              marginVertical: heightPercentageToDP('2'),
              borderColor: '#BBBBBB',
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.pushNotificationsText}>Dark Mode</Text>

            <Switch
              trackColor={{false: '#767577', true: '#FFF4E9'}}
              thumbColor={isDarkMode ? '#F59B3B' : '#f4f3f4'}
              ios_backgroundColor="#FFF4E9"
              onValueChange={toggleMode}
              value={isDarkMode}
            />
          </View>

          <View
            style={{
              paddingRight: widthPercentageToDP('3'),
              marginTop: heightPercentageToDP('2'),
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CompanyEditScreen')}
              style={styles.listButtonStyle}>
              <View style={styles.flexInline}>
                <Text style={styles.listHeading}>Edit Profile</Text>
              </View>
              <LeftCurve />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('CompanyChangePasswordScreen')}
              style={styles.listButtonStyle}>
              <View style={styles.flexInline}>
                <Text style={styles.listHeading}>Update Password</Text>
              </View>
              <LeftCurve />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('CompanyFaqScreen')}
              style={styles.listButtonStyle}>
              <View style={styles.flexInline}>
                <Text style={styles.listHeading}>FAQs</Text>
              </View>
              <LeftCurve />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('CompanyAboutUsScreen')}
              style={styles.listButtonStyle}>
              <View style={styles.flexInline}>
                <Text style={styles.listHeading}>About Us</Text>
              </View>
              <LeftCurve />
            </TouchableOpacity>

            <TouchableOpacity style={styles.listButtonStyle}>
              <View style={styles.flexInline}>
                <Text style={[styles.listHeading, {color: '#FF0000'}]}>
                  Delete account
                </Text>
              </View>
              <LeftCurve />
            </TouchableOpacity>
          </View>

          <View style={{marginTop: heightPercentageToDP('4')}}>
            <TouchableOpacity style={{flexDirection: 'row', gap: 4}}>
              <Logout />
              <Text style={styles.listHeading}>Log out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompanySettingScreen;
