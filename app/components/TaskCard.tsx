import {View, Text} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Font_REGULAR} from '../themes/typogrphy';

export default function TaskCard() {
  return (
    <View
      style={{
        marginVertical: heightPercentageToDP('1.5'),
        flexDirection: 'row',
        gap: 20,
      }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
          color: '#000000D9',
          fontFamily: Font_REGULAR,
          textAlign: 'left',
        }}>
        10:00
      </Text>
      <View
        style={{
          backgroundColor: '#876FFF',
          paddingHorizontal: widthPercentageToDP('4'),
          paddingVertical: widthPercentageToDP('3'),
          height: 65,
          borderRadius: 10,
          flex: 1,
        }}>
        <Text style={{color: '#FFF', fontSize: 14}}>
          Meeting with the agent
        </Text>
        <Text style={{color: '#FFF', fontSize: 14}}>10:00 - 11:00</Text>
      </View>
    </View>
  );
}
