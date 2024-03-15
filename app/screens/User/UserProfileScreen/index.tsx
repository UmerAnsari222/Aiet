import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Font_BOLD, Font_REGULAR, Font_THIN} from '../../../themes/typogrphy';
import {styles} from './style';
import {
  Adds,
  Alex,
  Headphone,
  LgStar,
  SettingBlack,
  StarYellow,
} from '../../../../assets/icons/icons';
import {useNavigation} from '@react-navigation/native';

const UserProfileScreen = () => {
  const navigation = useNavigation();
  const about =
    'psum dor amit Lorem ipsum dor amit dor um dor amit Lorem ipsum dor amit dor Lorem ipsum dor amit Lorempsum dor amit Lorem ipsum dor amit dor um dor amit Lorem ipsum dor amit dor Lorem ipsum dor';

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
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.profileText}>Profile</Text>
            <Text style={styles.profileCreatedText}>
              Profile Created: 20 Jan 2022
            </Text>
          </View>

          <View>
            <View style={styles.boxWrapper}>
              <View style={{flexDirection: 'row', gap: 10}}>
                <View>
                  <Image
                    style={{width: 54, height: 54, objectFit: 'cover'}}
                    source={Alex}
                  />
                </View>
                <View style={styles.settingWrapper}>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 4,
                      }}>
                      <Text style={styles.profileUserName}>Adam Lyth</Text>
                      <Text style={styles.profileUserAge}>25 years</Text>
                    </View>
                    <Text style={styles.profileUserDob}>12th Dec, 1999</Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => navigation.navigate('UserSettingScreen')}>
                    <SettingBlack />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.boxWrapper}>
              <Text
                style={{
                  color: '#000000',
                  fontWeight: '600',
                  fontSize: 16,
                  lineHeight: 19.2,
                }}>
                About
              </Text>

              <View>
                <Text
                  style={{
                    color: '#000000',
                    fontWeight: '400',
                    fontSize: 12,
                    lineHeight: 14.2,
                  }}>
                  {about.length > 50 ? `${about.slice(0, 120)}...` : about}
                </Text>
                {about.length > 50 && (
                  <Text
                    style={{
                      color: '#E3851E',
                      fontWeight: '600',
                      fontSize: 12,
                      lineHeight: 14.2,
                    }}>
                    Read More
                  </Text>
                )}
              </View>
            </View>

            <View style={{flexDirection: 'row', gap: 20}}>
              <View style={[styles.smBoxWrapper, {gap: 10}]}>
                <Adds />
                <Text
                  style={{
                    color: '#000000',
                    fontWeight: '600',
                    fontSize: 16,
                    lineHeight: 19.2,
                  }}>
                  My Ads
                </Text>
              </View>
              <View style={styles.smBoxWrapper}>
                <View style={{flexDirection: 'row', gap: 4}}>
                  <LgStar />
                  <Text
                    style={{
                      color: '#000000',
                      fontWeight: '600',
                      fontSize: 16,
                      lineHeight: 19.2,
                    }}>
                    4.9
                  </Text>
                </View>
                <Text
                  style={{
                    color: '#000000',
                    fontWeight: '600',
                    fontSize: 16,
                    lineHeight: 19.2,
                  }}>
                  Ratings & Reviews
                </Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('HelpScreen')}
              style={[
                styles.boxWrapper,
                {
                  height: heightPercentageToDP('15'),
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                },
              ]}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Headphone />
                <Text style={{color: '#5A5A5A', fontSize: 15, lineHeight: 18}}>
                  How can we help you?
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfileScreen;
