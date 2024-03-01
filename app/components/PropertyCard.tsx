import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Font_BOLD} from '../themes/typogrphy';
import {Heart, Property, StarYellow} from '../../assets/icons/icons';

const PropertyCard = () => {
  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        paddingHorizontal: widthPercentageToDP('3'),
        paddingVertical: widthPercentageToDP('3'),
        marginVertical: heightPercentageToDP('0.7'),
      }}>
      <View>
        <ImageBackground
          source={Property}
          style={{borderRadius: 7, overflow: 'hidden'}}>
          <View
            style={{
              alignItems: 'center',
              width: 316,
              height: 178,
              position: 'relative',
              borderRadius: 15,
            }}></View>
        </ImageBackground>
        <View style={styles.starLabel}>
          <StarYellow />
          <Text
            style={{
              color: '#000000',
              fontSize: 6.32,
              lineHeight: 6.32,
            }}>
            4.9
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: heightPercentageToDP('1'),
        }}>
        <Text
          style={{
            fontSize: 14,
            color: '#000000',
            fontWeight: '700',
            fontFamily: Font_BOLD,
          }}>
          Awabi Villas
        </Text>
        <Heart />
      </View>

      <View>
        <Text
          style={{
            fontSize: 7,
            color: '#000000',
            fontWeight: '500',
            fontFamily: Font_BOLD,
            lineHeight: 6.42,
          }}>
          Business Bay, Norway
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '700',
            color: '#D07D36',
            marginVertical: widthPercentageToDP('1'),
          }}>
          $ 468,000
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  starLabel: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: widthPercentageToDP('3'),
    paddingVertical: widthPercentageToDP('2'),
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    top: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});

export default PropertyCard;
