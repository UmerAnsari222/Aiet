import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {AboutUs, LeftArrow} from '../../../../../assets/icons/icons';
import {Font_MEDIUM, Font_REGULAR} from '../../../../themes/typogrphy';

const UserAboutUsScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            width: widthPercentageToDP('90'),
            alignSelf: 'center',
            paddingVertical: heightPercentageToDP('4'),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <LeftArrow />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: '#000000D9',
                fontFamily: Font_REGULAR,
              }}>
              About Us
            </Text>
          </View>

          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <AboutUs />
          </View>
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                lineHeight: 18,
                color: '#000000',
                fontFamily: Font_MEDIUM,
                textAlign: 'center',
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserAboutUsScreen;
