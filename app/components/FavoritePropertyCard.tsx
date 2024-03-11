import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Font_BOLD} from '../themes/typogrphy';
import {Heart, HeartRead, Property, StarYellow} from '../../assets/icons/icons';

const FavoritePropertyCard = ({onPress}: {onPress: () => void}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
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
        <HeartRead />
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
    </TouchableOpacity>
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
  wrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: widthPercentageToDP('3'),
    paddingVertical: widthPercentageToDP('3'),
    marginVertical: heightPercentageToDP('0.7'),
    marginHorizontal: heightPercentageToDP('0.7'),
    ...Platform.select({
      ios: {
        shadowColor: '#F4EFEFF0',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
        shadowRadius: 10.699999809265137,
      },
      android: {
        elevation: 3,
      },
    }),
  },
});

export default FavoritePropertyCard;
