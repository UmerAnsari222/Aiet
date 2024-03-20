import {View, Text, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {SuccessfulIlustration} from '../../../assets/icons/icons';
import {Font_REGULAR} from '../../themes/typogrphy';

export default function SuccessfullyScreen() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <StatusBar translucent={false} />

      <ScrollView
        contentContainerStyle={{
          width: widthPercentageToDP('80'),
          alignSelf: 'center',
          paddingVertical: heightPercentageToDP('4'),
          flexGrow: 1,
          justifyContent: 'center',
        }}
        showsVerticalScrollIndicator={false}>
        {/* <View
      style={{
        flex: 1,
        width: widthPercentageToDP('90'),
        alignSelf: 'center',
        paddingVertical: heightPercentageToDP('4'),
      }}> */}
        <View>
          <View
            style={{
              alignItems: 'center',
              marginTop: heightPercentageToDP('5'),
            }}>
            <SuccessfulIlustration />
          </View>

          <View style={{marginTop: heightPercentageToDP('6'), gap: 10}}>
            <Text
              style={{
                fontSize: 21,
                fontWeight: '600',
                color: '#000000',
                fontFamily: Font_REGULAR,
                textAlign: 'center',
                flex: 1,
              }}>
              Your Ad is public Successfully
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: '#B4B4B4',
                fontFamily: Font_REGULAR,
                textAlign: 'center',
                flex: 1,
              }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </View>

        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
