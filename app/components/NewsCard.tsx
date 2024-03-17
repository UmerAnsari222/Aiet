import {View, Text, Image, StyleSheet, Platform} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Image7} from '../../assets/icons/icons';
import {Font_MEDIUM, Font_SEMIBOLD} from '../themes/typogrphy';

const NewsCard = () => {
  return (
    <View style={styles.boxWrapper}>
      <View style={{flexDirection: 'row', gap: 10}}>
        <View>
          <Image source={Image7} />
        </View>
        <View style={{width: widthPercentageToDP('60')}}>
          <Text
            style={{
              color: '#000',
              fontSize: 10,
              lineHeight: 14,
              fontWeight: '600',
              fontFamily: Font_SEMIBOLD,
            }}>
            A house for sale posted near your location by one of top real estate
            agent showing some of the glimpse of the house.{' '}
          </Text>
          <Text
            style={{
              color: '#5F5F5F',
              fontSize: 10,
              lineHeight: 14,
              fontWeight: '600',
              fontFamily: Font_MEDIUM,
              marginTop: 4,
            }}>
            Today at 09:35 am
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxWrapper: {
    backgroundColor: '#F5F5F5',
    borderRadius: 13,
    paddingHorizontal: widthPercentageToDP('4'),
    paddingVertical: heightPercentageToDP('2'),
    marginVertical: heightPercentageToDP('2'),
    marginRight: heightPercentageToDP('2'),
    marginLeft: heightPercentageToDP('0.5'),
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});

export default NewsCard;
