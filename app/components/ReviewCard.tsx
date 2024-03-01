import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Shape, Star, StarFull} from '../../assets/icons/icons';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Font_REGULAR} from '../themes/typogrphy';

const ReviewCard = () => {
  return (
    <View style={styles.boxWrapper}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
        }}>
        <View>
          <Image width={125} height={125} borderRadius={100} source={Shape} />
        </View>
        <View
          style={{
            paddingHorizontal: widthPercentageToDP('2'),
            width: widthPercentageToDP('70%'),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              flex: 1,
            }}>
            <Text style={styles.reviewsName}>Kurt Mullins</Text>
            <View style={{flexDirection: 'row', gap: 4}}>
              <StarFull />
              <StarFull />
              <StarFull />
              <StarFull />
              <Star />
            </View>
          </View>
          <Text style={styles.reviewContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Text style={styles.reviewTime}>8 Days ago</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxWrapper: {
    backgroundColor: '#F6F6F6',
    borderRadius: 13,
    paddingHorizontal: widthPercentageToDP('4'),
    paddingVertical: heightPercentageToDP('3'),
    marginVertical: heightPercentageToDP('2'),
    marginRight: 10,
  },
  reviewsName: {
    fontSize: 11.83,
    color: '#000000',
    lineHeight: 14,
    fontWeight: '700',
  },
  reviewContent: {
    color: '#000000',
    fontSize: 9,
    lineHeight: 19,
    fontFamily: Font_REGULAR,
  },
  reviewTime: {
    fontSize: 7,
    lineHeight: 16.76,
    fontWeight: '400',
    color: '#A1A5C1',
  },
});

export default ReviewCard;
